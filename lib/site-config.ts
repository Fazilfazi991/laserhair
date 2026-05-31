export const siteConfig = {
  name: "LaserHairRemovalUAE",
  legalName: "LaserHairRemovalUAE.com",
  url: "https://laserhairremovaluae.com",
  defaultTitle: "Laser Hair Removal UAE - Compare Top Clinics & Prices 2026",
  defaultDescription:
    "Compare the best laser hair removal clinics in Dubai, Abu Dhabi and Sharjah. Real 2026 prices, treatment guides and free clinic matching.",
  locale: "en_AE",
  language: "en-AE",
  twitter: "@laserhairuae",
  ogImage: "/images/home-hero.png",
  logo: "/images/home-hero.png",
  phone: "+971-XX-XXX-XXXX",
  email: "hello@laserhairremovaluae.com",
  sameAs: [
    "https://www.instagram.com/laserhairremovaluae",
    "https://www.facebook.com/laserhairremovaluae"
  ],
  geo: { lat: 25.2048, lng: 55.2708 },
  areaServed: ["Dubai", "Abu Dhabi", "Sharjah", "United Arab Emirates"]
};

export function absoluteUrl(path = "/") {
  if (path.startsWith("http")) return path;
  return `${siteConfig.url}${path.startsWith("/") ? path : `/${path}`}`;
}
