type IconBadgeProps = {
  icon: string;
  variant?: "tile" | "row" | "trust";
};

const iconAliases: Record<string, string> = {
  "1": "consult",
  "2": "checklist",
  "3": "laser",
  "4": "aftercare",
  "5": "sparkle",
  "2-3": "sessions",
  "4-6": "sparkle",
  "$": "price",
  AC: "aftercare",
  AD: "plus",
  AG: "aftercare",
  AR: "arms",
  BC: "sparkle",
  BK: "bikini",
  BS: "calendar",
  CE: "cost",
  CG: "cost",
  CI: "checklist",
  CL: "location",
  CO: "compare",
  CP: "consult",
  CS: "comfort",
  CT: "compare",
  CV: "coverage",
  DL: "deal",
  DR: "doctor",
  DS: "skin",
  EC: "expert",
  EP: "expert",
  ES: "expert",
  EV: "calendar",
  FB: "body",
  FC: "face",
  FD: "shield",
  FI: "comfort",
  FM: "match",
  GR: "guide",
  GS: "face",
  HC: "review",
  HP: "clinic",
  HS: "hygiene",
  LB: "laser",
  LC: "location",
  LG: "legs",
  LR: "sparkle",
  LS: "smooth",
  LT: "laser",
  MB: "body",
  MC: "body",
  MD: "comfort",
  MN: "men",
  MS: "match",
  NF: "transparent",
  NY: "laser",
  PC: "comfort",
  PG: "guide",
  PH: "hygiene",
  PR: "price",
  PS: "privacy",
  PT: "target",
  QA: "question",
  QC: "time",
  QS: "time",
  RI: "comfort",
  RR: "review",
  SC: "clinic",
  SE: "shield",
  SF: "shield",
  SK: "skin",
  SP: "shield",
  SR: "sparkle",
  SS: "sessions",
  ST: "laser",
  TA: "target",
  TC: "clinic",
  TM: "time",
  TS: "time",
  TV: "clinic",
  UA: "underarms",
  UP: "price",
  VS: "shield",
  YG: "guide"
};

function IconSvg({ name }: { name: string }) {
  switch (name) {
    case "aftercare":
      return (
        <svg viewBox="0 0 24 24">
          <path d="M12 5c3 2.4 5.5 5.6 5.5 9a5.5 5.5 0 0 1-11 0c0-3.4 2.5-6.6 5.5-9Z" />
          <path d="M9.5 14.2 11.2 16l3.5-4" />
        </svg>
      );
    case "arms":
      return (
        <svg viewBox="0 0 24 24">
          <path d="M7 17c2.2-2.7 3.3-5.5 3.1-8.4" />
          <path d="M10.1 8.6c2.3.4 4 1.7 5.1 4.1l1.8 3.8" />
          <path d="M6.5 17.2c3.4.9 6.3.4 8.5-1.5" />
        </svg>
      );
    case "bikini":
      return (
        <svg viewBox="0 0 24 24">
          <path d="M5 9c1.6 1.7 3.2 2.6 4.9 2.8" />
          <path d="M19 9c-1.6 1.7-3.2 2.6-4.9 2.8" />
          <path d="M8.2 15.5c2.4 1.5 5.2 1.5 7.6 0" />
          <path d="M6.2 8.4 4.5 15h4.1" />
          <path d="m17.8 8.4 1.7 6.6h-4.1" />
        </svg>
      );
    case "body":
      return (
        <svg viewBox="0 0 24 24">
          <path d="M12 4.5c1.7 1.4 2.6 3.3 2.6 5.6 0 2.9 1.1 5.6 3.4 8.2" />
          <path d="M12 4.5c-1.7 1.4-2.6 3.3-2.6 5.6 0 2.9-1.1 5.6-3.4 8.2" />
          <path d="M9 13.8c1.6 1.3 4.4 1.3 6 0" />
        </svg>
      );
    case "calendar":
      return (
        <svg viewBox="0 0 24 24">
          <rect x="5" y="6.5" width="14" height="12" rx="2" />
          <path d="M8 4.5v4" />
          <path d="M16 4.5v4" />
          <path d="M5 10.5h14" />
        </svg>
      );
    case "checklist":
      return (
        <svg viewBox="0 0 24 24">
          <path d="M8.5 7.5h9" />
          <path d="M8.5 12h9" />
          <path d="M8.5 16.5h7" />
          <path d="m4.8 7.3.8.8 1.8-2" />
          <path d="m4.8 11.8.8.8 1.8-2" />
          <path d="m4.8 16.3.8.8 1.8-2" />
        </svg>
      );
    case "clinic":
      return (
        <svg viewBox="0 0 24 24">
          <path d="M5.5 19V7.5L12 4l6.5 3.5V19" />
          <path d="M9 19v-5.5h6V19" />
          <path d="M12 7.8v4" />
          <path d="M10 9.8h4" />
        </svg>
      );
    case "comfort":
      return (
        <svg viewBox="0 0 24 24">
          <path d="M7.5 13.5c1.8-2.8 3.5-4.2 5-4.2 2 0 3.4 1.7 4 5.2" />
          <path d="M5.5 17.5c4.4 1.4 8.7 1.4 13 0" />
          <path d="M8 7.5c.6-1 1.5-1.5 2.8-1.5" />
        </svg>
      );
    case "compare":
      return (
        <svg viewBox="0 0 24 24">
          <path d="M7 5v14" />
          <path d="M17 5v14" />
          <path d="M4.5 8h5" />
          <path d="M14.5 16h5" />
          <path d="m9.5 8-2.5 2.5L4.5 8" />
          <path d="m14.5 16 2.5-2.5 2.5 2.5" />
        </svg>
      );
    case "consult":
      return (
        <svg viewBox="0 0 24 24">
          <path d="M6 7.5h12v8H9l-3 3v-11Z" />
          <path d="M9.5 10.5h5" />
          <path d="M9.5 13h3" />
        </svg>
      );
    case "cost":
    case "price":
      return (
        <svg viewBox="0 0 24 24">
          <path d="M6 7.5h9.5L19 11v5.5H6v-9Z" />
          <path d="M9 12h6" />
          <path d="M9 15h4" />
          <path d="M15.5 7.5V11H19" />
        </svg>
      );
    case "coverage":
      return (
        <svg viewBox="0 0 24 24">
          <path d="M5 6.5h14v11H5z" />
          <path d="M8 9.5h8" />
          <path d="M8 12h8" />
          <path d="M8 14.5h5" />
        </svg>
      );
    case "deal":
      return (
        <svg viewBox="0 0 24 24">
          <path d="M5.5 12.5 12.8 5H18v5.2l-7.4 7.4-5.1-5.1Z" />
          <path d="M15.5 8.2h.1" />
          <path d="M8.5 15.5 15.5 8.5" />
        </svg>
      );
    case "doctor":
      return (
        <svg viewBox="0 0 24 24">
          <path d="M8 19v-2.2c0-2 1.8-3.6 4-3.6s4 1.6 4 3.6V19" />
          <circle cx="12" cy="8" r="3" />
          <path d="M12 15.2v3.3" />
          <path d="M10.4 16.8h3.2" />
        </svg>
      );
    case "expert":
      return (
        <svg viewBox="0 0 24 24">
          <path d="M12 4.5 14 9l4.8.5-3.6 3.2 1 4.8L12 15l-4.2 2.5 1-4.8-3.6-3.2L10 9l2-4.5Z" />
        </svg>
      );
    case "face":
      return (
        <svg viewBox="0 0 24 24">
          <path d="M13.5 4.5c2.3 1.7 3.5 3.9 3.5 6.6 0 4.3-2.4 7.4-5 7.4s-5-3.1-5-7.4c0-2.7 1.2-4.9 3.5-6.6" />
          <path d="M9.5 12.5c1.6.8 3.4.8 5 0" />
          <path d="M9.5 9.5h.1" />
          <path d="M14.4 9.5h.1" />
        </svg>
      );
    case "guide":
      return (
        <svg viewBox="0 0 24 24">
          <path d="M6 5.5h7a3 3 0 0 1 3 3v10H9a3 3 0 0 0-3 3v-16Z" />
          <path d="M16 8.5h2a2 2 0 0 1 2 2v8h-4" />
          <path d="M9 9h4" />
          <path d="M9 12h4" />
        </svg>
      );
    case "hygiene":
      return (
        <svg viewBox="0 0 24 24">
          <path d="M8 10h8v9H8z" />
          <path d="M10 10V7.8a2 2 0 0 1 4 0V10" />
          <path d="M12 13v3" />
          <path d="M10.5 14.5h3" />
        </svg>
      );
    case "laser":
      return (
        <svg viewBox="0 0 24 24">
          <path d="M5 17.5 15.5 7" />
          <path d="m14 5.5 4.5 4.5" />
          <path d="M17.5 4.5 19 3" />
          <path d="M20 8.5h2" />
          <path d="M15.5 3v-2" />
          <path d="M5 17.5l-1.5 3" />
        </svg>
      );
    case "legs":
      return (
        <svg viewBox="0 0 24 24">
          <path d="M10 4.5c.7 4.1.2 8.8-1.5 14" />
          <path d="M14 4.5c-.6 4.4.1 8.9 2.2 13.5" />
          <path d="M7.3 18.5h4.4" />
          <path d="M14.8 18h4.2" />
        </svg>
      );
    case "location":
      return (
        <svg viewBox="0 0 24 24">
          <path d="M12 20s5.5-5.2 5.5-10a5.5 5.5 0 0 0-11 0c0 4.8 5.5 10 5.5 10Z" />
          <circle cx="12" cy="10" r="1.8" />
        </svg>
      );
    case "match":
      return (
        <svg viewBox="0 0 24 24">
          <circle cx="9" cy="9" r="3.5" />
          <circle cx="15" cy="15" r="3.5" />
          <path d="m11.5 11.5 1 1" />
        </svg>
      );
    case "men":
      return (
        <svg viewBox="0 0 24 24">
          <circle cx="12" cy="8" r="3" />
          <path d="M7.5 19c.5-3.6 2-5.4 4.5-5.4s4 1.8 4.5 5.4" />
          <path d="M9 5.8c1.8-1 3.8-1 6 0" />
        </svg>
      );
    case "plus":
      return (
        <svg viewBox="0 0 24 24">
          <path d="M12 5v14" />
          <path d="M5 12h14" />
        </svg>
      );
    case "privacy":
    case "shield":
      return (
        <svg viewBox="0 0 24 24">
          <path d="M12 4.5 18 7v4.2c0 3.8-2.2 6.7-6 8.3-3.8-1.6-6-4.5-6-8.3V7l6-2.5Z" />
          <path d="m9.2 12.2 1.8 1.8 3.8-4" />
        </svg>
      );
    case "question":
      return (
        <svg viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="7" />
          <path d="M10 10a2 2 0 1 1 3.2 1.6c-.8.5-1.2 1-1.2 1.9" />
          <path d="M12 16.5h.1" />
        </svg>
      );
    case "review":
      return (
        <svg viewBox="0 0 24 24">
          <path d="M12 5.5 13.8 10l4.7.4-3.6 3 1.1 4.6-4-2.5L8 18l1.1-4.6-3.6-3 4.7-.4L12 5.5Z" />
        </svg>
      );
    case "sessions":
      return (
        <svg viewBox="0 0 24 24">
          <path d="M7 6.5h10" />
          <path d="M7 12h10" />
          <path d="M7 17.5h10" />
          <path d="M5 6.5h.1" />
          <path d="M5 12h.1" />
          <path d="M5 17.5h.1" />
        </svg>
      );
    case "skin":
      return (
        <svg viewBox="0 0 24 24">
          <path d="M12 5c3 2.8 5 5.6 5 8.3a5 5 0 0 1-10 0C7 10.6 9 7.8 12 5Z" />
          <path d="M9.4 15.2c1.4.9 3.8.9 5.2 0" />
        </svg>
      );
    case "smooth":
    case "sparkle":
      return (
        <svg viewBox="0 0 24 24">
          <path d="M12 3.8 13.8 9l5.2 1.8-5.2 1.8L12 17.8l-1.8-5.2L5 10.8 10.2 9 12 3.8Z" />
          <path d="m18 15 .8 2.2L21 18l-2.2.8L18 21l-.8-2.2L15 18l2.2-.8L18 15Z" />
        </svg>
      );
    case "target":
      return (
        <svg viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="7" />
          <circle cx="12" cy="12" r="3" />
          <path d="M12 2.8v3" />
          <path d="M12 18.2v3" />
          <path d="M2.8 12h3" />
          <path d="M18.2 12h3" />
        </svg>
      );
    case "time":
      return (
        <svg viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="7" />
          <path d="M12 8v4l3 2" />
        </svg>
      );
    case "transparent":
      return (
        <svg viewBox="0 0 24 24">
          <path d="M6 6h12v12H6z" />
          <path d="m8 16 8-8" />
          <path d="m8 11 3-3" />
          <path d="m13 16 3-3" />
        </svg>
      );
    case "underarms":
      return (
        <svg viewBox="0 0 24 24">
          <path d="M7 17c1.2-4.8 3.1-8.8 5.7-12" />
          <path d="M17.5 17c-2.3-1.5-4-3.5-5.1-6" />
          <path d="M8.6 13c2.2 1.7 4.7 2.3 7.4 1.8" />
        </svg>
      );
    default:
      return (
        <svg viewBox="0 0 24 24">
          <path d="M12 4.5 14 9l4.8.5-3.6 3.2 1 4.8L12 15l-4.2 2.5 1-4.8-3.6-3.2L10 9l2-4.5Z" />
        </svg>
      );
  }
}

export function IconBadge({ icon, variant = "tile" }: IconBadgeProps) {
  const key = iconAliases[icon] ?? iconAliases[icon.toUpperCase()] ?? icon.toLowerCase();
  const className = variant === "row" ? "row-icon" : variant === "trust" ? "trust-icon" : "tile-icon";

  return (
    <span className={className} aria-hidden="true">
      <IconSvg name={key} />
    </span>
  );
}
