import { printText } from "@/actions/test";
import { RedirectionCard } from "@/components/RedirectionCard";
import RedirectionList from "@/components/RedirectionList";
import { getRedirections } from "@/data/redirections";
import React from "react";

const COUNTRIES_PREFIX = [
  { country: "Estados Unidos", code: "1" },
  { country: "Canadá", code: "1" },
  { country: "México", code: "52" },
  { country: "Brasil", code: "55" },
  { country: "Argentina", code: "54" },
  { country: "Colombia", code: "57" },
  { country: "Chile", code: "56" },
  { country: "Venezuela", code: "58" },
  { country: "Perú", code: "51" },
  { country: "Ecuador", code: "593" },
  { country: "Cuba", code: "53" },
  { country: "Bolivia", code: "591" },
  { country: "Costa Rica", code: "506" },
  { country: "Panamá", code: "507" },
  { country: "Uruguay", code: "598" },
];

const RedirectionsPage = async () => {
  const data = await getRedirections();

  return (
    <div>
      <h1>Redirections</h1>
      <div className="p-4">
        <form action={printText} className="space-y-2">
          <div>
            <label htmlFor="">Number</label>
            <div className="flex items-center gap-2 ">
              <select name="prefix" className="text-black h-9 rounded-md">
                {COUNTRIES_PREFIX.map((country) => (
                  <option key={country.code} value={country.code}>
                    <span>{country.country}</span>{" "}
                    <span>(+{country.code})</span>
                  </option>
                ))}
              </select>
              <input
                type="text"
                name="phone"
                className="block text-black px-3 py-1.5 rounded-md"
              />
            </div>
          </div>
          <div>
            <label htmlFor="">Text</label>
            <input
              type="text"
              name="text"
              className="block text-black px-3 py-1.5 rounded-md"
            />
          </div>
          <button type="submit">Enviar</button>
        </form>
      </div>
      <div>{data && <RedirectionList data={data} />}</div>
    </div>
  );
};

export default RedirectionsPage;
