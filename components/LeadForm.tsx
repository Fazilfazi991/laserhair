"use client";

import { useState } from "react";

export function LeadForm({ sourcePage = "unknown" }: { sourcePage?: string }) {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    const response = await fetch("/api/lead/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...data, source_page: sourcePage })
    });

    if (response.ok) {
      setStatus("sent");
      form.reset();
    } else {
      setStatus("error");
    }
  }

  return (
    <form id="lead-form" className="form-box" onSubmit={onSubmit}>
      <h2>Get free clinic quotes</h2>
      <p>Share your treatment area and city. The demo route captures the enquiry locally.</p>
      <div className="field-grid">
        <div className="field-grid two">
          <label>
            Name
            <input required name="name" placeholder="Your name" />
          </label>
          <label>
            UAE phone
            <input required name="phone" placeholder="+971 50 123 4567" pattern="^(\\+971|0)?[0-9\\s-]{8,}$" />
          </label>
        </div>
        <div className="field-grid two">
          <label>
            Treatment
            <select name="treatment" defaultValue="full-body">
              <option value="full-body">Full body</option>
              <option value="underarms">Underarms</option>
              <option value="bikini">Bikini / Brazilian</option>
              <option value="face">Face</option>
              <option value="legs">Legs</option>
              <option value="men">Men's treatment</option>
            </select>
          </label>
          <label>
            City
            <select name="city" defaultValue="Dubai">
              <option>Dubai</option>
              <option>Abu Dhabi</option>
              <option>Sharjah</option>
            </select>
          </label>
        </div>
        <label>
          Message
          <textarea name="message" placeholder="Preferred area, budget, or skin tone notes" />
        </label>
        <input name="website" tabIndex={-1} autoComplete="off" style={{ display: "none" }} />
        <button className="btn" disabled={status === "sending"} type="submit">
          {status === "sending" ? "Sending..." : "Get free quotes"}
        </button>
        <p className="form-note">Your details are safe and never shared.</p>
        {status === "sent" && <div className="success">Thanks. Your demo enquiry was captured.</div>}
        {status === "error" && <div className="success">Something went wrong. Please try again.</div>}
      </div>
    </form>
  );
}
