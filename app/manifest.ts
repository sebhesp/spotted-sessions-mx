import type { MetadataRoute } from "next";
import { basePath, withBasePath } from "@/lib/paths";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "SPOTTED Sessions",
    short_name: "SPOTTED",
    description: "Sesiones musicales íntimas en México.",
    start_url: basePath ? `${basePath}/` : "/",
    scope: basePath ? `${basePath}/` : "/",
    display: "standalone",
    background_color: "#0E0F0C",
    theme_color: "#0E0F0C",
    icons: [
      {
        src: withBasePath("/icon.png"),
        sizes: "512x512",
        type: "image/png",
      },
      {
        src: withBasePath("/brand/spotted-isotype.png"),
        sizes: "687x687",
        type: "image/png",
      },
    ],
  };
}
