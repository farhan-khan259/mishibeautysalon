import type { Metadata } from "next";
const configured =
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : undefined);
export const siteUrl = configured ? new URL(configured) : undefined;
export function metadata(
  title: string,
  description: string,
  path: string,
): Metadata {
  return {
    title,
    description,
    alternates: siteUrl ? { canonical: new URL(path, siteUrl) } : undefined,
    openGraph: {
      title,
      description,
      type: "website",
      locale: "en_PK",
      ...(siteUrl
        ? {
            url: new URL(path, siteUrl),
            images: [
              {
                url: new URL("/opengraph-image", siteUrl).href,
                width: 1200,
                height: 630,
              },
            ],
          }
        : {}),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      ...(siteUrl
        ? { images: [new URL("/opengraph-image", siteUrl).href] }
        : {}),
    },
  };
}
