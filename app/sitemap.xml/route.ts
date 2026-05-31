import { pages } from "@/data/site";
import { siteConfig } from "@/lib/site-config";
import { withTrailingSlash } from "@/lib/seo";

function escapeXml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

export function GET() {
  const lastModified = "2026-05-31";
  const urls = pages
    .map((page) => {
      const priority = page.slug === "" ? 1 : ["cost", "clinics/dubai"].includes(page.slug) ? 0.9 : 0.75;
      const changeFrequency = page.kind === "deals" ? "weekly" : "monthly";

      return [
        "  <url>",
        `    <loc>${escapeXml(`${siteConfig.url}${withTrailingSlash(page.slug)}`)}</loc>`,
        `    <lastmod>${lastModified}</lastmod>`,
        `    <changefreq>${changeFrequency}</changefreq>`,
        `    <priority>${priority}</priority>`,
        "  </url>"
      ].join("\n");
    })
    .join("\n");

  const body = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    urls,
    "</urlset>"
  ].join("\n");

  return new Response(body, {
    headers: {
      "Content-Type": "application/xml"
    }
  });
}
