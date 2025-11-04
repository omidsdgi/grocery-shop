"use client"

import React, {createContext, useContext, useEffect} from "react";
import {useLocalStorageState} from "@/app/_components/hook/UseLocalStorageState";

interface Props {children: React.ReactNode;}

type ThemeMode = "light" | "dark" | "system";

interface DarkModeContextType {
    mode: ThemeMode;
    isDarkMode: boolean;
    toggleDarkMode: () => void;
    setMode: (mode: ThemeMode) => void;
}

const DarkModeContext=createContext<DarkModeContextType|undefined>(undefined);

export function DarkModeProvider({children}:Props) {
    const [mode,setMode]=useLocalStorageState<ThemeMode>("system","theme mode")

    const isSystemDark=typeof window !== "undefined"
        ? window.matchMedia('(prefers-color-scheme: dark)').matches
        : false

    const isDarkMode=mode === "dark" || (mode === "system" && isSystemDark);

    useEffect(() => {
        const root=document.documentElement;
        root.classList.toggle("dark-mode",isDarkMode);
        root.classList.toggle("light-mode",!isDarkMode);
    },[isDarkMode]);

    useEffect(() => {
        const mediaQuery=window.matchMedia('(prefers-color-scheme: dark)');

        const handleChange=()=>{
            if (mode === "system"){
                const root=document.documentElement;
                const newIsDark=mediaQuery.matches;
                root.classList.toggle("dark-mode",newIsDark);
                root.classList.toggle("light-mode",!newIsDark);
            }
        }

        mediaQuery.addEventListener("change",handleChange);
        return () => mediaQuery.removeEventListener("change",handleChange);
    }, [mode]);

    function toggleDarkMode(){
        setMode((prev:boolean)=>!prev);
    }

    return(
        <DarkModeContext.Provider value={{mode,isDarkMode,toggleDarkMode,setMode}}>
            {children}
        </DarkModeContext.Provider>
    )
}

export function useDarkMode() {
    const context = useContext(DarkModeContext);
    if (context === undefined) throw new Error("DarkModeContext was used outside of DarkModeProvider");
    return context
}

