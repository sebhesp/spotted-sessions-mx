export type FormKind = "artist" | "collaborator" | "brand";

export type FieldType = "text" | "url" | "textarea" | "select";

export type FormField = {
  name: string;
  label: string;
  type: FieldType;
  required?: boolean;
  placeholder?: string;
  options?: string[];
};

export type FormConfig = {
  kind: FormKind;
  eyebrow: string;
  title: string;
  description: string;
  submitLabel: string;
  successMessage: string;
  fields: FormField[];
};

export type ApplicationPayload = {
  kind: FormKind;
  values: Record<string, string>;
};

export type SubmissionResult = {
  ok: boolean;
  id: string;
};

export type RoleStatus = "Ocupado" | "Abierto";

export type Role = {
  name: string;
  group: string;
  status: RoleStatus;
};

export type SessionPreview = {
  title: string;
  status: string;
  note: string;
};
