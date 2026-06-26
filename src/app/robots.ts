import type { MetadataRoute } from "next";
import { SITE } from "@/const/seo";

/** Served at /robots.txt. Points crawlers to the sitemap. */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${SITE.url}/sitemap.xml`,
    host: SITE.url,
  };
}
