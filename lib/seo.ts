import type { Metadata } from "next";
import { absoluteUrl, siteConfig } from "./site-config";

type PageSEO = {
  title: string;
  description: string;
  path: string;
  ogImage?: string;
  type?: "website" | "article";
  publishedTime?: string;
  modifiedTime?: string;
  noindex?: boolean;
};

export function withTrailingSlash(path: string) {
  if (path === "" || path === "/") return "/";
  const clean = path.startsWith("/") ? path : `/${path}`;
  return clean.endsWith("/") ? clean : `${clean}/`;
}

export function buildMetadata(page: PageSEO): Metadata {
  const path = withTrailingSlash(page.path);
  const image = absoluteUrl(page.ogImage ?? siteConfig.ogImage);

  return {
    title: page.title,
    description: page.description,
    alternates: {
      canonical: path,
      languages: {
        "en-AE": path,
        "x-default": path
      }
    },
    openGraph: {
      type: page.type ?? "website",
      locale: siteConfig.locale,
      url: absoluteUrl(path),
      siteName: siteConfig.name,
      title: page.title,
      description: page.description,
      images: [{ url: image, width: 1200, height: 630, alt: page.title }],
      ...(page.publishedTime && { publishedTime: page.publishedTime }),
      ...(page.modifiedTime && { modifiedTime: page.modifiedTime })
    },
    twitter: {
      card: "summary_large_image",
      title: page.title,
      description: page.description,
      site: siteConfig.twitter,
      creator: siteConfig.twitter,
      images: [image]
    },
    robots: page.noindex ? { index: false, follow: false } : undefined
  };
}
