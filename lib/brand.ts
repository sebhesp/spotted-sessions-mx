import { withBasePath } from "@/lib/paths";

export const brandAssets = {
  isotype: withBasePath("/brand/spotted-isotype.png"),
  icon: withBasePath("/icon.png"),
  socialImage: withBasePath("/brand/spotted-social.jpg"),
} as const;

export const brandCopy = {
  name: "SPOTTED Sessions",
  shortName: "SPOTTED",
  tagline: "When no one's watching... Spotted.",
  concept: "El Cuarto de Atrás",
} as const;
