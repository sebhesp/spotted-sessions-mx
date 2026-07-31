import type { MetadataRoute } from "next";
import { basePath, withBasePath } from "@/lib/paths";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "SPOTTED Sessions",
    short_name: "SPOTTED",
    description: "Sesiones musicales intimas en Mexico.",
    start_url: basePath ? `${basePath}/` : "/",
    scope: basePath ? `${basePath}/` : "/",
    display: "standalone",
    background_color: "#0F0F0E",
    theme_color: "#0F0F0E",
    icons: [
      {
        src: withBasePath("/icon.svg"),
        sizes: "64x64",
        type: "image/svg+xml",
      },
    ],
  };
}
