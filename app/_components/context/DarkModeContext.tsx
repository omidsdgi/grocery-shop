"use client"
import React, {createContext, useContext, useEffect} from "react";
import {useLocalStorageState} from "@/app/_components/hook/UseLocalStorageState";
interface Props {
    children: React.ReactNode;
}
interface DarkModeContextType {
    isDarkMode: boolean;
    toggleDarkMode: () => void;
}

const DarkModeContext=createContext<DarkModeContextType|undefined>(undefined);

function DarkModeProvider({children}:Props) {
    const [isDarkMode, setIsDarkMode] = useLocalStorageState(false,"isDarkMode")
useEffect(() => {
  const root=document.documentElement;
  root.classList.toggle("dark-mode",isDarkMode);
  root.classList.toggle("light-mode",!isDarkMode);
},[isDarkMode]);

    function toggleDarkMode(){
        setIsDarkMode((prev:boolean)=>!prev);
    }

    return <DarkModeContext.Provider value={{isDarkMode,toggleDarkMode}}>
    {children}
    </DarkModeContext.Provider>
}
function useDarkMode() {
    const context = useContext(DarkModeContext);
    if (context === undefined) throw new Error("DarkModeContext was used outside of DarkModeProvider");
    return context
}export {DarkModeProvider, useDarkMode}