import type { Metadata } from "next";

/**
 * Single source of truth for all SEO / metadata.
 * Per-page layouts call `pageMetadata()` instead of duplicating blocks.
 */
export const SITE = {
  name: "CLT Academy",
  url: "https://clt-academy.com",
  // Keyword-rich default title (homepage + template base)
  defaultTitle: "CLT Academy | No.1 Trading Academy in UAE & Dubai",
  titleTemplate: "%s | CLT Academy",
  description:
    "CLT Academy is the leading trading academy in the UAE — expert-led forex, stock & crypto trading courses in Dubai with mentorship, live sessions and certification.",
  ogImage: "/logo.png",
  locale: "en_AE",
  phone: "+971557454939",
  email: "info@clt-academy.com",
  address: {
    streetAddress: "M09, Al Shaibani Building, Hor Al Anz East",
    addressLocality: "Dubai",
    addressCountry: "AE",
  },
  socials: [
    "https://www.linkedin.com/in/clt-academy/",
    "https://www.youtube.com/@CLTACADEMY-p8s",
    "https://www.instagram.com/clt_academy.ae/",
  ],
} as const;

type PageMetaInput = {
  title?: string;
  description?: string;
  /** Path with leading slash, e.g. "/courses". Used for canonical + og:url. */
  path?: string;
  images?: { url: string; width?: number; height?: number; alt?: string }[];
};

export function pageMetadata({
  title,
  description,
  path = "/",
  images,
}: PageMetaInput): Metadata {
  const url = `${SITE.url}${path === "/" ? "" : path}`;
  const desc = description ?? SITE.description;
  const ogImages =
    images ?? [{ url: SITE.ogImage, width: 1200, height: 630, alt: SITE.name }];

  return {
    title,
    description: desc,
    alternates: { canonical: url },
    openGraph: {
      title: title ?? SITE.defaultTitle,
      description: desc,
      url,
      siteName: SITE.name,
      locale: SITE.locale,
      type: "website",
      images: ogImages,
    },
    twitter: {
      card: "summary_large_image",
      title: title ?? SITE.defaultTitle,
      description: desc,
      images: ogImages.map((i) => i.url),
    },
  };
}
