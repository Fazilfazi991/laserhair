import { clinics, type Clinic } from "@/data/clinics";
import { deals, type Faq, type Page } from "@/data/site";
import { absoluteUrl, siteConfig } from "./site-config";
import { withTrailingSlash } from "./seo";

const modified = "2026-05-31T00:00:00Z";

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${siteConfig.url}/#organization`,
  name: siteConfig.legalName,
  url: siteConfig.url,
  logo: absoluteUrl(siteConfig.logo),
  email: siteConfig.email,
  telephone: siteConfig.phone,
  sameAs: siteConfig.sameAs,
  areaServed: siteConfig.areaServed.map((name) => ({ "@type": "Place", name }))
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${siteConfig.url}/#website`,
  url: siteConfig.url,
  name: siteConfig.name,
  publisher: { "@id": `${siteConfig.url}/#organization` },
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: `${siteConfig.url}/search?q={query}`
    },
    "query-input": "required name=query"
  }
};

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(withTrailingSlash(item.path))
    }))
  };
}

export function faqSchema(faqs: Faq[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: { "@type": "Answer", text: faq.a }
    }))
  };
}

export function articleSchema(page: Page, medical = false) {
  return {
    "@context": "https://schema.org",
    "@type": medical ? "MedicalWebPage" : "Article",
    headline: page.title,
    description: page.meta,
    image: absoluteUrl(siteConfig.ogImage),
    datePublished: "2026-05-30T00:00:00Z",
    dateModified: modified,
    author: { "@type": "Organization", name: siteConfig.legalName, url: siteConfig.url },
    publisher: { "@id": `${siteConfig.url}/#organization` },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": absoluteUrl(withTrailingSlash(page.slug))
    },
    ...(medical && {
      lastReviewed: modified,
      medicalAudience: "https://schema.org/Patient"
    })
  };
}

export function serviceSchema(page: Page) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: page.h1,
    description: page.meta,
    provider: { "@id": `${siteConfig.url}/#organization` },
    areaServed: siteConfig.areaServed.map((name) => ({ "@type": "Place", name })),
    url: absoluteUrl(withTrailingSlash(page.slug))
  };
}

export function clinicSchema(clinic: Clinic) {
  return {
    "@context": "https://schema.org",
    "@type": "MedicalClinic",
    name: clinic.name,
    address: {
      "@type": "PostalAddress",
      streetAddress: clinic.address,
      addressLocality: clinic.city,
      addressCountry: "AE"
    },
    telephone: clinic.phone,
    url: clinic.website,
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: clinic.rating,
      reviewCount: clinic.reviewCount
    }
  };
}

export function itemListSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      url: item.url
    }))
  };
}

export function offerSchema(deal: (typeof deals)[number]) {
  return {
    "@context": "https://schema.org",
    "@type": "Offer",
    name: deal.title,
    description: deal.description,
    validFrom: "2026-05-31",
    priceValidUntil: deal.validUntil,
    url: `${siteConfig.url}/deals/`,
    availability: "https://schema.org/InStock",
    priceCurrency: "AED"
  };
}

export function pageSchemas(page: Page, visibleClinics: Clinic[]) {
  const schemas: object[] = [
    breadcrumbSchema([
      { name: "Home", path: "/" },
      ...(page.slug ? [{ name: page.h1, path: page.slug }] : [])
    ])
  ];

  if (page.faqs?.length) schemas.push(faqSchema(page.faqs));

  if (page.kind === "home") {
    schemas.push(serviceSchema(page));
  } else if (["body", "dark-skin", "men"].includes(page.kind) || ["dark-skin", "men"].includes(page.slug)) {
    schemas.push(articleSchema(page, true));
    if (page.kind === "body") schemas.push(serviceSchema(page));
  } else if (["guide", "utility"].includes(page.kind)) {
    schemas.push(articleSchema(page));
  }

  if (["clinic", "area"].includes(page.kind)) {
    schemas.push(
      itemListSchema(
        visibleClinics.map((clinic) => ({
          name: clinic.name,
          url: clinic.website
        }))
      ),
      ...visibleClinics.map(clinicSchema)
    );
  }

  if (page.kind === "deals") {
    schemas.push(
      itemListSchema(deals.map((deal) => ({ name: deal.title, url: `${siteConfig.url}/deals/#${deal.id}` }))),
      ...deals.map(offerSchema)
    );
  }

  if (page.kind === "compare") {
    schemas.push(
      itemListSchema(
        clinics.map((clinic) => ({
          name: clinic.name,
          url: clinic.website
        }))
      )
    );
  }

  return schemas;
}
