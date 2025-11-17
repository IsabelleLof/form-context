import type { ChangeEvent } from "react";

import { useFormContext } from "../context/FormContext";

const Step1PersonData = () => {
  const { data, updateField } = useFormContext();

  const handleChange =
    (field: "firstName" | "lastName" | "birthDate" | "gender") =>
    (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
      updateField(field, e.target.value as any);
    };

  return (
    <div>
      <h2>Steg 1 – Persondata</h2>

      <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
        <label>
          Förnamn
          <input
            type="text"
            value={data.firstName}
            onChange={handleChange("firstName")}
          />
        </label>

        <label>
          Efternamn
          <input
            type="text"
            value={data.lastName}
            onChange={handleChange("lastName")}
          />
        </label>

        <label>
          Födelsedatum
          <input
            type="date"
            value={data.birthDate}
            onChange={handleChange("birthDate")}
          />
        </label>

        <label>
          Kön
          <select value={data.gender} onChange={handleChange("gender")}>
            <option value="">Välj...</option>
            <option value="man">Man</option>
            <option value="kvinna">Kvinna</option>
            <option value="annat">Annat</option>
          </select>
        </label>
      </div>
    </div>
  );
};

export default Step1PersonData;
