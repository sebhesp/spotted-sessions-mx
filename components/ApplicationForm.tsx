"use client";

import { useId, useMemo, useState } from "react";
import type { ApplicationKind } from "@/lib/types";
import { cn } from "@/lib/utils";

type FieldConfig = {
  name: string;
  label: string;
  type?: "text" | "email" | "tel" | "url" | "textarea" | "select" | "checkbox";
  required?: boolean;
  placeholder?: string;
  options?: string[];
  helper?: string;
};

type ApplicationFormProps = {
  kind: ApplicationKind;
};

type SubmitState = {
  status: "idle" | "submitting" | "success" | "error";
  message: string;
  errors: Record<string, string>;
};

const commonConsent: FieldConfig = {
  name: "privacyConsent",
  label: "Acepto que SPOTTED use esta informacion para responder mi solicitud.",
  type: "checkbox",
  required: true,
};

const fieldSets: Record<ApplicationKind, FieldConfig[]> = {
  artist: [
    { name: "artistName", label: "Nombre artistico", required: true },
    { name: "contactName", label: "Nombre de contacto", required: true },
    { name: "email", label: "Email", type: "email", required: true },
    { name: "phone", label: "Telefono", type: "tel" },
    { name: "city", label: "Ciudad", required: true },
    { name: "musicDescription", label: "Como describirias tu musica", type: "textarea", required: true },
    { name: "musicLinks", label: "Links de musica", type: "textarea", placeholder: "Spotify, YouTube, Bandcamp, Drive..." },
    { name: "instagram", label: "Instagram", type: "url" },
    { name: "tiktok", label: "TikTok", type: "url" },
    { name: "youtube", label: "YouTube", type: "url" },
    { name: "proposedSong", label: "Cancion propuesta", required: true },
    { name: "approximateMusicians", label: "Musicos aproximados" },
    { name: "initialTechnicalNeeds", label: "Necesidades tecnicas iniciales", type: "textarea" },
    { name: "message", label: "Mensaje", type: "textarea" },
    commonConsent,
  ],
  collaborator: [
    { name: "name", label: "Nombre", required: true },
    { name: "email", label: "Email", type: "email", required: true },
    { name: "phone", label: "Telefono", type: "tel" },
    { name: "city", label: "Ciudad", required: true },
    {
      name: "role",
      label: "Rol principal",
      type: "select",
      required: true,
      options: [
        "Musicos",
        "Arreglistas",
        "Produccion",
        "Fotografia",
        "Video",
        "Audio",
        "Iluminacion",
        "Styling",
        "Maquillaje",
        "Chef",
        "Sous-chef",
        "Hospitalidad",
        "Otros",
      ],
    },
    { name: "portfolio", label: "Portafolio", type: "url" },
    { name: "instagram", label: "Instagram", type: "url" },
    { name: "experience", label: "Experiencia", type: "textarea", required: true },
    { name: "availability", label: "Disponibilidad por sesion", type: "textarea" },
    { name: "rateRange", label: "Rango de tarifa" },
    {
      name: "ownEquipment",
      label: "Equipo propio relevante",
      type: "select",
      options: ["Si", "No", "Parcial", "No aplica"],
    },
    { name: "message", label: "Mensaje", type: "textarea" },
    commonConsent,
  ],
  brand: [
    { name: "contactName", label: "Nombre de contacto", required: true },
    { name: "company", label: "Empresa", required: true },
    { name: "position", label: "Cargo" },
    { name: "email", label: "Email", type: "email", required: true },
    { name: "phone", label: "Telefono", type: "tel" },
    {
      name: "collaborationType",
      label: "Tipo de colaboracion",
      type: "select",
      required: true,
      options: ["Hospitalidad", "Producto en set", "Contenido editorial", "Patrocinio de sesion", "Otra"],
    },
    { name: "estimatedBudget", label: "Presupuesto estimado" },
    { name: "objective", label: "Objetivo", type: "textarea", required: true },
    { name: "message", label: "Mensaje", type: "textarea" },
    commonConsent,
  ],
};

const formCopy: Record<ApplicationKind, { title: string; intro: string; success: string }> = {
  artist: {
    title: "Aplicar como artista",
    intro: "Cuentanos que cancion quieres adaptar al cuarto y que necesita para sentirse viva.",
    success: "Recibimos tu aplicacion. Revisaremos si hay una sesion compatible.",
  },
  collaborator: {
    title: "Colaborar con SPOTTED",
    intro: "El trabajo es pagado y por sesion. No pedimos disponibilidad permanente.",
    success: "Recibimos tu perfil. Lo consideraremos segun cada produccion.",
  },
  brand: {
    title: "Hablar de marca",
    intro: "Buscamos integraciones discretas, utiles y cuidadas. Nada invasivo.",
    success: "Recibimos tu solicitud. Te responderemos con una ruta posible.",
  },
};

function getStringValue(formData: FormData, name: string) {
  const value = formData.get(name);
  return typeof value === "string" ? value.trim() : "";
}

export function ApplicationForm({ kind }: ApplicationFormProps) {
  const formId = useId();
  const fields = useMemo(() => fieldSets[kind], [kind]);
  const [state, setState] = useState<SubmitState>({
    status: "idle",
    message: "",
    errors: {},
  });

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const nextErrors: Record<string, string> = {};

    fields.forEach((field) => {
      const value = field.type === "checkbox" ? formData.get(field.name) : getStringValue(formData, field.name);
      if (field.required && !value) {
        nextErrors[field.name] = "Este campo es obligatorio.";
      }
    });

    const email = getStringValue(formData, "email");
    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      nextErrors.email = "Escribe un email valido.";
    }

    if (Object.keys(nextErrors).length > 0) {
      setState({
        status: "error",
        message: "Revisa los campos marcados.",
        errors: nextErrors,
      });
      return;
    }

    const payload = Object.fromEntries(formData.entries());
    payload.kind = kind;
    payload.privacyConsent = formData.get("privacyConsent") === "on" ? "true" : "false";

    setState({ status: "submitting", message: "Enviando...", errors: {} });

    try {
      const response = await fetch("/api/applications", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const result = (await response.json()) as { message?: string; errors?: Record<string, string> };

      if (!response.ok) {
        setState({
          status: "error",
          message: result.message ?? "No pudimos enviar la solicitud.",
          errors: result.errors ?? {},
        });
        return;
      }

      form.reset();
      setState({
        status: "success",
        message: result.message ?? formCopy[kind].success,
        errors: {},
      });
    } catch {
      setState({
        status: "error",
        message: "No pudimos conectar con el servidor. Intenta de nuevo.",
        errors: {},
      });
    }
  }

  return (
    <form
      id={`${formId}-${kind}`}
      onSubmit={handleSubmit}
      className="rounded-sm border border-border bg-black/22 p-5 md:p-6"
      noValidate
    >
      <div className="max-w-2xl">
        <h2 className="display-type text-4xl leading-none text-cream">{formCopy[kind].title}</h2>
        <p className="mt-3 text-sm leading-6 text-muted">{formCopy[kind].intro}</p>
      </div>

      <div className="hidden" aria-hidden="true">
        <label htmlFor={`${formId}-${kind}-website`}>Website</label>
        <input id={`${formId}-${kind}-website`} name="website" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="mt-8 grid gap-5 md:grid-cols-2">
        {fields.map((field) => {
          const inputId = `${formId}-${kind}-${field.name}`;
          const errorId = `${inputId}-error`;
          const hasError = Boolean(state.errors[field.name]);
          const sharedClass = cn(
            "mt-2 min-h-12 w-full rounded-sm border bg-charcoal/72 px-3 py-3 text-cream placeholder:text-cream/36",
            hasError ? "border-burnt-orange" : "border-cream/18",
          );

          if (field.type === "checkbox") {
            return (
              <div key={field.name} className="md:col-span-2">
                <label className="flex items-start gap-3 text-sm leading-6 text-muted" htmlFor={inputId}>
                  <input
                    id={inputId}
                    name={field.name}
                    type="checkbox"
                    required={field.required}
                    aria-invalid={hasError}
                    aria-describedby={hasError ? errorId : undefined}
                    className="mt-1 h-5 w-5 rounded-sm border border-cream/28 accent-burnt-orange"
                  />
                  <span>{field.label}</span>
                </label>
                {hasError ? (
                  <p id={errorId} className="mt-2 text-sm text-burnt-orange">
                    {state.errors[field.name]}
                  </p>
                ) : null}
              </div>
            );
          }

          return (
            <div key={field.name} className={field.type === "textarea" ? "md:col-span-2" : undefined}>
              <label htmlFor={inputId} className="text-sm font-medium text-cream">
                {field.label}
                {field.required ? <span className="text-burnt-orange"> *</span> : null}
              </label>
              {field.type === "textarea" ? (
                <textarea
                  id={inputId}
                  name={field.name}
                  required={field.required}
                  placeholder={field.placeholder}
                  rows={5}
                  aria-invalid={hasError}
                  aria-describedby={hasError ? errorId : field.helper ? `${inputId}-helper` : undefined}
                  className={sharedClass}
                />
              ) : field.type === "select" ? (
                <select
                  id={inputId}
                  name={field.name}
                  required={field.required}
                  aria-invalid={hasError}
                  aria-describedby={hasError ? errorId : field.helper ? `${inputId}-helper` : undefined}
                  className={sharedClass}
                  defaultValue=""
                >
                  <option value="" disabled>
                    Selecciona una opcion
                  </option>
                  {field.options?.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              ) : (
                <input
                  id={inputId}
                  name={field.name}
                  type={field.type ?? "text"}
                  required={field.required}
                  placeholder={field.placeholder}
                  aria-invalid={hasError}
                  aria-describedby={hasError ? errorId : field.helper ? `${inputId}-helper` : undefined}
                  className={sharedClass}
                />
              )}
              {field.helper ? (
                <p id={`${inputId}-helper`} className="mt-2 text-xs leading-5 text-muted">
                  {field.helper}
                </p>
              ) : null}
              {hasError ? (
                <p id={errorId} className="mt-2 text-sm text-burnt-orange">
                  {state.errors[field.name]}
                </p>
              ) : null}
            </div>
          );
        })}
      </div>

      <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
        <button
          type="submit"
          disabled={state.status === "submitting"}
          className="min-h-12 rounded-sm border border-burnt-orange bg-burnt-orange px-5 py-3 text-sm font-semibold text-black transition hover:border-cream hover:bg-cream disabled:cursor-wait disabled:opacity-70"
        >
          {state.status === "submitting" ? "Enviando..." : "Enviar solicitud"}
        </button>
        <p
          role="status"
          aria-live="polite"
          className={cn(
            "text-sm leading-6",
            state.status === "success" ? "text-cream" : "text-muted",
            state.status === "error" ? "text-burnt-orange" : undefined,
          )}
        >
          {state.message}
        </p>
      </div>
    </form>
  );
}
