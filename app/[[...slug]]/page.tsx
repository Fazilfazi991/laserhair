import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { IconBadge } from "@/components/IconBadge";
import { LeadForm } from "@/components/LeadForm";
import { FAQ, PageSpecific, QuickAnswer, StickyCta } from "@/components/PageBlocks";
import { JsonLd } from "@/components/schema/JsonLd";
import { clinics } from "@/data/clinics";
import { clinicsForPage, getPage, pages } from "@/data/site";
import { pageSchemas } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";

type Props = {
  params: { slug?: string[] };
};

export function generateStaticParams() {
  return pages.map((page) => ({
    slug: page.slug ? page.slug.split("/") : undefined
  }));
}

export function generateMetadata({ params }: Props): Metadata {
  const page = getPage(params.slug);
  if (!page) return {};

  return buildMetadata({
    title: page.title,
    description: page.meta,
    path: page.slug,
    type: ["guide", "body", "utility"].includes(page.kind) ? "article" : "website",
    modifiedTime: "2026-05-31T00:00:00Z"
  });
}

export default function Page({ params }: Props) {
  const page = getPage(params.slug);
  if (!page) notFound();
  const visibleClinics = clinicsForPage(page);
  const schemas = pageSchemas(page, visibleClinics);

  if (page.kind === "home") {
    const treatmentTiles = [
      ["Full body", "/full-body/", "FB"],
      ["Underarms", "/underarms/", "UA"],
      ["Bikini", "/bikini/", "BK"],
      ["Face", "/face/", "FC"],
      ["Legs", "/legs/", "LG"],
      ["Dark skin", "/dark-skin/", "DS"],
      ["Men", "/men/", "MN"],
      ["Deals", "/deals/", "DL"]
    ];
    const guideTiles = [
      ["Cost guide", "/cost/", "Understand pricing by area and sessions.", "CG"],
      ["How many sessions?", "/sessions/", "See typical session counts by area.", "SS"],
      ["Pain & comfort", "/pain/", "What it feels like and how to manage it.", "PC"],
      ["Aftercare", "/aftercare/", "Simple aftercare for better results.", "AC"]
    ];
    const clinicImages = [
      "/images/clinic-card.png",
      "/images/clinic-card.png",
      "/images/clinic-card.png"
    ];
    const featuredClinics = clinics.filter((clinic) => clinic.featured).slice(0, 3);

    return (
      <>
        <JsonLd data={schemas} />
        <main>
          <section className="hero">
            <div className="hero-inner hero-grid">
              <div className="hero-copy">
                <p className="eyebrow">UAE clinic comparison</p>
                <h1>{page.h1}</h1>
                <p className="lead">
                  Compare prices, laser technologies and trusted clinics in Dubai,
                  Abu Dhabi and Sharjah. Built for fast answers and clean local
                  lead capture.
                </p>
                <div className="hero-actions">
                  <a className="btn" href="#lead-form">Get free quotes</a>
                  <a className="btn ghost" href="/cost/">View price guide</a>
                </div>
                <div className="trust-strip">
                  <div><IconBadge icon="QS" variant="trust" /><strong>5+</strong> seeded clinic profiles</div>
                  <div><IconBadge icon="YG" variant="trust" /><strong>2026</strong> UAE price guide</div>
                  <div><IconBadge icon="FM" variant="trust" /><strong>Free</strong> clinic matching and quotes</div>
                  <div><IconBadge icon="PS" variant="trust" /><strong>100%</strong> Private and secure</div>
                </div>
              </div>
              <div className="hero-visual" aria-hidden="true" />
              <div className="hero-form-wrap">
                <LeadForm sourcePage="/" />
              </div>
            </div>
          </section>
          <section className="section home-section">
            <div className="section-inner">
              <QuickAnswer>{page.quick}</QuickAnswer>
              <div className="section-heading">
                <div>
                  <p className="eyebrow">Popular treatments</p>
                  <h2>Compare by treatment area</h2>
                </div>
                <p>Each page includes prices, session counts, clinic matches and FAQs.</p>
              </div>
              <div className="treatment-grid">
                {treatmentTiles.map(([label, href, icon]) => (
                  <a className="treatment-card" href={href} key={href}>
                    <IconBadge icon={icon} />
                    <span>
                      <h3>{label}</h3>
                      <p>View prices and clinic options.</p>
                    </span>
                    <strong>›</strong>
                  </a>
                ))}
              </div>
            </div>
          </section>
          <section className="section home-section clinic-section">
            <div className="section-inner">
              <div className="section-heading">
                <h2>Featured clinics</h2>
                <a className="text-link" href="/clinics/dubai/">View all clinics →</a>
              </div>
              <div className="clinic-home-grid">
                {featuredClinics.map((clinic, index) => (
                  <article className="clinic-home-card" key={clinic.id}>
                    <div
                      className="clinic-photo"
                      style={{ backgroundImage: `url("${clinicImages[index]}")` }}
                    >
                      <span className="badge">DHA signal</span>
                    </div>
                    <div className="clinic-card-body">
                      <h3>{clinic.name}</h3>
                      <p>{clinic.city} - {clinic.areas.join(", ")}</p>
                      <p><strong>★ From AED {clinic.priceFrom}</strong> | {clinic.rating} rating ({clinic.reviewCount} reviews)</p>
                      <div className="chip-row">
                        {clinic.technologies.slice(0, 3).map((tech) => <span key={tech}>{tech}</span>)}
                      </div>
                      <a className="btn ghost" href="#lead-form">Request quote</a>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>
          <section className="section home-section">
            <div className="section-inner">
              <div className="center-heading">
                <p className="eyebrow">Why choose us</p>
                <h2>Trusted guidance. Better results.</h2>
              </div>
              <div className="why-grid">
                {[
                  ["Dermatologist-reviewed advice", "Content reviewed for safety and effectiveness.", "DR"],
                  ["Compare technologies and prices", "Make informed decisions with transparent data.", "CT"],
                  ["Matched by skin tone and goals", "Find suitable options for your skin and needs.", "MS"],
                  ["Local UAE clinics only", "Verified clinics in Dubai, Abu Dhabi and Sharjah.", "LC"]
                ].map(([title, text, icon]) => (
                  <article key={title}>
                    <IconBadge icon={icon} />
                    <h3>{title}</h3>
                    <p>{text}</p>
                  </article>
                ))}
              </div>
              <div className="section-heading guide-heading">
                <h2>Guides & answers to help you decide</h2>
              </div>
              <div className="guide-grid">
                {guideTiles.map(([title, href, text, icon]) => (
                  <a className="guide-card" href={href} key={href}>
                    <IconBadge icon={icon} />
                    <span>
                      <h3>{title}</h3>
                      <p>{text}</p>
                    </span>
                    <strong>›</strong>
                  </a>
                ))}
              </div>
            </div>
          </section>
          <section className="section home-section">
            <div className="section-inner">
              <h2>Frequently asked questions</h2>
              <FAQ page={page} />
              <div className="cta-band">
                <div>
                  <h2>Ready to find your best option?</h2>
                  <p>Tell us your areas and city. We will match you with top clinics and prices.</p>
                  <div className="hero-actions">
                    <a className="btn" href="#lead-form">Get free quotes</a>
                    <a className="btn ghost" href="/cost/">View price guide</a>
                  </div>
                  <div className="mini-trust">
                    <span>Free and no obligation</span>
                    <span>Quick clinic matches</span>
                    <span>100% private and secure</span>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
        <StickyCta />
      </>
    );
  }

  if (page.slug === "cost") {
    const costRows = [
      ["FB", "Full body", "AED 1,600", "AED 8,500", "60 - 90 min"],
      ["UA", "Underarms", "AED 95", "AED 450", "10 - 15 min"],
      ["BK", "Bikini", "AED 150", "AED 750", "15 - 20 min"],
      ["FC", "Face", "AED 120", "AED 600", "15 - 20 min"],
      ["LG", "Legs (Full)", "AED 250", "AED 1,250", "30 - 45 min"],
      ["DS", "Dark skin", "AED 150", "AED 750", "15 - 20 min"],
      ["MB", "Men (Back)", "AED 250", "AED 1,250", "30 - 45 min"],
      ["MC", "Men (Chest)", "AED 200", "AED 1,000", "20 - 30 min"]
    ];
    const includedItems = [
      ["Consultation & patch test", "Personalized assessment before treatment", "CP"],
      ["State-of-the-art technology", "FDA-approved, safe and effective lasers", "ST"],
      ["Expert practitioners", "Trained professionals with experience", "EP"],
      ["Comfort & safety", "Cooling systems for a comfortable experience", "CS"],
      ["Hygiene standards", "Strict sanitation and safety protocols", "HS"],
      ["Aftercare guidance", "Post-treatment care for better results", "AG"]
    ];

    return (
      <>
        <JsonLd data={schemas} />
        <main className="cost-page">
          <section className="cost-hero">
            <div className="cost-hero-copy">
              <nav className="breadcrumbs" aria-label="Breadcrumb">
                <a href="/">Home</a>
                <span>›</span>
                <span>Cost guide</span>
              </nav>
              <h1>Laser Hair Removal Cost Guide in UAE</h1>
              <p>
                Transparent pricing. Trusted clinics. Find average costs by
                treatment area and session type in the UAE.
              </p>
              <div className="cost-benefits">
                {[
                  ["Up-to-date prices", "From verified clinics across the UAE", "UP"],
                  ["Compare options", "Find the right clinic and technology", "CO"],
                  ["No hidden fees", "What you see is what you pay", "NF"]
                ].map(([title, text, icon]) => (
                  <article key={title}>
                    <IconBadge icon={icon} />
                    <span>
                      <strong>{title}</strong>
                      <small>{text}</small>
                    </span>
                  </article>
                ))}
              </div>
            </div>
            <div className="cost-hero-image" aria-hidden="true" />
          </section>

          <section className="cost-section">
            <div className="section-inner">
              <div className="cost-table-head">
                <div>
                  <h2>Average cost by treatment area</h2>
                  <p>Prices vary based on clinic, technology, expertise and location. All prices are in AED.</p>
                </div>
                <div className="segment">
                  <button className="active" type="button">Per session</button>
                  <button type="button">Package (6 sessions)</button>
                </div>
              </div>
              <div className="cost-table-wrap">
                <table className="cost-table">
                  <thead>
                    <tr>
                      <th>Treatment area</th>
                      <th>Average price (per session)</th>
                      <th>Average price (package of 6)</th>
                      <th>Session time</th>
                    </tr>
                  </thead>
                  <tbody>
                    {costRows.map(([icon, area, session, pack, time]) => (
                      <tr key={area}>
                        <td><IconBadge icon={icon} variant="row" /><strong>{area}</strong></td>
                        <td>{session}</td>
                        <td>{pack}</td>
                        <td>{time}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="good-panel">
                <div>
                  <h3><span>•••</span> Good to know</h3>
                  <p>
                    Most clinics recommend 6-8 sessions for the best results,
                    spaced 4-8 weeks apart. Packages of 6 sessions are the most
                    popular and offer the best value.
                  </p>
                </div>
                <div>
                  <strong>Price depends on:</strong>
                  <ul>
                    <li>Treatment area size</li>
                    <li>Technology used</li>
                    <li>Your skin tone and hair type</li>
                    <li>Clinic location and expertise</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section className="cost-section included-section">
            <div className="section-inner included-grid">
              <div>
                <h2>What's included in the price?</h2>
                <div className="included-list">
                  {includedItems.map(([title, text, icon]) => (
                    <article key={title}>
                      <IconBadge icon={icon} />
                      <span>
                        <strong>{title}</strong>
                        <small>{text}</small>
                      </span>
                    </article>
                  ))}
                </div>
              </div>
              <aside id="lead-form" className="quote-card">
                <h2>Get personalized prices from clinics</h2>
                <p>
                  Fill out a short form and receive free, no-obligation quotes
                  from trusted clinics near you.
                </p>
                <a className="btn" href="#lead-form">Get free quotes</a>
              </aside>
            </div>
          </section>

          <section className="cost-section cost-bottom">
            <div className="section-inner">
              <div className="green-guide-band">
                <IconBadge icon="GR" />
                <h2>Not sure which treatment is right for you?</h2>
                <p>
                  Compare technologies, read guides, and find the best treatment
                  for your skin and hair type.
                </p>
                <a className="btn ghost" href="/dark-skin/">Explore guides</a>
              </div>
              <div className="cost-trust-row">
                {[
                  ["100+ trusted clinics", "Verified & reviewed", "TC"],
                  ["Thousands of happy clients", "Real reviews you can trust", "HC"],
                  ["Safe, effective & proven", "Your safety is our priority", "SP"]
                ].map(([title, text, icon]) => (
                  <article key={title}>
                    <IconBadge icon={icon} />
                    <span>
                      <strong>{title}</strong>
                      <small>{text}</small>
                    </span>
                  </article>
                ))}
              </div>
            </div>
          </section>
        </main>
        <StickyCta />
      </>
    );
  }

  if (page.slug === "clinics/dubai") {
    const dubaiClinics = clinics
      .filter((clinic) => clinic.city === "Dubai")
      .sort((a, b) => Number(b.featured) - Number(a.featured) || a.rank - b.rank)
      .slice(0, 3);
    const whyItems = [
      ["Compare prices with confidence", "Up-to-date pricing by area and sessions.", "CP"],
      ["Trusted & vetted clinics", "We list DHA-approved and reputable clinics.", "TV"],
      ["Latest laser technologies", "Diode, Nd:YAG, Alexandrite and more.", "LT"],
      ["Ratings from real patients", "Honest reviews to help you decide.", "RR"],
      ["Save time & effort", "One enquiry, multiple custom quotes.", "ST"]
    ];
    const dubaiFaqs = [
      ...((page.faqs || []).slice(0, 4)),
      {
        q: "How much does laser hair removal cost in Dubai?",
        a: "Small areas can start from about AED 95 per session, while full-body sessions can reach AED 1,600 or more depending on clinic, technology and package size."
      }
    ];

    return (
      <>
        <JsonLd data={schemas} />
        <main className="clinic-city-page">
          <section className="clinic-city-hero">
            <div className="clinic-city-copy">
              <nav className="breadcrumbs" aria-label="Breadcrumb">
                <a href="/">Home</a>
                <span>&rsaquo;</span>
                <span>Locations</span>
                <span>&rsaquo;</span>
                <span>Dubai</span>
              </nav>
              <h1>Best Laser Hair Removal Clinics in Dubai</h1>
              <p>
                Compare trusted clinics, prices, laser technologies and patient
                ratings. Get matched with the best options and enquire in minutes.
              </p>
              <div className="hero-actions">
                <a className="btn" href="#lead-form">Get free quotes</a>
                <a className="btn ghost" href="/cost/">View price guide</a>
              </div>
              <div className="trust-strip city-trust">
                <div><IconBadge icon="SC" variant="trust" /><strong>5+</strong> seeded clinic profiles</div>
                <div><IconBadge icon="PS" variant="trust" /><strong>100%</strong> private and secure</div>
                <div><IconBadge icon="FM" variant="trust" /><strong>Free</strong> matching service</div>
                <div><IconBadge icon="PG" variant="trust" /><strong>2026</strong> price guide</div>
              </div>
            </div>
          </section>

          <section className="section home-section city-content">
            <div className="section-inner">
              <QuickAnswer>
                Dubai laser hair removal prices typically start from AED 95 for
                small areas and AED 1,600+ for full-body sessions. The right
                clinic depends on your skin tone, treatment area, laser
                technology and budget.
              </QuickAnswer>
              <div className="section-heading">
                <h2>Featured clinics in Dubai</h2>
                <a className="text-link" href="/clinics/dubai/">View all clinics →</a>
              </div>
              <div className="clinic-home-grid city-card-grid">
                {dubaiClinics.map((clinic) => (
                  <article className="clinic-home-card" key={clinic.id}>
                    <div
                      className="clinic-photo"
                      style={{ backgroundImage: 'url("/images/clinic-card.png")' }}
                    >
                      <span className="badge">DHA approved</span>
                    </div>
                    <div className="clinic-card-body">
                      <h3>{clinic.name}</h3>
                      <p>{clinic.areas[0]}</p>
                      <p><strong>★ From AED {clinic.priceFrom}</strong> | ★ {clinic.rating} rating ({clinic.reviewCount} reviews)</p>
                      <p>{clinic.technologies.join(", ")}</p>
                      <a className="btn ghost" href="#lead-form">Request quote</a>
                    </div>
                  </article>
                ))}
              </div>

              <div id="lead-form" className="match-panel">
                <div className="match-photo" aria-hidden="true" />
                <div className="match-copy">
                  <p className="eyebrow">Enquiry</p>
                  <h2>Get matched with UAE clinics</h2>
                  <p>
                    Share your treatment area and goals. We will match you with
                    the best clinics in Dubai and send you free quotes.
                  </p>
                  <ul>
                    <li>Free & no obligation</li>
                    <li>100% private & secure</li>
                    <li>Personalised clinic matches</li>
                  </ul>
                </div>
                <LeadForm sourcePage="/clinics/dubai/" />
              </div>

              <div className="center-heading city-why-heading">
                <h2>Why choose our Dubai clinic matches</h2>
              </div>
              <div className="city-why-grid">
                {whyItems.map(([title, text, icon]) => (
                  <article key={title}>
                    <IconBadge icon={icon} />
                    <h3>{title}</h3>
                    <p>{text}</p>
                  </article>
                ))}
              </div>

              <h2>Frequently asked questions</h2>
              <div className="faq">
                {dubaiFaqs.map((faq) => (
                  <details key={faq.q}>
                    <summary>{faq.q}</summary>
                    <p>{faq.a}</p>
                  </details>
                ))}
              </div>
            </div>
          </section>
        </main>
        <StickyCta />
      </>
    );
  }

  if (page.slug === "dark-skin") {
    const darkSkinClinics = clinics
      .filter((clinic) => clinic.darkSkinSafe)
      .sort((a, b) => Number(b.featured) - Number(a.featured) || a.rank - b.rank)
      .slice(0, 3);
    const darkFaqs = [
      { q: "Is laser hair removal safe for dark skin?", a: "Yes, when suitable technology, conservative settings and proper cooling are used. A patch test is strongly recommended before a full session." },
      { q: "Which laser is best for darker skin tones?", a: "Nd:YAG is commonly preferred for Fitzpatrick IV-VI skin because it penetrates deeper and is less absorbed by surface pigment." },
      { q: "Will it hurt more on dark skin?", a: "Pain depends more on area, hair thickness and cooling than skin tone alone. Settings should be adapted for safety and comfort." },
      { q: "How many sessions will I need?", a: "Most people need 6 to 8 sessions, with maintenance sessions possible for hormonal areas such as the face." },
      { q: "What are the possible side effects?", a: "Temporary redness, warmth and mild swelling are common. Burns or pigmentation changes are uncommon when the correct laser and settings are used." },
      { q: "Can I tan before or after treatment?", a: "Avoid tanning before and after treatment. Extra pigment can raise the risk of irritation and post-treatment pigmentation." },
      { q: "How should I prepare for my session?", a: "Shave the area 24 hours before, avoid waxing or plucking, skip tanning and tell the clinic about medication or skin sensitivity." },
      { q: "How do I choose the right clinic?", a: "Ask about Nd:YAG availability, practitioner experience with darker skin, cooling, patch tests and aftercare protocols." }
    ];

    return (
      <>
        <JsonLd data={schemas} />
        <main className="dark-skin-page">
          <section className="dark-hero">
            <div className="dark-hero-inner">
              <div className="dark-hero-copy">
                <p className="eyebrow">Laser hair removal for dark skin in Dubai</p>
                <h1>Safe, effective laser hair removal for <span>darker skin tones</span></h1>
                <p>
                  Advanced Nd:YAG laser technology targets hair at the root while
                  protecting melanin-rich skin, delivering smooth results with confidence.
                </p>
                <div className="hero-actions">
                  <a className="btn" href="#lead-form">Get clinic quotes</a>
                  <a className="btn ghost" href="/clinics/dubai/">Explore clinics</a>
                </div>
                <div className="dark-hero-points">
                  {[
                    ["Safe for darker skin tones", "SK"],
                    ["Nd:YAG laser specialists", "NY"],
                    ["Trusted clinics in Dubai", "TC"],
                    ["Personalised treatment plans", "PT"]
                  ].map(([text, icon]) => (
                    <article key={text}>
                      <IconBadge icon={icon} />
                      <strong>{text}</strong>
                    </article>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section className="section dark-content">
            <div className="section-inner">
              <QuickAnswer>{page.quick}</QuickAnswer>
              <div className="dark-info-grid">
                {[
                  ["Why skin tone matters", "Laser targets pigment in hair, so deeper skin tones need technology and settings that reduce heat absorbed by surrounding skin.", "ST"],
                  ["Best laser type for darker skin", "Nd:YAG is commonly preferred for Fitzpatrick IV-VI skin because it penetrates deeper and is less absorbed by surface pigment than Alexandrite.", "NY"],
                  ["Questions to ask before booking", "Ask about machine type, practitioner training, patch tests, cooling, treatment intervals and experience with South Asian, Middle Eastern and African skin tones.", "QA"]
                ].map(([title, text, icon]) => (
                  <article key={title}>
                    <IconBadge icon={icon} />
                    <h2>{title}</h2>
                    <p>{text}</p>
                  </article>
                ))}
              </div>

              <div className="section-heading">
                <h2>Featured clinics</h2>
                <a className="text-link" href="/clinics/dubai/">View all clinics</a>
              </div>
              <div className="dark-clinic-grid">
                {darkSkinClinics.map((clinic) => (
                  <article className="dark-clinic-card" key={clinic.id}>
                    <div>
                      <span className="badge">Nd:YAG specialist</span>
                      <h3>{clinic.name}</h3>
                      <p>{clinic.city} - {clinic.areas.join(", ")}</p>
                      <p><strong>From AED {clinic.priceFrom}</strong> | {clinic.rating} rating ({clinic.reviewCount} reviews)</p>
                      <p>{clinic.technologies.join(", ")}</p>
                      <a className="btn ghost" href="#lead-form">Request quote</a>
                    </div>
                    <div className="dark-clinic-photo" aria-hidden="true" />
                  </article>
                ))}
              </div>

              <div id="lead-form" className="dark-lead-panel">
                <div className="dark-lead-head">
                  <div>
                    <p className="eyebrow">Enquiry</p>
                    <h2>Get matched with UAE clinics</h2>
                    <p>Share your details and we will connect you with trusted clinics.</p>
                  </div>
                  <p>It's free, quick and there's no obligation.</p>
                </div>
                <LeadForm sourcePage="/dark-skin/" />
              </div>

              <div className="dark-safety-strip">
                {[
                  ["Clinics vetted for safety", "We partner with licensed, experienced clinics.", "VS"],
                  ["Save time", "Receive multiple quotes without the back-and-forth.", "ST"],
                  ["Your data is safe", "We never share your details without your consent.", "DS"],
                  ["Support at every step", "Our team is here to help before, during and after.", "HS"]
                ].map(([title, text, icon]) => (
                  <article key={title}>
                    <IconBadge icon={icon} />
                    <span>
                      <strong>{title}</strong>
                      <small>{text}</small>
                    </span>
                  </article>
                ))}
              </div>

              <h2>Frequently asked questions</h2>
              <div className="dark-faq-grid">
                {darkFaqs.map((faq) => (
                  <details key={faq.q}>
                    <summary>{faq.q}</summary>
                    <p>{faq.a}</p>
                  </details>
                ))}
              </div>
            </div>
          </section>
        </main>
        <StickyCta />
      </>
    );
  }

  if (page.slug === "deals") {
    const offerCards = [
      {
        badge: "Best value",
        off: "35% off",
        icon: "FB",
        title: "35% off Full Body Package",
        body: "Six-session full body laser package with consultation included.",
        clinic: "Marina Skin & Laser Clinic",
        price: "AED 1,999",
        old: "AED 3,080",
        valid: "Valid until 2026-06-30"
      },
      {
        badge: "Popular",
        off: "25% off",
        icon: "UA",
        title: "Underarm Starter from AED 99",
        body: "Intro session for first-time guests. Ideal to test skin assessment.",
        clinic: "American Laser Studio",
        price: "AED 99",
        old: "AED 132",
        valid: "Valid until 2026-06-15"
      },
      {
        badge: "Men's pick",
        off: "30% off",
        icon: "MB",
        title: "Men's Back & Chest Bundle",
        body: "Bundle pricing for back, chest and shoulder laser treatment.",
        clinic: "Capital Laser Clinic",
        price: "AED 1,399",
        old: "AED 1,998",
        valid: "Valid until 2026-07-10"
      },
      {
        badge: "Package",
        off: "20% off",
        icon: "LB",
        title: "Legs + Bikini Combo",
        body: "Long-lasting smooth skin with this popular combination.",
        clinic: "Glowderm Medical Center",
        price: "AED 1,599",
        old: "AED 1,998",
        valid: "Valid until 2026-06-22"
      }
    ];

    return (
      <>
        <JsonLd data={schemas} />
        <main className="deals-page">
          <section className="deals-hero">
            <div className="deals-hero-inner">
              <div className="deals-copy">
                <h1>Laser hair removal <em>deals & packages</em> in Dubai & UAE</h1>
                <p>
                  Save more on smooth skin. Compare verified clinic offers,
                  package discounts and limited-time promotions.
                </p>
                <div className="hero-actions">
                  <a className="btn" href="#lead-form">Get free quotes</a>
                  <a className="btn ghost" href="#how-it-works">View how it works</a>
                </div>
                <div className="deals-trust">
                  <span>Free & no obligation</span>
                  <span>Personalized matches</span>
                  <span>Secure & private</span>
                </div>
              </div>
              <div className="deals-visual">
                <div className="deals-badge">Smooth<br />Skin<br />Better<br />Confidence</div>
              </div>
            </div>
          </section>

          <section className="section deals-content">
            <div className="section-inner">
              <QuickAnswer>
                Laser hair removal deals in the UAE often include package
                discounts, multiple sessions, and free consultations. Compare
                clinics, check inclusions and choose the right package for your needs.
              </QuickAnswer>

              <div className="section-heading">
                <div>
                  <p className="eyebrow">Featured offers</p>
                  <h2>Top deals from leading UAE clinics</h2>
                </div>
                <p>All deals are time-limited. Compare and save.</p>
              </div>
              <div className="offer-grid">
                {offerCards.map((offer) => (
                  <article className="offer-card" key={offer.title}>
                    <div className="offer-top">
                      <span className="badge">{offer.badge}</span>
                      <strong>{offer.off}</strong>
                    </div>
                    <IconBadge icon={offer.icon} />
                    <h3>{offer.title}</h3>
                    <p>{offer.body}</p>
                    <strong>{offer.clinic}</strong>
                    <div className="price-line">
                      <span>{offer.price}</span>
                      <del>{offer.old}</del>
                    </div>
                    <small>{offer.valid}</small>
                    <a className="btn ghost" href="#lead-form">View details</a>
                  </article>
                ))}
              </div>
              <a className="center-link" href="#lead-form">View all deals & offers &rarr;</a>

              <div id="how-it-works" className="deal-quality-panel">
                <div>
                  <p>Before you book</p>
                  <h2>What makes a good laser deal?</h2>
                </div>
                {[
                  ["Licensed clinics", "Non-negotiable DHA licensed and experienced professionals.", "LC"],
                  ["Clear inclusions", "Check what's included, areas, sessions, touch-ups and consultation.", "CI"],
                  ["Expiry & validity", "Offers can be time-limited or limited to new customers.", "EV"],
                  ["Real results", "Look for proven technology and genuine patient reviews.", "RR"]
                ].map(([title, text, icon]) => (
                  <article key={title}>
                    <IconBadge icon={icon} />
                    <strong>{title}</strong>
                    <p>{text}</p>
                  </article>
                ))}
              </div>

              <div className="deals-enquiry">
                <div id="lead-form" className="deals-form-card">
                  <p className="eyebrow">Enquiry</p>
                  <h2>Get matched with trusted clinics</h2>
                  <p>Share your details and we will connect you with the best offers for your needs.</p>
                  <LeadForm sourcePage="/deals/" />
                </div>
                <aside className="why-enquire-card">
                  <h2>Why enquire with us?</h2>
                  <ul>
                    <li>We compare laser shave deals from top clinics</li>
                    <li>No spam. Only relevant offers</li>
                    <li>Free, fast and confidential</li>
                    <li>Save up to 35% on selected packages</li>
                  </ul>
                  <p><strong>4.8/5</strong> <span>★★★★★</span> from 1,300+ reviews</p>
                </aside>
              </div>

              <p className="eyebrow">FAQ</p>
              <h2>Frequently asked questions</h2>
              <FAQ page={page} />
            </div>
          </section>
        </main>
        <StickyCta />
      </>
    );
  }

  if (page.slug === "full-body") {
    const fullBodyClinics = clinics
      .filter((clinic) => clinic.treatments.includes("full-body"))
      .sort((a, b) => Number(b.featured) - Number(a.featured) || a.priceFrom - b.priceFrom)
      .slice(0, 4);
    const coverage = [
      ["Legs", "(Full)", "LG"],
      ["Arms", "(Full)", "AR"],
      ["Underarms", "", "UA"],
      ["Bikini line", "(Standard)", "BK"],
      ["Face", "(Sides)", "FC"],
      ["Add-ons", "Chest, Back, Stomach & more", "AD"]
    ];
    const benefitItems = [
      ["Long-lasting smoothness", "Up to 90% hair reduction with consistent sessions.", "LS"],
      ["Time-saving", "One treatment covers all major areas.", "TS"],
      ["Cost-efficient", "Packages reduce the average session price.", "CE"],
      ["Safe for most skin types", "Advanced technology for higher safety.", "SS"],
      ["Minimal discomfort", "Advanced cooling for a more comfortable experience.", "MD"],
      ["Boosts confidence", "Feel confident in every outfit and occasion.", "BC"]
    ];
    const timeline = [
      ["1", "Session 1", "Targets active hair growth."],
      ["2", "Session 2-3", "Noticeable reduction in hair density."],
      ["3-6", "Session 4-6", "Significant reduction and finer regrowth."],
      ["7-8+", "Maintenance", "Occasional top-up if needed."]
    ];

    return (
      <>
        <JsonLd data={schemas} />
        <main className="full-body-page">
          <section className="full-hero">
            <div className="full-hero-inner">
              <div className="full-hero-copy">
                <p className="eyebrow">Smooth confidence. Lasting results.</p>
                <h1>Full Body Laser Hair Removal in UAE</h1>
                <p>
                  Safe, effective and virtually painless laser hair removal for
                  your entire body. Trusted clinics. Advanced technology.
                  Long-lasting smooth skin.
                </p>
                <div className="hero-actions">
                  <a className="btn" href="#lead-form">Get free quotes</a>
                  <a className="btn ghost" href="/cost/">View pricing guide</a>
                </div>
                <div className="full-stat-card">
                  {[
                    ["Session time", "60-90 mins", "TM"],
                    ["Typical sessions", "6-8 sessions", "SS"],
                    ["Coverage", "Head to toe", "CV"],
                    ["From (per session)", "AED 650", "PR"]
                  ].map(([title, text, icon]) => (
                    <article key={title}>
                      <IconBadge icon={icon} />
                      <span><strong>{title}</strong><small>{text}</small></span>
                    </article>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section className="section full-content">
            <div className="section-inner">
              <div className="full-qa-band">
                <QuickAnswer>
                  Full body laser hair removal in Dubai usually costs AED
                  650-1,600 per session, with 6 to 8 sessions recommended for
                  visible long-term reduction. Packages can lower the average
                  session price.
                </QuickAnswer>
                <div className="full-proof-row">
                  {[
                    ["FDA-approved devices", "FD"],
                    ["Experienced specialists", "ES"],
                    ["Clinics across Dubai & Abu Dhabi", "CL"]
                  ].map(([text, icon]) => (
                    <article key={text}>
                      <IconBadge icon={icon} />
                      <strong>{text}</strong>
                    </article>
                  ))}
                </div>
              </div>

              <div className="section-heading">
                <h2>Featured clinics</h2>
                <a className="text-link" href="/clinics/dubai/">View all clinics →</a>
              </div>
              <div className="full-clinic-grid">
                {fullBodyClinics.map((clinic) => (
                  <article className="clinic-home-card" key={clinic.id}>
                    <div className="clinic-photo" style={{ backgroundImage: 'url("/images/clinic-card.png")' }}>
                      <span className="badge">{clinic.name.split(" ").map((word) => word[0]).join("").slice(0, 3)}</span>
                    </div>
                    <div className="clinic-card-body">
                      <h3>{clinic.name}</h3>
                      <p>{clinic.areas.join(", ")}</p>
                      <p><strong>★ {clinic.rating}</strong> ({clinic.reviewCount} reviews)</p>
                      <p>{clinic.technologies.join(", ")}</p>
                      <p><strong>From AED {clinic.priceFrom} per session</strong></p>
                      <a className="btn" href="#lead-form">Request quote</a>
                    </div>
                  </article>
                ))}
              </div>

              <div className="coverage-panel">
                <h2>What's included in full body treatment</h2>
                <div className="coverage-grid">
                  {coverage.map(([title, sub, icon]) => (
                    <article key={title}>
                      <IconBadge icon={icon} />
                      <strong>{title}</strong>
                      <small>{sub}</small>
                    </article>
                  ))}
                </div>
                <p>Coverage may vary by clinic. You can customize areas based on your needs.</p>
              </div>

              <div className="full-info-split">
                <section>
                  <h2>Why choose full body laser?</h2>
                  <div className="full-benefit-grid">
                    {benefitItems.map(([title, text, icon]) => (
                      <article key={title}>
                        <IconBadge icon={icon} />
                        <span><strong>{title}</strong><small>{text}</small></span>
                      </article>
                    ))}
                  </div>
                </section>
                <section>
                  <h2>How many sessions will I need?</h2>
                  <p>Most clients see visible reduction after 2-3 sessions.</p>
                  <div className="session-timeline">
                    {timeline.map(([step, title, text]) => (
                      <article key={step}>
                        <span>{step}</span>
                        <strong>{title}</strong>
                        <small>{text}</small>
                      </article>
                    ))}
                  </div>
                  <div className="tip-box">Tip: Consistency is key. Follow your clinic's recommended schedule for best results.</div>
                </section>
              </div>

              <div className="full-price-cta">
                <div className="price-snapshot">
                  <h2>Full body pricing snapshot</h2>
                  <p>Prices vary by clinic, technology and package.</p>
                  <div className="price-snapshot-grid">
                    <article><small>Per session</small><strong>AED 650 - 1,600</strong><span>Average AED 1,100</span></article>
                    <article><small>Packages (6-8 sessions)</small><strong>AED 3,600 - 8,800</strong><span>Average AED 6,200</span></article>
                  </div>
                  <a className="text-link" href="/cost/">View detailed pricing guide →</a>
                </div>
                <div className="package-card">
                  <h2>Not sure which package is right for you?</h2>
                  <p>Get personalized quotes from trusted clinics in minutes.</p>
                  <div>
                    <span>Compare prices & packages</span>
                    <span>No obligation & 100% free</span>
                    <span>Quick responses from clinics</span>
                  </div>
                </div>
              </div>

              <div id="lead-form" className="full-enquiry">
                <div className="full-enquiry-photo" aria-hidden="true" />
                <div className="full-enquiry-copy">
                  <h2>Get free quotes from top clinics</h2>
                  <ul>
                    <li>Compare prices and packages</li>
                    <li>Verified clinics and real reviews</li>
                    <li>Free, fast and easy</li>
                  </ul>
                </div>
                <div className="full-form-wrap">
                  <h3>Send your enquiry</h3>
                  <LeadForm sourcePage="/full-body/" />
                </div>
              </div>

              <h2>Frequently asked questions</h2>
              <FAQ page={page} />
            </div>
          </section>
        </main>
        <StickyCta />
      </>
    );
  }

  if (page.slug === "underarms") {
    const underarmClinics = clinics
      .filter((clinic) => clinic.treatments.includes("underarms"))
      .sort((a, b) => Number(b.featured) - Number(a.featured) || a.priceFrom - b.priceFrom)
      .slice(0, 4);
    const whyUnderarm = [
      ["Smooth & confident", "Enjoy soft, smooth underarms every day.", "SC"],
      ["Less shaving", "Ditch daily shaving and stubble.", "LS"],
      ["Reduces irritation", "Helps prevent razor bumps and darkening.", "RI"],
      ["Quick & convenient", "Sessions take just 10-15 minutes.", "QC"],
      ["Long-lasting results", "Hair reduction that lasts.", "LR"],
      ["Perfect for busy schedules", "Minimal downtime, back to your day.", "BS"]
    ];
    const expectSteps = [
      ["1", "Consultation", "Discuss goals, skin type and medical history."],
      ["2", "Preparation", "Area is cleaned; no shaving needed before visit."],
      ["3", "Treatment", "Laser targets hair follicles with gentle pulses."],
      ["4", "Post-care", "Cooling applied, aftercare tips."],
      ["5", "Results", "Hair sheds over days. Smoother skin revealed."]
    ];
    const journey = [
      ["1", "Session 1", "Reduce active hair"],
      ["2-3", "Sessions 2-3", "Noticeable thinning"],
      ["4-6", "Sessions 4-6", "Very little regrowth"],
      ["$", "Maintenance", "Occasional top-up if needed"]
    ];
    const underarmFaqs = [
      { q: "How many sessions does underarm laser hair removal usually take?", a: "Most people need 6 to 8 sessions, spaced around 4 to 6 weeks apart." },
      { q: "Is underarm laser hair removal painful?", a: "It is usually quick and tolerable, often described as a warm snap. Cooling helps reduce discomfort." },
      { q: "Is laser hair removal permanent for underarms?", a: "It provides long-term hair reduction. Occasional maintenance may be needed." },
      { q: "Can I laser both underarms in one session?", a: "Yes. Both underarms are normally treated in the same short appointment." },
      { q: "When will I see results?", a: "Many clients notice shedding within 1 to 3 weeks and visible thinning after 2 to 3 sessions." }
    ];

    return (
      <>
        <JsonLd data={schemas} />
        <main className="underarms-page treatment-page">
          <section className="underarm-hero treatment-hero">
            <div className="treatment-hero-inner">
              <div className="treatment-hero-copy">
                <p className="eyebrow">Smooth. Confident. Carefree.</p>
                <h1>Underarm Laser Hair Removal in UAE</h1>
                <p>
                  Safe, effective and virtually painless laser hair removal for
                  smoother underarms. Trusted clinics. Advanced technology.
                  Lasting results you'll love.
                </p>
                <div className="hero-actions">
                  <a className="btn" href="#lead-form">Get free quotes</a>
                  <a className="btn ghost" href="/cost/">View pricing guide</a>
                </div>
                <div className="full-stat-card">
                  {[
                    ["Session time", "10-15 min", "TM"],
                    ["Typical sessions", "6-8 sessions", "SS"],
                    ["Treatment area", "Small area", "TA"],
                    ["From (per session)", "AED 95", "PR"]
                  ].map(([title, text, icon]) => (
                    <article key={title}>
                      <IconBadge icon={icon} />
                      <span><strong>{title}</strong><small>{text}</small></span>
                    </article>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section className="section full-content">
            <div className="section-inner">
              <div className="full-qa-band">
                <QuickAnswer>
                  Underarm laser hair removal in Dubai commonly costs AED
                  95-150 per session and takes around 6-8 sessions for strong
                  reduction. The treatment is quick, comfortable and ideal for
                  busy schedules.
                </QuickAnswer>
                <div className="full-proof-row">
                  {[
                    ["FDA-approved devices", "FD"],
                    ["Experienced specialists", "ES"],
                    ["Clinics across Dubai & Abu Dhabi", "CL"]
                  ].map(([text, icon]) => (
                    <article key={text}>
                      <IconBadge icon={icon} />
                      <strong>{text}</strong>
                    </article>
                  ))}
                </div>
              </div>

              <div className="section-heading">
                <h2>Featured clinics</h2>
                <a className="text-link" href="/clinics/dubai/">View all clinics →</a>
              </div>
              <div className="full-clinic-grid">
                {underarmClinics.map((clinic) => (
                  <article className="clinic-home-card" key={clinic.id}>
                    <div className="clinic-photo" style={{ backgroundImage: 'url("/images/clinic-card.png")' }}>
                      <span className="badge">{clinic.dhaLicensed ? "DHA" : "Clinic"}</span>
                    </div>
                    <div className="clinic-card-body">
                      <h3>{clinic.name}</h3>
                      <p>{clinic.areas.join(", ")}</p>
                      <p><strong>★ {clinic.rating}</strong> ({clinic.reviewCount} reviews)</p>
                      <p>{clinic.technologies.join(", ")}</p>
                      <p><strong>From AED {clinic.priceFrom} per session</strong></p>
                      <a className="btn" href="#lead-form">Request quote</a>
                    </div>
                  </article>
                ))}
              </div>

              <div className="coverage-panel">
                <h2>Why choose underarm laser?</h2>
                <div className="coverage-grid underarm-benefits">
                  {whyUnderarm.map(([title, text, icon]) => (
                    <article key={title}>
                      <IconBadge icon={icon} />
                      <strong>{title}</strong>
                      <small>{text}</small>
                    </article>
                  ))}
                </div>
              </div>

              <div className="underarm-expect-grid">
                <section className="expect-card">
                  <h2>What to expect</h2>
                  <div className="expect-steps">
                    {expectSteps.map(([step, title, text]) => (
                      <article key={step}>
                        <IconBadge icon={step} />
                        <strong>{title}</strong>
                        <small>{text}</small>
                      </article>
                    ))}
                  </div>
                </section>
                <section className="journey-card">
                  <h2>Your treatment journey</h2>
                  <p>Typical results across 6-8 sessions</p>
                  <div className="session-timeline">
                    {journey.map(([step, title, text]) => (
                      <article key={step}>
                        <span>{step}</span>
                        <strong>{title}</strong>
                        <small>{text}</small>
                      </article>
                    ))}
                  </div>
                </section>
              </div>

              <div className="full-price-cta">
                <div className="price-snapshot">
                  <h2>Underarm pricing snapshot</h2>
                  <p>Prices vary by clinic, technology and package.</p>
                  <div className="price-snapshot-grid">
                    <article><small>Per session</small><strong>AED 95 - 150</strong><span>Average AED 120</span></article>
                    <article><small>Packages (6-8 sessions)</small><strong>AED 600 - 1,000</strong><span>Average AED 750</span></article>
                  </div>
                  <a className="text-link" href="/cost/">View detailed pricing guide →</a>
                </div>
                <div className="package-card">
                  <h2>Not sure which package is right for you?</h2>
                  <p>Get personalised quotes from trusted clinics in minutes.</p>
                  <div>
                    <span>Compare prices & packages</span>
                    <span>No obligation to book</span>
                    <span>Quick responses from clinics</span>
                  </div>
                </div>
              </div>

              <div id="lead-form" className="full-enquiry">
                <div className="full-enquiry-photo" aria-hidden="true" />
                <div className="full-enquiry-copy">
                  <h2>Get matched with UAE clinics</h2>
                  <ul>
                    <li>Compare prices and packages</li>
                    <li>Verified clinics and real reviews</li>
                    <li>Free, fast and easy</li>
                  </ul>
                </div>
                <div className="full-form-wrap">
                  <h3>Get free quotes</h3>
                  <LeadForm sourcePage="/underarms/" />
                </div>
              </div>

              <h2>Frequently asked questions</h2>
              <div className="faq">
                {underarmFaqs.map((faq) => (
                  <details key={faq.q}>
                    <summary>{faq.q}</summary>
                    <p>{faq.a}</p>
                  </details>
                ))}
              </div>
            </div>
          </section>
        </main>
        <StickyCta />
      </>
    );
  }

  if (page.slug === "bikini") {
    const bikiniClinics = clinics
      .filter((clinic) => clinic.treatments.includes("bikini"))
      .sort((a, b) => Number(b.featured) - Number(a.featured) || a.priceFrom - b.priceFrom)
      .slice(0, 4);
    const bikiniBenefits = [
      ["Long-lasting results", "Reduces hair growth for smoother skin", "LR"],
      ["Quick sessions", "Most sessions take 15-30 minutes", "QS"],
      ["Safe for sensitive skin", "Advanced technology for comfort", "SS"],
      ["Private & hygienic", "Discreet rooms and strict hygiene standards", "PH"]
    ];
    const bikiniFaqs = [
      { q: "How many sessions does bikini laser hair removal usually take?", a: "Most clients need 6 to 8 sessions, with occasional maintenance depending on hair type and hormones." },
      { q: "Is bikini laser hair removal painful?", a: "It can feel sensitive, but cooling technology and careful settings help keep sessions manageable." },
      { q: "Is it safe for sensitive skin?", a: "Yes, when performed by trained practitioners with suitable settings and aftercare guidance." },
      { q: "Can I get laser hair removal in summer in Dubai?", a: "Yes, but avoid tanning and protect treated skin from sun exposure before and after sessions." }
    ];

    return (
      <>
        <JsonLd data={schemas} />
        <main className="bikini-page">
          <section className="bikini-hero">
            <div className="bikini-hero-inner">
              <nav className="bikini-breadcrumbs" aria-label="Breadcrumb">
                <a href="/">Home</a><span>&rsaquo;</span><span>Treatment areas</span><span>&rsaquo;</span><span>Bikini</span>
              </nav>
              <div className="bikini-copy">
                <h1>Bikini laser hair removal</h1>
                <h2>Smooth, confident, worry-free</h2>
                <p>
                  Compare bikini laser hair removal prices, sessions and clinics
                  in Dubai. Choose the right option for your comfort and budget.
                </p>
                <div className="bikini-points">
                  {[
                    ["Safe & effective technology", "SE"],
                    ["Hygienic & private clinics", "HP"],
                    ["Expert care you can trust", "EC"]
                  ].map(([text, icon]) => (
                    <article key={text}>
                      <IconBadge icon={icon} />
                      <strong>{text}</strong>
                    </article>
                  ))}
                </div>
              </div>
              <div className="bikini-circle">Smoother skin<br />Lasting confidence</div>
            </div>
          </section>

          <section className="section bikini-content">
            <div className="section-inner">
              <QuickAnswer>
                Bikini laser hair removal in Dubai costs AED 130-420 per
                session depending on whether you choose bikini line, extended
                bikini or Brazilian treatment.
              </QuickAnswer>

              <h2>Featured clinics</h2>
              <div className="bikini-clinic-grid">
                {bikiniClinics.map((clinic) => (
                  <article className="bikini-clinic-card" key={clinic.id}>
                    <span className="badge">{clinic.dhaLicensed ? "DHA signal" : "Verify license"}</span>
                    <h3>{clinic.name}</h3>
                    <p>{clinic.city} - {clinic.areas.join(", ")}</p>
                    <p><strong>From AED {clinic.priceFrom}</strong> | {clinic.rating} rating ({clinic.reviewCount} reviews)</p>
                    <p>{clinic.technologies.join(", ")}</p>
                    <a className="btn ghost" href="#lead-form">Request quote</a>
                  </article>
                ))}
              </div>
              <a className="center-link" href="/clinics/dubai/">View all clinics & offers &rarr;</a>

              <div className="bikini-benefit-band">
                <h2>Why choose laser hair removal for bikini?</h2>
                {bikiniBenefits.map(([title, text, icon]) => (
                  <article key={title}>
                    <IconBadge icon={icon} />
                    <strong>{title}</strong>
                    <p>{text}</p>
                  </article>
                ))}
              </div>

              <div className="deals-enquiry bikini-enquiry">
                <div id="lead-form" className="deals-form-card">
                  <p className="eyebrow">Enquiry</p>
                  <h2>Get matched with UAE clinics</h2>
                  <p>Share your details and we will connect you with the best offers for your needs.</p>
                  <LeadForm sourcePage="/bikini/" />
                </div>
                <aside className="why-enquire-card">
                  <h2>Why enquire with us?</h2>
                  <ul>
                    <li>We compare exclusive deals from top clinics</li>
                    <li>No spam. Only relevant offers</li>
                    <li>Free, fast and confidential</li>
                    <li>Save up to 35% on selected packages</li>
                  </ul>
                  <p><strong>4.8/5</strong> <span>★★★★★</span> from 1,200+ reviews</p>
                </aside>
              </div>

              <h2>Frequently asked questions</h2>
              <div className="faq">
                {bikiniFaqs.map((faq) => (
                  <details key={faq.q}>
                    <summary>{faq.q}</summary>
                    <p>{faq.a}</p>
                  </details>
                ))}
              </div>
            </div>
          </section>
        </main>
        <StickyCta />
      </>
    );
  }

  if (page.slug === "face") {
    const faceClinics = clinics
      .filter((clinic) => clinic.treatments.includes("face"))
      .sort((a, b) => Number(b.featured) - Number(a.featured) || a.priceFrom - b.priceFrom)
      .slice(0, 3);
    const faceBenefits = [
      ["Gentle on skin", "Designed for delicate facial areas", "GS"],
      ["Long-lasting results", "Reduces hair growth for smoother skin", "LR"],
      ["Quick sessions", "Small areas take 10-20 minutes", "QS"],
      ["Precision technology", "Targets hair without damaging skin", "PT"]
    ];
    const faceFaqs = [
      { q: "How many sessions does facial laser hair removal usually take?", a: "Most clients need 6 to 8 sessions, though hormonal facial hair may need maintenance." },
      { q: "Is facial laser hair removal safe for all skin types?", a: "It can be safe when the correct laser, settings and practitioner experience are matched to your skin tone." },
      { q: "Does facial laser hair removal hurt?", a: "Most people feel brief warmth or a light snap. Cooling can make the treatment more comfortable." },
      { q: "Can I wear makeup after facial laser treatment?", a: "It is best to avoid makeup for 24 hours or until redness settles, unless your clinic advises otherwise." }
    ];

    return (
      <>
        <JsonLd data={schemas} />
        <main className="face-page bikini-page">
          <section className="face-hero bikini-hero">
            <div className="bikini-hero-inner">
              <nav className="bikini-breadcrumbs" aria-label="Breadcrumb">
                <a href="/">Home</a><span>&rsaquo;</span><span>Treatment areas</span><span>&rsaquo;</span><span>Face</span>
              </nav>
              <div className="bikini-copy">
                <h1>Facial laser hair removal</h1>
                <h2>Smooth skin, clear confidence</h2>
                <p>
                  Facial laser hair removal in Dubai is safe, precise and
                  effective for upper lip, chin, cheeks, jawline and more.
                </p>
                <div className="bikini-points">
                  {[
                    ["Safe for delicate facial skin", "SF"],
                    ["Precise & targeted treatment", "PT"],
                    ["Smooth results, long-lasting", "SR"]
                  ].map(([text, icon]) => (
                    <article key={text}>
                      <IconBadge icon={icon} />
                      <strong>{text}</strong>
                    </article>
                  ))}
                </div>
              </div>
              <div className="bikini-circle">Clearer skin<br />Greater confidence</div>
            </div>
          </section>

          <section className="section bikini-content">
            <div className="section-inner">
              <QuickAnswer>
                Facial laser hair removal in Dubai usually costs AED 120-300
                per session. It needs careful settings, especially for hormonal
                hair or deeper skin tones.
              </QuickAnswer>

              <h2>Featured clinics</h2>
              <div className="face-clinic-grid bikini-clinic-grid">
                {faceClinics.map((clinic) => (
                  <article className="bikini-clinic-card" key={clinic.id}>
                    <span className="badge">DHA signal</span>
                    <h3>{clinic.name}</h3>
                    <p>{clinic.city} - {clinic.areas.join(", ")}</p>
                    <p><strong>From AED {clinic.priceFrom}</strong> | {clinic.rating} rating ({clinic.reviewCount} reviews)</p>
                    <p>{clinic.technologies.join(", ")}</p>
                    <a className="btn ghost" href="#lead-form">Request quote</a>
                  </article>
                ))}
              </div>
              <a className="center-link" href="/clinics/dubai/">View all clinics & offers &rarr;</a>

              <div className="bikini-benefit-band face-benefit-band">
                <h2>Why choose laser hair removal for your face?</h2>
                {faceBenefits.map(([title, text, icon]) => (
                  <article key={title}>
                    <IconBadge icon={icon} />
                    <strong>{title}</strong>
                    <p>{text}</p>
                  </article>
                ))}
              </div>

              <div className="deals-enquiry bikini-enquiry">
                <div id="lead-form" className="deals-form-card">
                  <p className="eyebrow">Enquiry</p>
                  <h2>Get matched with UAE clinics</h2>
                  <p>Share your details and we will connect you with the best offers for your needs.</p>
                  <LeadForm sourcePage="/face/" />
                </div>
                <aside className="why-enquire-card">
                  <h2>Why enquire with us?</h2>
                  <ul>
                    <li>We compare exclusive deals from top clinics</li>
                    <li>No spam. Only relevant offers</li>
                    <li>Free, fast and confidential</li>
                    <li>Save up to 35% on selected packages</li>
                  </ul>
                  <p><strong>4.8/5</strong> <span>★★★★★</span> from 1,200+ reviews</p>
                </aside>
              </div>

              <h2>Frequently asked questions</h2>
              <div className="faq">
                {faceFaqs.map((faq) => (
                  <details key={faq.q}>
                    <summary>{faq.q}</summary>
                    <p>{faq.a}</p>
                  </details>
                ))}
              </div>
            </div>
          </section>
        </main>
        <StickyCta />
      </>
    );
  }

  if (page.slug === "legs") {
    const legsClinics = clinics
      .filter((clinic) => clinic.treatments.includes("legs"))
      .sort((a, b) => Number(b.featured) - Number(a.featured) || a.priceFrom - b.priceFrom)
      .slice(0, 3);
    const legsBenefits = [
      ["Long-lasting results", "Reduces hair growth for smooth legs", "LR"],
      ["Safe & effective", "Advanced lasers for all skin types", "SE"],
      ["Quick sessions", "Full legs in 30-45 mins, lower legs in 20-30 mins", "QS"],
      ["Fewer ingrown hairs", "Smoother skin with better comfort", "FI"]
    ];
    const legsFaqs = [
      { q: "How many sessions are required for legs laser hair removal?", a: "Most clients need 6 to 8 sessions, spaced around 4 to 6 weeks apart." },
      { q: "Does legs laser hair removal hurt?", a: "It usually feels like warmth or a quick snap. Larger areas may take longer, but cooling helps comfort." },
      { q: "What is the difference between full legs and lower legs?", a: "Lower legs usually include knee to ankle, while full legs include upper and lower legs. Exact coverage can vary by clinic." },
      { q: "Is legs laser hair removal safe for all skin types?", a: "It can be safe when the laser technology and settings are matched to your skin tone." },
      { q: "Can I shave between my laser sessions?", a: "Yes. Shaving is allowed and usually recommended. Avoid waxing or plucking between sessions." }
    ];

    return (
      <>
        <JsonLd data={schemas} />
        <main className="legs-page bikini-page">
          <section className="legs-hero bikini-hero">
            <div className="bikini-hero-inner">
              <nav className="bikini-breadcrumbs" aria-label="Breadcrumb">
                <a href="/">Home</a><span>&rsaquo;</span><span>Treatment areas</span><span>&rsaquo;</span><span>Legs</span>
              </nav>
              <div className="bikini-copy">
                <h1>Legs laser hair removal</h1>
                <h2>Smooth legs, every day</h2>
                <p>
                  Safe, effective and long-lasting hair reduction for your full
                  legs or lower legs. Enjoy silky smooth skin with laser
                  technology you can trust.
                </p>
                <div className="bikini-points">
                  {[
                    ["Safe for all skin types", "SF"],
                    ["Long-lasting smooth results", "LR"],
                    ["Expert care & advanced lasers", "EC"]
                  ].map(([text, icon]) => (
                    <article key={text}>
                      <IconBadge icon={icon} />
                      <strong>{text}</strong>
                    </article>
                  ))}
                </div>
              </div>
              <div className="bikini-circle">Silky smooth legs<br />Confidence in every step</div>
            </div>
          </section>

          <section className="section bikini-content">
            <div className="section-inner">
              <QuickAnswer>
                Legs laser hair removal in Dubai usually costs AED 140-350 per
                session depending on full legs or lower legs, and the number of
                sessions needed.
              </QuickAnswer>

              <h2>Featured clinics</h2>
              <div className="face-clinic-grid bikini-clinic-grid">
                {legsClinics.map((clinic) => (
                  <article className="bikini-clinic-card" key={clinic.id}>
                    <span className="badge">DHA signal</span>
                    <h3>{clinic.name}</h3>
                    <p>{clinic.city} - {clinic.areas.join(", ")}</p>
                    <p><strong>From AED {clinic.priceFrom}</strong> | {clinic.rating} rating ({clinic.reviewCount} reviews)</p>
                    <p>{clinic.technologies.join(", ")}</p>
                    <a className="btn ghost" href="#lead-form">Request quote</a>
                  </article>
                ))}
              </div>
              <a className="center-link" href="/clinics/dubai/">View all clinics & offers &rarr;</a>

              <div className="bikini-benefit-band face-benefit-band">
                <h2>Why choose laser hair removal for legs?</h2>
                {legsBenefits.map(([title, text, icon]) => (
                  <article key={title}>
                    <IconBadge icon={icon} />
                    <strong>{title}</strong>
                    <p>{text}</p>
                  </article>
                ))}
              </div>

              <div className="deals-enquiry bikini-enquiry">
                <div id="lead-form" className="deals-form-card">
                  <p className="eyebrow">Enquiry</p>
                  <h2>Get matched with UAE clinics</h2>
                  <p>Share your details and we will connect you with the best offers for your needs.</p>
                  <LeadForm sourcePage="/legs/" />
                </div>
                <aside className="why-enquire-card">
                  <h2>Why enquire with us?</h2>
                  <ul>
                    <li>We compare exclusive deals from top clinics</li>
                    <li>No spam. Only relevant offers</li>
                    <li>Free, fast and confidential</li>
                    <li>Save up to 35% on selected packages</li>
                  </ul>
                  <p><strong>4.8/5</strong> <span>★★★★★</span> from 1,200+ reviews</p>
                </aside>
              </div>

              <h2>Frequently asked questions</h2>
              <div className="faq">
                {legsFaqs.map((faq) => (
                  <details key={faq.q}>
                    <summary>{faq.q}</summary>
                    <p>{faq.a}</p>
                  </details>
                ))}
              </div>
            </div>
          </section>
        </main>
        <StickyCta />
      </>
    );
  }

  return (
    <>
      <JsonLd data={schemas} />
      <main>
        <section className="page-title">
          <div className="section-inner">
            <p className="eyebrow">{page.keyword}</p>
            <h1>{page.h1}</h1>
            <p className="lead">{page.meta}</p>
            <p className="last-updated">Last updated: May 31, 2026</p>
          </div>
        </section>
        <section className="section">
          <div className="section-inner content">
            <QuickAnswer>{page.quick}</QuickAnswer>
            {page.sections?.map((section) => (
              <section key={section.heading}>
                <h2>{section.heading}</h2>
                <p>{section.body}</p>
              </section>
            ))}
            <PageSpecific page={page} />
          </div>
        </section>
        <section className="section">
          <div className="section-inner">
            <div className="section-heading">
              <div>
                <p className="eyebrow">Enquiry</p>
                <h2>Get matched with UAE clinics</h2>
              </div>
              <p>Use this local demo form to test the lead capture path.</p>
            </div>
            <LeadForm sourcePage={`/${page.slug}/`} />
          </div>
        </section>
        {page.faqs?.length ? (
          <section className="section">
            <div className="section-inner">
              <h2>Frequently asked questions</h2>
              <FAQ page={page} />
            </div>
          </section>
        ) : null}
      </main>
      <StickyCta />
    </>
  );
}
