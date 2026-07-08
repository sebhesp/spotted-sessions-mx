import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "SPOTTED Sessions",
    short_name: "SPOTTED",
    description: "Sesiones musicales intimas en Mexico.",
    start_url: "/",
    display: "standalone",
    background_color: "#0F0F0E",
    theme_color: "#0F0F0E",
    icons: [
      {
        src: "/icon.svg",
        sizes: "64x64",
        type: "image/svg+xml",
      },
    ],
  };
}
