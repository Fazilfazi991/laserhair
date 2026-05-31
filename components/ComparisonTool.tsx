"use client";

import { useMemo, useState } from "react";
import type { Clinic } from "@/data/clinics";

export function ComparisonTool({ clinics }: { clinics: Clinic[] }) {
  const defaults = clinics.slice(0, 3).map((clinic) => clinic.id);
  const [selected, setSelected] = useState(defaults);
  const chosen = useMemo(
    () => selected.map((id) => clinics.find((clinic) => clinic.id === id)).filter(Boolean) as Clinic[],
    [clinics, selected]
  );

  return (
    <div>
      <div className="compare-controls">
        {[0, 1, 2].map((index) => (
          <label key={index}>
            Clinic {index + 1}
            <select
              value={selected[index] || ""}
              onChange={(event) => {
                const next = [...selected];
                next[index] = event.target.value;
                setSelected(next);
              }}
            >
              {clinics.map((clinic) => (
                <option key={clinic.id} value={clinic.id}>
                  {clinic.name}
                </option>
              ))}
            </select>
          </label>
        ))}
      </div>
      <div className="table-wrap">
        <table>
          <thead>
            <tr>
              <th>Clinic</th>
              <th>City / areas</th>
              <th>Price from</th>
              <th>Technology</th>
              <th>Dark skin</th>
              <th>Rating</th>
            </tr>
          </thead>
          <tbody>
            {chosen.map((clinic) => (
              <tr key={clinic.id}>
                <td><strong>{clinic.name}</strong></td>
                <td>{clinic.city} - {clinic.areas.join(", ")}</td>
                <td>AED {clinic.priceFrom}</td>
                <td>{clinic.technologies.join(", ")}</td>
                <td>{clinic.darkSkinSafe ? "Suitable options" : "Ask for patch test"}</td>
                <td>{clinic.rating} ({clinic.reviewCount})</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
