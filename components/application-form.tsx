"use client";

import { useMemo, useState } from "react";
import { Loader2 } from "lucide-react";
import { submitApplication } from "@/lib/submissions";
import type { FormConfig } from "@/lib/types";

type ApplicationFormProps = {
  config: FormConfig;
};

type FormStatus = "idle" | "submitting" | "success";

export function ApplicationForm({ config }: ApplicationFormProps) {
  const initialValues = useMemo(
    () =>
      config.fields.reduce<Record<string, string>>((values, field) => {
        values[field.name] = "";
        return values;
      }, {}),
    [config.fields],
  );

  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<FormStatus>("idle");

  function updateValue(name: string, value: string) {
    setValues((current) => ({ ...current, [name]: value }));
    setErrors((current) => {
      const next = { ...current };
      delete next[name];
      return next;
    });
  }

  function validate() {
    const nextErrors: Record<string, string> = {};

    for (const field of config.fields) {
      const value = values[field.name]?.trim();

      if (field.required && !value) {
        nextErrors[field.name] = "Este campo ayuda a empezar la conversación.";
      }

      if (field.type === "url" && value && !/^https?:\/\/.+\..+/i.test(value)) {
        nextErrors[field.name] = "Comparte una liga completa, empezando con https://";
      }
    }

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!validate()) {
      return;
    }

    setStatus("submitting");
    await submitApplication({ kind: config.kind, values });
    setStatus("success");
    setValues(initialValues);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="border border-line bg-ink/72 p-4 shadow-soft backdrop-blur sm:p-6"
      noValidate
    >
      <div className="mb-6">
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-amber">{config.eyebrow}</p>
        <h3 className="mt-3 font-serif text-3xl leading-none text-cream">{config.title}</h3>
        <p className="mt-3 text-sm leading-6 text-cream-muted">{config.description}</p>
      </div>

      <div className="grid gap-4">
        {config.fields.map((field) => {
          const fieldId = `${config.kind}-${field.name}`;
          const errorId = `${fieldId}-error`;

          return (
          <div key={field.name} className="grid gap-2 text-sm text-cream">
            <label htmlFor={fieldId} className="flex items-center justify-between gap-3">
              <span>{field.label}</span>
              {field.required ? <span className="text-xs uppercase text-amber">Requerido</span> : null}
            </label>

            {field.type === "textarea" ? (
              <textarea
                id={fieldId}
                value={values[field.name]}
                onChange={(event) => updateValue(field.name, event.target.value)}
                placeholder={field.placeholder}
                rows={4}
                aria-invalid={Boolean(errors[field.name])}
                aria-describedby={errors[field.name] ? errorId : undefined}
                className="min-h-32 resize-y border border-line bg-paper px-3 py-3 text-cream outline-none transition placeholder:text-cream-muted/55 focus:border-amber"
              />
            ) : field.type === "select" ? (
              <select
                id={fieldId}
                value={values[field.name]}
                onChange={(event) => updateValue(field.name, event.target.value)}
                aria-invalid={Boolean(errors[field.name])}
                aria-describedby={errors[field.name] ? errorId : undefined}
                className="border border-line bg-paper px-3 py-3 text-cream outline-none transition focus:border-amber"
              >
                <option value="">Selecciona una opción</option>
                {field.options?.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            ) : (
              <input
                id={fieldId}
                value={values[field.name]}
                onChange={(event) => updateValue(field.name, event.target.value)}
                type={field.type === "url" ? "url" : "text"}
                placeholder={field.placeholder}
                aria-invalid={Boolean(errors[field.name])}
                aria-describedby={errors[field.name] ? errorId : undefined}
                className="border border-line bg-paper px-3 py-3 text-cream outline-none transition placeholder:text-cream-muted/55 focus:border-amber"
              />
            )}

            {errors[field.name] ? (
              <span id={errorId} className="text-sm text-amber">
                {errors[field.name]}
              </span>
            ) : null}
          </div>
          );
        })}
      </div>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="mt-6 inline-flex min-h-12 w-full items-center justify-center gap-2 bg-amber px-5 py-3 text-sm font-semibold uppercase tracking-[0.16em] text-ink transition hover:bg-cream disabled:cursor-wait disabled:opacity-70"
      >
        {status === "submitting" ? <Loader2 className="h-4 w-4 animate-spin" /> : null}
        {status === "submitting" ? "Enviando" : config.submitLabel}
      </button>

      {status === "success" ? (
        <p className="mt-4 border border-bottle-soft bg-bottle/45 p-3 text-sm leading-6 text-cream">
          {config.successMessage}
        </p>
      ) : null}
    </form>
  );
}
