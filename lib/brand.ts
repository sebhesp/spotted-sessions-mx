import { withBasePath } from "@/lib/paths";

export const brandAssets = {
  isotype: withBasePath("/brand/spotted-isotype.svg"),
  wordmark: withBasePath("/brand/spotted-wordmark.svg"),
  lockup: withBasePath("/brand/spotted-lockup.svg"),
} as const;

export const brandCopy = {
  name: "SPOTTED Sessions",
  shortName: "SPOTTED",
  tagline: "When no one's watching... Spotted.",
  concept: "El Cuarto de Atras",
} as const;
