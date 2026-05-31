export type Clinic = {
  id: string;
  name: string;
  city: "Dubai" | "Abu Dhabi" | "Sharjah";
  areas: string[];
  address: string;
  phone: string;
  whatsapp: string;
  website: string;
  technologies: string[];
  treatments: string[];
  darkSkinSafe: boolean;
  priceFrom: number;
  rating: number;
  reviewCount: number;
  featured: boolean;
  rank: number;
  dhaLicensed: boolean;
  partnerStatus: "paid" | "trial" | "none";
};

export const clinics: Clinic[] = [
  {
    id: "marina-skin-laser",
    name: "Marina Skin & Laser Clinic",
    city: "Dubai",
    areas: ["Dubai Marina", "JLT"],
    address: "Dubai Marina, Dubai",
    phone: "+971 4 000 1101",
    whatsapp: "+971 50 000 1101",
    website: "https://example.com/marina-skin-laser",
    technologies: ["Diode", "Nd:YAG", "Alexandrite"],
    treatments: ["full-body", "underarms", "bikini", "face", "legs", "men"],
    darkSkinSafe: true,
    priceFrom: 150,
    rating: 4.8,
    reviewCount: 428,
    featured: true,
    rank: 1,
    dhaLicensed: true,
    partnerStatus: "paid"
  },
  {
    id: "downtown-derma-aesthetics",
    name: "Downtown Derma Aesthetics",
    city: "Dubai",
    areas: ["Downtown Dubai", "Business Bay"],
    address: "Downtown Dubai, Dubai",
    phone: "+971 4 000 2202",
    whatsapp: "+971 50 000 2202",
    website: "https://example.com/downtown-derma",
    technologies: ["Alexandrite", "Nd:YAG"],
    treatments: ["full-body", "face", "legs", "bikini"],
    darkSkinSafe: true,
    priceFrom: 180,
    rating: 4.7,
    reviewCount: 301,
    featured: true,
    rank: 2,
    dhaLicensed: true,
    partnerStatus: "paid"
  },
  {
    id: "jumeirah-laser-studio",
    name: "Jumeirah Laser Studio",
    city: "Dubai",
    areas: ["Jumeirah"],
    address: "Jumeirah 1, Dubai",
    phone: "+971 4 000 3303",
    whatsapp: "+971 50 000 3303",
    website: "https://example.com/jumeirah-laser",
    technologies: ["Diode", "Soprano ICE"],
    treatments: ["underarms", "bikini", "face", "men"],
    darkSkinSafe: false,
    priceFrom: 120,
    rating: 4.5,
    reviewCount: 184,
    featured: false,
    rank: 3,
    dhaLicensed: true,
    partnerStatus: "trial"
  },
  {
    id: "capital-laser-clinic",
    name: "Capital Laser Clinic",
    city: "Abu Dhabi",
    areas: ["Al Bateen", "Corniche"],
    address: "Al Bateen, Abu Dhabi",
    phone: "+971 2 000 4404",
    whatsapp: "+971 50 000 4404",
    website: "https://example.com/capital-laser",
    technologies: ["Diode", "Nd:YAG"],
    treatments: ["full-body", "legs", "underarms", "men"],
    darkSkinSafe: true,
    priceFrom: 140,
    rating: 4.6,
    reviewCount: 216,
    featured: true,
    rank: 1,
    dhaLicensed: true,
    partnerStatus: "paid"
  },
  {
    id: "sharjah-smooth-clinic",
    name: "Sharjah Smooth Clinic",
    city: "Sharjah",
    areas: ["Al Majaz", "Al Nahda"],
    address: "Al Majaz, Sharjah",
    phone: "+971 6 000 5505",
    whatsapp: "+971 50 000 5505",
    website: "https://example.com/sharjah-smooth",
    technologies: ["Diode"],
    treatments: ["full-body", "underarms", "bikini", "legs"],
    darkSkinSafe: false,
    priceFrom: 95,
    rating: 4.4,
    reviewCount: 142,
    featured: false,
    rank: 1,
    dhaLicensed: false,
    partnerStatus: "none"
  }
];
