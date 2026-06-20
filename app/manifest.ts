import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "SPOTTED Sessions MX",
    short_name: "SPOTTED",
    description:
      "Sesiones musicales en vivo para artistas emergentes, construidas con intención, comunidad, hospitalidad y cuidado por los detalles.",
    start_url: "/",
    display: "standalone",
    background_color: "#141311",
    theme_color: "#173827",
    icons: [
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
  };
}
