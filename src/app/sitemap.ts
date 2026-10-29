import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/seo";
export default function sitemap(): MetadataRoute.Sitemap {
  return siteUrl
    ? [
        "",
        "/about",
        "/services",
        "/bridal",
        "/gallery",
        "/booking",
        "/contact",
        "/reviews",
      ].map((path) => ({ url: new URL(path, siteUrl).href }))
    : [];
}
