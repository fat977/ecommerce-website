import { LogIn } from "lucide-react";
import Link from "next/link";
import CountryDropdown from "./dropdown/CountryDropdown";
import LanguageDropdown from "./dropdown/LanguageDropdown";
import getUser from "@/app/_lib/user";

async function TopBarRight() {
  const res = await fetch("https://restcountries.com/v3.1/all?fields=name,flags,cca2");
  if (!res.ok) {
    throw new Error(`Failed to fetch: ${res.status}`);
  }
  const countries = await res.json();
  const allowed = ["EG", "US", "SA"]
  const filteredCountries = countries.filter((c) => allowed.includes(c.cca2));

  const user = await getUser();
  return (
    <ul className="flex gap-3 items-center">
      <li><LanguageDropdown /></li>
      <li><CountryDropdown countries={filteredCountries} /></li>
      {!user && <li><Link href="/auth/signin"><LogIn /></Link></li>}
      
    </ul>
  )
}

export default TopBarRight