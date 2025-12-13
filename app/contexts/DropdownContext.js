"use client";
import { createContext, useContext, useState } from "react";

const DropdownContext = createContext();

export function DropdownContextProvider({ children }) {
    const [language, setLanguage] = useState("en");
    const [country, setCountry] = useState("EG");

    const value = {
        language,
        setLanguage,
        country,
        setCountry,
    };

    return <DropdownContext.Provider value={value}>{children}</DropdownContext.Provider>;
}

export function useDropdownContext() {
    const context = useContext(DropdownContext);
    if (context === undefined)
        throw new Error("Context was used outside provider");
    return context;
}
