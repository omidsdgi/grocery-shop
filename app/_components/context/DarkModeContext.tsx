"use client";

import { createContext, useContext, useEffect, useState, ReactNode } from "react";
import {useLocalStorageState} from "@/app/_components/hook/UseLocalStorageState";

interface DarkModeProviderProps {children: ReactNode;}

export type ThemeMode = "light" | "dark" | "system";

export interface DarkModeContextType {
    mode: ThemeMode;
    isDarkMode: boolean;
    toggleDarkMode: () => void;
    setMode: (mode: ThemeMode) => void;
}

const DarkModeContext=createContext<DarkModeContextType|undefined>(undefined);

export function DarkModeProvider({children}: DarkModeProviderProps): JSX.Element {
    const [mode,setMode]=useLocalStorageState<ThemeMode>("system","themeMode");
    const [isSystemDark, setIsSystemDark] = useState<boolean>(false)

    const isDarkMode=mode === "dark" || (mode === "system" && isSystemDark);

    useEffect(() => {
        if (typeof window === "undefined") return;

        const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

        setIsSystemDark(mediaQuery.matches);

        const handleChange = (event: MediaQueryListEvent) => {
            setIsSystemDark(event.matches);
        };

        mediaQuery.addEventListener("change", handleChange);

        return () => {
            mediaQuery.removeEventListener("change", handleChange);
        };
    }, []);

    useEffect(() => {
        if (typeof window === "undefined") return;

        const root=document.documentElement;
        if (isDarkMode) {
            root.classList.add("dark-mode");
            root.classList.remove("light-mode");
            root.setAttribute("data-theme", "dark");
        } else {
            root.classList.add("light-mode");
            root.classList.remove("dark-mode");
            root.setAttribute("data-theme", "light");
        }
    },[isDarkMode]);

    function toggleDarkMode(): void {
        setMode((prevMode: ThemeMode)=>{
            if (prevMode === "light") return "dark";
            if (prevMode === "dark") return "system";
            return "light";
        })
    }

    const value: DarkModeContextType = {
        mode,
        isDarkMode,
        toggleDarkMode,
        setMode,
    }

    return <DarkModeContext.Provider value={value}>{children}</DarkModeContext.Provider>;
}

export function useDarkMode(): DarkModeContextType {
    const context = useContext(DarkModeContext);
    if (!context) {
        throw new Error("useDarkMode must be used within a DarkModeProvider");}
    return context
}
