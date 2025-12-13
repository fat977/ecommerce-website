"use client";
import { useDropdownContext } from "@/app/contexts/DropdownContext";
import Image from "next/image";
import BaseDropdown from "./Dropdown";
export default function CountryDropdown({ countries }) {
  const { country, setCountry } = useDropdownContext();

  const formattedCountries = countries.map((c) => ({
    key: c.cca2,
    label: c.name.common,
    flag: c.flags.svg,
  }));

  return (
    <BaseDropdown
      items={formattedCountries}
      selected={country}
      onSelect={(c) => setCountry(c.key)}
      renderTrigger={(selected) => selected}
      renderItem={(c) => (
        <div className="flex gap-3 items-center">
          <Image src={c.flag}
            width={20}
            height={15}
            alt={c.label}
            className="w-5 h-auto"
            sizes="20px"
          />
          {c.label}
        </div>
      )}
      width="w-40"
    />
  );
}
