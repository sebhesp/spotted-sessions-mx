import type { ApplicationPayload, SubmissionResult } from "@/lib/types";

export const submissionTableByKind: Record<ApplicationPayload["kind"], string> = {
  artist: "artist_applications",
  collaborator: "collaborator_applications",
  brand: "brand_inquiries",
};

export async function submitApplication(payload: ApplicationPayload): Promise<SubmissionResult> {
  await new Promise((resolve) => setTimeout(resolve, 800));

  return {
    ok: true,
    id: `${submissionTableByKind[payload.kind]}-${Date.now()}`,
  };
}
