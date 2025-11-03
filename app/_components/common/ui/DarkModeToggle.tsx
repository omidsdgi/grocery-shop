"use client"
import {Moon, Sun} from "lucide-react";
import {useDarkMode} from "@/app/_components/context/DarkModeContext";

export default function DarkModeToggle() {
    const{isDarkMode,toggleDarkMode}=useDarkMode();
    return (
        <button onClick={toggleDarkMode}>
            {isDarkMode ?<Sun/> : <Moon/>}
        </button>
    );
}

