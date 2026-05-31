import { clinics } from "@/data/clinics";
import { cityRows, clinicsForPage, deals, Page, priceRows } from "@/data/site";
import { ComparisonTool } from "./ComparisonTool";
import { LeadForm } from "./LeadForm";

export function QuickAnswer({ children }: { children: React.ReactNode }) {
  return <div className="quick-answer"><strong>Quick answer: </strong>{children}</div>;
}

export function PriceTable() {
  return (
    <div className="table-wrap">
      <table>
        <thead>
          <tr>
            <th>Body area</th>
            <th>Per session</th>
            <th>6-8 session package</th>
          </tr>
        </thead>
        <tbody>
          {priceRows.map((row) => (
            <tr key={row.area}>
              <td>{row.area}</td>
              <td>{row.session}</td>
              <td>{row.package}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function CityTable() {
  return (
    <div className="table-wrap">
      <table>
        <thead>
          <tr>
            <th>City</th>
            <th>Typical range</th>
            <th>Market note</th>
          </tr>
        </thead>
        <tbody>
          {cityRows.map((row) => (
            <tr key={row.city}>
              <td>{row.city}</td>
              <td>{row.session}</td>
              <td>{row.note}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function TechnologyTable() {
  const rows = [
    ["Diode", "800-810nm", "Many skin types", "Moderate", "Flexible UAE all-rounder"],
    ["Alexandrite", "755nm", "Lighter skin", "Fast snap", "Efficient for larger areas"],
    ["Nd:YAG", "1064nm", "Darker skin", "Warmer feel", "Often preferred for Fitzpatrick IV-VI"]
  ];
  return (
    <div className="table-wrap">
      <table>
        <thead>
          <tr>
            <th>Laser</th>
            <th>Wavelength</th>
            <th>Best fit</th>
            <th>Pain profile</th>
            <th>UAE note</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row[0]}>
              {row.map((cell) => <td key={cell}>{cell}</td>)}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function ClinicCards({ page }: { page: Page }) {
  const list = clinicsForPage(page);
  return (
    <div className="grid three">
      {list.map((clinic) => (
        <article className={`card ${clinic.featured ? "featured" : ""}`} key={clinic.id}>
          <span className="badge">{clinic.dhaLicensed ? "DHA signal" : "Verify licence"}</span>
          <h3>{clinic.name}</h3>
          <p>{clinic.city} - {clinic.areas.join(", ")}</p>
          <p><strong>From AED {clinic.priceFrom}</strong> | {clinic.rating} rating ({clinic.reviewCount} reviews)</p>
          <p>{clinic.technologies.join(", ")}</p>
          <a className="btn ghost" href="#lead-form">Request quote</a>
        </article>
      ))}
    </div>
  );
}

export function DealCards() {
  return (
    <div className="grid three">
      {deals.map((deal) => {
        const clinic = clinics.find((item) => item.id === deal.clinicId);
        return (
          <article className={`card ${deal.featured ? "featured" : ""}`} key={deal.id}>
            <span className="badge">{deal.discountPct}% off</span>
            <h3>{deal.title}</h3>
            <p>{deal.description}</p>
            <p><strong>{clinic?.name}</strong></p>
            <p>Valid until {deal.validUntil}</p>
            <a className="btn ghost" href="#lead-form">Claim deal</a>
          </article>
        );
      })}
    </div>
  );
}

export function FAQ({ page }: { page: Page }) {
  if (!page.faqs?.length) return null;
  return (
    <div className="faq">
      {page.faqs.map((faq) => (
        <details key={faq.q}>
          <summary>{faq.q}</summary>
          <p>{faq.a}</p>
        </details>
      ))}
    </div>
  );
}

export function StickyCta() {
  return (
    <div className="sticky-cta">
      <a className="btn" href="#lead-form">Get free quotes</a>
    </div>
  );
}

export function PageSpecific({ page }: { page: Page }) {
  if (page.kind === "compare") {
    return <ComparisonTool clinics={clinics} />;
  }

  if (page.kind === "deals") {
    return <DealCards />;
  }

  if (page.slug === "cost") {
    return (
      <>
        <h2>Laser hair removal prices by body area</h2>
        <PriceTable />
        <h2>Prices by UAE city</h2>
        <CityTable />
      </>
    );
  }

  if (page.slug === "diode-vs-alexandrite") {
    return (
      <>
        <h2>Diode vs Alexandrite vs Nd:YAG comparison</h2>
        <TechnologyTable />
      </>
    );
  }

  if (["home", "body", "clinic", "area", "guide"].includes(page.kind)) {
    return (
      <>
        <h2>Featured clinics</h2>
        <ClinicCards page={page} />
      </>
    );
  }

  return null;
}
