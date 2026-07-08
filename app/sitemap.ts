import type { MetadataRoute } from "next";
import { sessions } from "@/content/site";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/sessions", "/about", "/join", "/brands"].map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1 : 0.8,
  }));

  const sessionRoutes = sessions.map((session) => ({
    url: `${siteUrl}/sessions/${session.slug}`,
    lastModified: new Date(session.date),
    changeFrequency: "monthly" as const,
    priority: session.status === "published" ? 0.7 : 0.4,
  }));

  return [...staticRoutes, ...sessionRoutes];
}
