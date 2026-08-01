import type { ApplicationKind } from "@/lib/types";

export type ApplicationValidationResult =
  | { ok: true; data: Record<string, string | boolean> }
  | { ok: false; errors: Record<string, string> };

type FieldRule = {
  required?: boolean;
  email?: boolean;
  boolean?: boolean;
  max?: number;
};

const fieldRules: Record<ApplicationKind, Record<string, FieldRule>> = {
  artist: {
    artistName: { required: true, max: 140 },
    contactName: { required: true, max: 140 },
    email: { required: true, email: true, max: 180 },
    phone: { max: 80 },
    city: { required: true, max: 120 },
    musicDescription: { required: true, max: 2000 },
    musicLinks: { max: 2000 },
    instagram: { max: 240 },
    tiktok: { max: 240 },
    youtube: { max: 240 },
    proposedSong: { required: true, max: 180 },
    approximateMusicians: { max: 120 },
    initialTechnicalNeeds: { max: 2000 },
    message: { max: 2000 },
    privacyConsent: { required: true, boolean: true },
  },
  collaborator: {
    name: { required: true, max: 140 },
    email: { required: true, email: true, max: 180 },
    phone: { max: 80 },
    city: { required: true, max: 120 },
    role: { required: true, max: 120 },
    portfolio: { max: 240 },
    instagram: { max: 240 },
    experience: { required: true, max: 2000 },
    availability: { max: 1000 },
    rateRange: { max: 140 },
    ownEquipment: { max: 80 },
    message: { max: 2000 },
    privacyConsent: { required: true, boolean: true },
  },
  brand: {
    contactName: { required: true, max: 140 },
    company: { required: true, max: 160 },
    position: { max: 140 },
    email: { required: true, email: true, max: 180 },
    phone: { max: 80 },
    collaborationType: { required: true, max: 140 },
    estimatedBudget: { max: 140 },
    objective: { required: true, max: 2000 },
    message: { max: 2000 },
    privacyConsent: { required: true, boolean: true },
  },
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function normalizeValue(value: unknown, rule: FieldRule) {
  if (rule.boolean) {
    return value === true || value === "true" || value === "on";
  }

  if (typeof value !== "string") {
    return "";
  }

  return value.replace(/[<>]/g, "").trim();
}

export function validateApplication(kind: ApplicationKind, payload: unknown): ApplicationValidationResult {
  if (!payload || typeof payload !== "object") {
    return { ok: false, errors: { form: "Solicitud invalida." } };
  }

  const source = payload as Record<string, unknown>;
  const rules = fieldRules[kind];
  const errors: Record<string, string> = {};
  const data: Record<string, string | boolean> = {};

  Object.entries(rules).forEach(([field, rule]) => {
    const value = normalizeValue(source[field], rule);

    if (rule.required && (value === "" || value === false)) {
      errors[field] = "Este campo es obligatorio.";
      return;
    }

    if (typeof value === "string") {
      if (rule.max && value.length > rule.max) {
        errors[field] = `Usa ${rule.max} caracteres o menos.`;
        return;
      }

      if (rule.email && value && !emailPattern.test(value)) {
        errors[field] = "Escribe un email valido.";
        return;
      }
    }

    data[field] = value;
  });

  return Object.keys(errors).length > 0 ? { ok: false, errors } : { ok: true, data };
}

export function getSupabaseTable(kind: ApplicationKind) {
  return {
    artist: "artist_applications",
    collaborator: "collaborator_applications",
    brand: "brand_inquiries",
  }[kind];
}

export function toSnakeCaseRecord(data: Record<string, string | boolean>) {
  return Object.fromEntries(
    Object.entries(data).map(([key, value]) => [
      key.replace(/[A-Z]/g, (letter) => `_${letter.toLowerCase()}`),
      value,
    ]),
  );
}
