import type { ApplicationPayload, SubmissionResult } from "@/lib/types";

export async function submitApplication(payload: ApplicationPayload): Promise<SubmissionResult> {
  await new Promise((resolve) => setTimeout(resolve, 800));

  return {
    ok: true,
    id: `${payload.kind}-${Date.now()}`,
  };
}
