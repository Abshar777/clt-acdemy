import type { MetadataRoute } from "next";
import { SITE } from "@/const/seo";

/**
 * Static sitemap. Served at /sitemap.xml.
 * Add dynamic routes (blogs/courses) here once they read from the API.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const routes: { path: string; priority: number; changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"] }[] = [
    { path: "/", priority: 1.0, changeFrequency: "weekly" },
    { path: "/about", priority: 0.8, changeFrequency: "monthly" },
    { path: "/courses", priority: 0.9, changeFrequency: "weekly" },
    { path: "/team", priority: 0.7, changeFrequency: "monthly" },
    { path: "/addons", priority: 0.7, changeFrequency: "monthly" },
    { path: "/gallery", priority: 0.6, changeFrequency: "monthly" },
    { path: "/contact", priority: 0.7, changeFrequency: "yearly" },
    { path: "/blogs", priority: 0.6, changeFrequency: "weekly" },
    { path: "/disclaimer", priority: 0.3, changeFrequency: "yearly" },
    { path: "/privacy-policy", priority: 0.3, changeFrequency: "yearly" },
    { path: "/termsandcondition", priority: 0.3, changeFrequency: "yearly" },
  ];

  const lastModified = new Date();

  return routes.map((r) => ({
    url: `${SITE.url}${r.path === "/" ? "" : r.path}`,
    lastModified,
    changeFrequency: r.changeFrequency,
    priority: r.priority,
  }));
}
