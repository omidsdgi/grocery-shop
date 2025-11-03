import React, {createContext, useContext} from "react";
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