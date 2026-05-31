import { clinics } from "./clinics";

export type Faq = { q: string; a: string };
export type PriceRow = { area: string; session: string; package: string };

export const priceRows: PriceRow[] = [
  { area: "Underarms", session: "AED 95-180", package: "AED 520-980" },
  { area: "Bikini / Brazilian", session: "AED 180-420", package: "AED 1,000-2,400" },
  { area: "Face", session: "AED 120-300", package: "AED 700-1,650" },
  { area: "Half legs", session: "AED 220-450", package: "AED 1,250-2,600" },
  { area: "Full legs", session: "AED 350-750", package: "AED 2,000-4,300" },
  { area: "Full body", session: "AED 650-1,600", package: "AED 3,600-9,000" }
];

export const cityRows = [
  { city: "Dubai", session: "AED 150-1,600", note: "Highest clinic density and widest technology choice." },
  { city: "Abu Dhabi", session: "AED 140-1,450", note: "Premium clinics cluster around central districts." },
  { city: "Sharjah", session: "AED 95-1,100", note: "Often lower entry prices and package offers." }
];

export const areas = [
  "Dubai Marina",
  "JLT",
  "Downtown Dubai",
  "Business Bay",
  "Jumeirah",
  "Deira"
];

export const deals = [
  {
    id: "full-body-summer",
    clinicId: "marina-skin-laser",
    title: "35% off full-body packages",
    description: "Six-session full-body laser package with consultation included.",
    discountPct: 35,
    validUntil: "2026-06-30",
    featured: true
  },
  {
    id: "underarm-starter",
    clinicId: "jumeirah-laser-studio",
    title: "Underarm starter session from AED 99",
    description: "Intro session for first-time patients, subject to skin assessment.",
    discountPct: 25,
    validUntil: "2026-06-15",
    featured: false
  },
  {
    id: "abu-dhabi-men",
    clinicId: "capital-laser-clinic",
    title: "Men's back and chest bundle",
    description: "Bundled pricing for back, chest and shoulder laser treatments.",
    discountPct: 30,
    validUntil: "2026-07-10",
    featured: true
  }
];

const defaultFaqs: Faq[] = [
  {
    q: "How many sessions does laser hair removal usually take?",
    a: "Most people need 6 to 8 sessions, spaced 4 to 6 weeks apart. Hormonal areas such as the face may need maintenance sessions."
  },
  {
    q: "Is laser hair removal permanent?",
    a: "It is best described as long-term hair reduction. Many clients see major reduction, but occasional maintenance is normal."
  },
  {
    q: "Is it safe for brown or dark skin?",
    a: "Yes, when the clinic uses suitable settings and often an Nd:YAG laser for deeper skin tones. A patch test is sensible."
  },
  {
    q: "Can I get laser in summer in the UAE?",
    a: "Yes, but avoid tanning and direct sun exposure before and after treatment. Good aftercare matters more in UAE heat."
  }
];

export type Page = {
  slug: string;
  title: string;
  meta: string;
  h1: string;
  keyword: string;
  quick: string;
  kind: "home" | "guide" | "body" | "clinic" | "area" | "deals" | "compare" | "utility";
  sections?: { heading: string; body: string }[];
  faqs?: Faq[];
};

export const pages: Page[] = [
  {
    slug: "",
    title: "Laser Hair Removal UAE - Compare Top Clinics & Prices 2026",
    meta: "Compare laser hair removal clinics in Dubai, Abu Dhabi and Sharjah. Real prices, treatment guides, offers and free clinic matching.",
    h1: "Find the Best Laser Hair Removal in the UAE",
    keyword: "laser hair removal UAE",
    quick:
      "Laser hair removal in the UAE typically costs from AED 95 for small areas to AED 1,600 for full-body sessions. The right clinic depends on your skin tone, treatment area, laser technology and location.",
    kind: "home",
    faqs: defaultFaqs
  },
  {
    slug: "cost",
    title: "Laser Hair Removal Cost in UAE (2026 Price Guide)",
    meta: "How much does laser hair removal cost in the UAE? See 2026 price ranges by body part, city, sessions and clinic type.",
    h1: "Laser Hair Removal Cost in the UAE: 2026 Price Guide",
    keyword: "laser hair removal cost UAE 2026",
    quick:
      "Laser hair removal in the UAE costs about AED 95-180 for underarms, AED 180-420 for bikini, AED 350-750 for full legs and AED 650-1,600 for full body per session. Packages of 6 to 8 sessions usually reduce the per-session price.",
    kind: "guide",
    sections: [
      { heading: "What affects laser hair removal price?", body: "The biggest factors are treatment area size, hair density, laser technology, clinic location, practitioner experience and whether you buy a package." },
      { heading: "Are payment plans available?", body: "Many UAE clinics offer package instalments or seasonal campaigns. Always confirm the included number of sessions, touch-up policy and consultation fees." },
      { heading: "Is laser hair removal covered by insurance?", body: "It is usually considered cosmetic and is not covered by standard health insurance unless part of a medically indicated treatment plan." }
    ],
    faqs: defaultFaqs
  },
  {
    slug: "full-body",
    title: "Full Body Laser Hair Removal Dubai - Cost & Best Clinics",
    meta: "Compare full body laser hair removal prices, session counts and clinics in Dubai. Get matched with UAE clinics for free quotes.",
    h1: "Full Body Laser Hair Removal in Dubai",
    keyword: "full body laser hair removal Dubai cost",
    quick:
      "Full body laser hair removal in Dubai usually costs AED 650-1,600 per session, with 6 to 8 sessions recommended for visible long-term reduction. Packages can lower the average session price.",
    kind: "body",
    faqs: defaultFaqs
  },
  {
    slug: "underarms",
    title: "Underarm Laser Hair Removal Dubai - Price & Sessions",
    meta: "Underarm laser hair removal in Dubai: compare prices, sessions, pain level and clinics offering small-area packages.",
    h1: "Underarm Laser Hair Removal in Dubai",
    keyword: "underarm laser hair removal Dubai",
    quick:
      "Underarm laser hair removal in Dubai commonly costs AED 95-180 per session and takes around 6 sessions for strong reduction. The treatment is quick, often under 15 minutes.",
    kind: "body",
    faqs: defaultFaqs
  },
  {
    slug: "bikini",
    title: "Bikini & Brazilian Laser Hair Removal Dubai - Prices",
    meta: "Compare bikini and Brazilian laser hair removal prices in Dubai, sessions, aftercare and clinic options.",
    h1: "Bikini Laser Hair Removal in Dubai",
    keyword: "bikini laser hair removal Dubai price",
    quick:
      "Bikini laser hair removal in Dubai often costs AED 180-420 per session depending on whether you choose bikini line, extended bikini or Brazilian treatment.",
    kind: "body",
    faqs: defaultFaqs
  },
  {
    slug: "face",
    title: "Facial Laser Hair Removal Dubai - Cost & Safety",
    meta: "Facial laser hair removal in Dubai: prices, safety, skin tone advice and what to expect before treatment.",
    h1: "Facial Laser Hair Removal in Dubai",
    keyword: "facial laser hair removal Dubai",
    quick:
      "Facial laser hair removal in Dubai usually costs AED 120-300 per session. It needs careful settings, especially for hormonal hair or deeper skin tones.",
    kind: "body",
    faqs: defaultFaqs
  },
  {
    slug: "legs",
    title: "Leg Laser Hair Removal Dubai - Full & Half Leg Prices",
    meta: "Compare full-leg and half-leg laser hair removal prices in Dubai, expected sessions and clinic options.",
    h1: "Leg Laser Hair Removal in Dubai",
    keyword: "leg laser hair removal Dubai",
    quick:
      "Leg laser hair removal in Dubai typically costs AED 220-450 for half legs and AED 350-750 for full legs per session, depending on clinic and machine type.",
    kind: "body",
    faqs: defaultFaqs
  },
  {
    slug: "dark-skin",
    title: "Laser Hair Removal for Dark Skin in Dubai - Safe Options",
    meta: "Laser hair removal for dark and brown skin in Dubai. Learn why Nd:YAG matters, what risks to avoid and how to choose a clinic.",
    h1: "Laser Hair Removal for Dark Skin in the UAE",
    keyword: "laser hair removal dark skin Dubai",
    quick:
      "Laser hair removal can be safe for dark and brown skin when clinics use appropriate settings and technologies such as Nd:YAG. The main risk is using the wrong wavelength or aggressive settings, which can increase burns or pigmentation.",
    kind: "guide",
    sections: [
      { heading: "Why skin tone matters", body: "Laser targets pigment in hair, so deeper skin tones need technology and settings that reduce heat absorbed by surrounding skin." },
      { heading: "Best laser type for darker skin", body: "Nd:YAG is commonly preferred for Fitzpatrick IV-VI skin because it penetrates deeper and is less absorbed by surface pigment than Alexandrite." },
      { heading: "Questions to ask before booking", body: "Ask about machine type, practitioner training, patch tests, cooling, treatment intervals and experience with South Asian, Middle Eastern and African skin tones." }
    ],
    faqs: defaultFaqs
  },
  {
    slug: "men",
    title: "Men's Laser Hair Removal Dubai - Back, Chest & Beard",
    meta: "Men's laser hair removal in Dubai for back, chest, shoulders and beard shaping. Compare prices and session expectations.",
    h1: "Laser Hair Removal for Men in Dubai",
    keyword: "laser hair removal men Dubai",
    quick:
      "Men's laser hair removal in Dubai is common for back, chest, shoulders, neck and beard shaping. Coarser hair can respond well, but larger areas often need package pricing.",
    kind: "guide",
    faqs: defaultFaqs
  },
  {
    slug: "diode-vs-alexandrite",
    title: "Diode vs Alexandrite vs Nd:YAG Laser - Which Is Best",
    meta: "Compare Diode, Alexandrite and Nd:YAG lasers for UAE skin types, pain, cost and effectiveness.",
    h1: "Diode vs Alexandrite vs Nd:YAG: Which Laser Is Best?",
    keyword: "diode vs alexandrite laser UAE",
    quick:
      "Diode is a flexible all-rounder, Alexandrite is often fast for lighter skin, and Nd:YAG is usually safer for darker skin tones. The best choice depends on your Fitzpatrick skin type, hair thickness and clinic settings.",
    kind: "guide",
    faqs: defaultFaqs
  },
  {
    slug: "sessions",
    title: "How Many Laser Hair Removal Sessions Do You Need?",
    meta: "Learn how many laser hair removal sessions are needed by body area, hair type and skin tone.",
    h1: "How Many Sessions of Laser Hair Removal Do You Need?",
    keyword: "how many sessions laser hair removal",
    quick:
      "Most UAE laser hair removal plans need 6 to 8 sessions. Face and hormonal areas may need more, while underarms and legs often show faster visible reduction.",
    kind: "guide",
    faqs: defaultFaqs
  },
  {
    slug: "pain",
    title: "Does Laser Hair Removal Hurt? What to Expect",
    meta: "Does laser hair removal hurt? Compare pain levels by body area and learn how UAE clinics reduce discomfort.",
    h1: "Does Laser Hair Removal Hurt?",
    keyword: "does laser hair removal hurt",
    quick:
      "Laser hair removal feels like heat or a quick elastic snap for many people. Pain varies by area, hair thickness and device cooling, but most sessions are tolerable.",
    kind: "guide",
    faqs: defaultFaqs
  },
  {
    slug: "aftercare",
    title: "Laser Hair Removal Aftercare - Dos & Don'ts",
    meta: "Laser hair removal aftercare for UAE heat: sun avoidance, shaving, exfoliation, deodorant and skincare timing.",
    h1: "Laser Hair Removal Aftercare Guide",
    keyword: "laser hair removal aftercare",
    quick:
      "After laser hair removal, avoid heat, tanning, harsh exfoliation and heavy fragrance for 24 to 48 hours. In the UAE, sun protection is especially important to reduce irritation and pigmentation risk.",
    kind: "guide",
    faqs: defaultFaqs
  },
  {
    slug: "at-home-kits",
    title: "Best At-Home Laser Hair Removal Devices in UAE",
    meta: "Compare at-home IPL and laser hair removal devices available in the UAE, including price ranges and who should use them.",
    h1: "Best At-Home Laser Hair Removal Devices in the UAE",
    keyword: "at home laser hair removal kit Dubai",
    quick:
      "At-home IPL devices can help maintain hair reduction, but they are usually less powerful than professional clinic lasers. They work best for lighter skin with dark hair and require consistent use.",
    kind: "guide",
    faqs: defaultFaqs
  },
  {
    slug: "deals",
    title: "Laser Hair Removal Deals & Offers in Dubai",
    meta: "Latest laser hair removal deals and offers in Dubai and the UAE, including clinic packages and seasonal discounts.",
    h1: "Current Laser Hair Removal Deals in the UAE",
    keyword: "laser hair removal deals Dubai",
    quick:
      "Laser hair removal deals in the UAE often discount packages rather than single sessions. Check expiry dates, included areas, clinic licensing and whether consultation or touch-ups are included.",
    kind: "deals",
    faqs: defaultFaqs
  },
  {
    slug: "compare",
    title: "Compare Laser Hair Removal Clinics in the UAE",
    meta: "Compare UAE laser hair removal clinics side by side by price, technology, location, rating and dark-skin suitability.",
    h1: "Compare Clinics Side by Side",
    keyword: "compare laser hair removal clinics UAE",
    quick:
      "Use the comparison tool to review 2 to 3 clinics by city, price from, laser technologies, rating and dark-skin suitability before requesting quotes.",
    kind: "compare",
    faqs: defaultFaqs
  },
  {
    slug: "about",
    title: "About LaserHairRemovalUAE.com",
    meta: "Learn how LaserHairRemovalUAE.com compares clinics, reviews prices and helps users find suitable laser hair removal providers.",
    h1: "About LaserHairRemovalUAE.com",
    keyword: "about LaserHairRemovalUAE.com",
    quick:
      "LaserHairRemovalUAE.com is an independent comparison resource built to help UAE residents, expats and visitors understand laser hair removal prices, safety and clinic options.",
    kind: "utility",
    sections: [
      { heading: "How we review clinics", body: "Listings are structured around location, technology, published pricing, licensing signals, treatment coverage and user-friendly enquiry options." },
      { heading: "Editorial standards", body: "Guides are written to be practical, specific and cautious around medical claims. Users should always consult a qualified practitioner before treatment." }
    ],
    faqs: defaultFaqs
  },
  {
    slug: "contact",
    title: "Contact Us - LaserHairRemovalUAE.com",
    meta: "Contact LaserHairRemovalUAE.com for clinic listing, lead partnership and editorial enquiries.",
    h1: "Contact Us",
    keyword: "contact laser hair removal UAE",
    quick:
      "Use the form below for clinic partnerships, listing updates or help finding a laser hair removal clinic in the UAE.",
    kind: "utility",
    faqs: defaultFaqs
  },
  {
    slug: "privacy-policy",
    title: "Privacy Policy",
    meta: "Privacy policy for LaserHairRemovalUAE.com.",
    h1: "Privacy Policy",
    keyword: "privacy policy",
    quick:
      "We collect enquiry details only to respond to requests, match users with clinics and improve site performance. This local build stores demo submissions in memory only.",
    kind: "utility"
  },
  {
    slug: "terms",
    title: "Terms",
    meta: "Terms of use for LaserHairRemovalUAE.com.",
    h1: "Terms of Use",
    keyword: "terms",
    quick:
      "Information on this website is provided for comparison and educational purposes. Clinic prices, offers and availability should be confirmed directly before booking.",
    kind: "utility"
  },
  {
    slug: "disclaimer",
    title: "Medical Disclaimer",
    meta: "Medical disclaimer for LaserHairRemovalUAE.com.",
    h1: "Medical Disclaimer",
    keyword: "laser hair removal disclaimer",
    quick:
      "This website does not provide medical advice. Laser suitability varies by skin type, hair type, health history and medication use. Always consult a licensed practitioner.",
    kind: "utility"
  }
];

for (const city of ["dubai", "abu-dhabi", "sharjah"]) {
  const cityName = city
    .split("-")
    .map((part) => part[0].toUpperCase() + part.slice(1))
    .join(" ");
  pages.push({
    slug: `clinics/${city}`,
    title: `Best Laser Hair Removal Clinics in ${cityName}`,
    meta: `Compare laser hair removal clinics in ${cityName}, including prices, technologies, ratings and enquiry options.`,
    h1: `Best Laser Hair Removal Clinics in ${cityName}`,
    keyword: `best laser hair removal ${cityName}`,
    quick: `The best laser hair removal clinic in ${cityName} depends on your treatment area, skin tone, machine type and budget. Compare clinics by price, technology and suitability before booking.`,
    kind: "clinic",
    faqs: defaultFaqs
  });
}

for (const area of areas) {
  const slug = area.toLowerCase().replaceAll(" ", "-");
  pages.push({
    slug: `areas/${slug}`,
    title: `Laser Hair Removal in ${area}, Dubai - Clinics & Prices`,
    meta: `Compare laser hair removal clinics near ${area}, Dubai, including prices, locations and package options.`,
    h1: `Laser Hair Removal in ${area}`,
    keyword: `laser hair removal ${area}`,
    quick: `Laser hair removal in ${area} is convenient for Dubai residents seeking quick small-area sessions or full-body packages near home or work. Compare nearby clinics by technology, price and skin-type suitability.`,
    kind: "area",
    faqs: defaultFaqs
  });
}

export function getPage(slugParts?: string[]) {
  const slug = (slugParts || []).join("/");
  return pages.find((page) => page.slug === slug);
}

export function clinicsForPage(page: Page) {
  if (page.kind === "clinic") {
    const city = page.slug.replace("clinics/", "").replace("-", " ");
    return clinics
      .filter((clinic) => clinic.city.toLowerCase() === city)
      .sort((a, b) => Number(b.featured) - Number(a.featured) || a.rank - b.rank);
  }

  if (page.kind === "area") {
    const area = page.h1.replace("Laser Hair Removal in ", "");
    return clinics.filter((clinic) => clinic.areas.includes(area));
  }

  if (page.kind === "body") {
    const treatment = page.slug;
    return clinics.filter((clinic) => clinic.treatments.includes(treatment));
  }

  if (page.slug === "dark-skin") {
    return clinics.filter((clinic) => clinic.darkSkinSafe);
  }

  return clinics.filter((clinic) => clinic.featured);
}
