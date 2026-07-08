import { NextRequest, NextResponse } from "next/server";
import type { ApplicationKind } from "@/lib/types";
import { getSupabaseTable, toSnakeCaseRecord, validateApplication } from "@/lib/application-validation";

const requestLog = new Map<string, number[]>();
const allowedKinds = new Set<ApplicationKind>(["artist", "collaborator", "brand"]);

function getClientKey(request: NextRequest) {
  return request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "local";
}

function isRateLimited(key: string) {
  const now = Date.now();
  const windowMs = 60_000;
  const history = requestLog.get(key)?.filter((time) => now - time < windowMs) ?? [];
  history.push(now);
  requestLog.set(key, history);
  return history.length > 8;
}

export async function POST(request: NextRequest) {
  const key = getClientKey(request);

  if (isRateLimited(key)) {
    return NextResponse.json(
      { message: "Demasiados intentos por ahora. Intenta nuevamente en un minuto." },
      { status: 429 },
    );
  }

  let payload: Record<string, unknown>;

  try {
    payload = (await request.json()) as Record<string, unknown>;
  } catch {
    return NextResponse.json({ message: "No pudimos leer la solicitud." }, { status: 400 });
  }

  if (typeof payload.website === "string" && payload.website.trim() !== "") {
    return NextResponse.json({ message: "Solicitud recibida." }, { status: 202 });
  }

  const kind = payload.kind;
  if (typeof kind !== "string" || !allowedKinds.has(kind as ApplicationKind)) {
    return NextResponse.json({ message: "Tipo de formulario invalido." }, { status: 400 });
  }

  const validation = validateApplication(kind as ApplicationKind, payload);
  if (!validation.ok) {
    return NextResponse.json(
      { message: "Revisa los campos marcados.", errors: validation.errors },
      { status: 422 },
    );
  }

  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!supabaseUrl || !supabaseAnonKey) {
    const devMessage =
      process.env.NODE_ENV === "production"
        ? "El formulario no esta disponible temporalmente."
        : "Supabase no esta configurado. Agrega NEXT_PUBLIC_SUPABASE_URL y NEXT_PUBLIC_SUPABASE_ANON_KEY para guardar solicitudes.";

    return NextResponse.json({ message: devMessage }, { status: 503 });
  }

  const table = getSupabaseTable(kind as ApplicationKind);
  const insertPayload = {
    ...toSnakeCaseRecord(validation.data),
    source: "spotted-sessions-web",
  };

  const response = await fetch(`${supabaseUrl.replace(/\/$/, "")}/rest/v1/${table}`, {
    method: "POST",
    headers: {
      apikey: supabaseAnonKey,
      Authorization: `Bearer ${supabaseAnonKey}`,
      "Content-Type": "application/json",
      Prefer: "return=minimal",
    },
    body: JSON.stringify(insertPayload),
  });

  if (!response.ok) {
    return NextResponse.json(
      { message: "No pudimos guardar la solicitud. Intenta mas tarde." },
      { status: 502 },
    );
  }

  return NextResponse.json({ message: "Solicitud recibida. Gracias por escribir a SPOTTED." });
}
