"use client";

import { useEffect } from "react";

const revealSelector = [
  ".hero-copy",
  ".hero-form-wrap",
  ".hero-visual",
  ".section-inner > *",
  ".grid > *",
  ".section-heading",
  ".center-heading",
  ".quick-answer",
  ".card",
  ".form-box",
  ".treatment-card",
  ".guide-card",
  ".clinic-home-card",
  ".why-grid article",
  ".cta-band",
  ".cost-hero-copy",
  ".cost-hero-image",
  ".cost-benefits article",
  ".cost-table-wrap",
  ".good-panel",
  ".included-list article",
  ".quote-card",
  ".green-guide-band",
  ".cost-trust-row article",
  ".clinic-city-copy",
  ".match-panel",
  ".city-why-grid article",
  ".dark-info-grid article",
  ".dark-clinic-card",
  ".dark-lead-panel",
  ".offer-card",
  ".deal-quality-panel article",
  ".deals-form-card",
  ".why-enquire-card",
  ".full-stat-card",
  ".full-qa-band",
  ".full-clinic-card",
  ".coverage-grid article",
  ".full-info-split",
  ".full-benefit-grid article",
  ".price-snapshot",
  ".package-card",
  ".full-enquiry",
  ".expect-card",
  ".journey-card",
  ".bikini-copy",
  ".bikini-points article",
  ".bikini-circle",
  ".bikini-clinic-card",
  ".bikini-benefit-band",
  ".faq details",
  ".site-footer .footer-grid > div"
].join(",");

export function ScrollAnimations() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    document.documentElement.classList.add("scroll-animations-ready");

    const elements = Array.from(document.querySelectorAll<HTMLElement>(revealSelector));
    const groupedByParent = new Map<Element, number>();

    elements.forEach((element) => {
      const parent = element.parentElement ?? document.body;
      const index = groupedByParent.get(parent) ?? 0;
      groupedByParent.set(parent, index + 1);
      element.classList.add("scroll-reveal");
      element.style.setProperty("--reveal-delay", `${Math.min(index, 7) * 70}ms`);
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      {
        rootMargin: "0px 0px -4% 0px",
        threshold: 0.04
      }
    );

    elements.forEach((element) => observer.observe(element));

    return () => {
      observer.disconnect();
      document.documentElement.classList.remove("scroll-animations-ready");
    };
  }, []);

  return null;
}
