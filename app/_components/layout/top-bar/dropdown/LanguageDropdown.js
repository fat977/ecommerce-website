"use client";
import { useDropdownContext } from "@/app/contexts/DropdownContext";
import { Globe } from "lucide-react";
import BaseDropdown from "./Dropdown";

const languages = [
    { key: "en", label: "English" },
    { key: "ar", label: "العربية" },
    { key: "fr", label: "Français" },
];

export default function LanguageDropdown() {
    const { language, setLanguage } = useDropdownContext();

    return (
        <BaseDropdown
            items={languages}
            selected={language}
            onSelect={(lang) => setLanguage(lang.key)}
            renderTrigger={(selected) => {
                const lang = languages.find((l) => l.key === selected);
                return (
                    <>
                        <Globe />
                        {lang?.label}
                    </>
                );
            }}
            renderItem={(lang) => lang.label}
            width="w-32"
        />
    );
}
