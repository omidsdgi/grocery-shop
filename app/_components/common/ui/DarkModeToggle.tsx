"use client"
import {Monitor, Moon, Sun} from "lucide-react";
import {useDarkMode} from "@/app/_components/context/DarkModeContext";
import {useEffect, useState} from "react";

export default function DarkModeToggle() {
    const{mode,isDarkMode,setMode}=useDarkMode();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    function handleClick(){
        if (mode === "light") setMode("dark");
        else if (mode === "dark") setMode("system");
        else setMode("light");
    }
    if (!mounted) return null;
    return (
        <button
            onClick={handleClick}
            aria-label="Toggle dark mode"
            className="p-2 rounded-md transition hover:scale-110 flex items-center justify-center"
            title={`Current theme: ${mode}`}
        >
            {mode === "system" ? <Monitor /> : isDarkMode ? <Sun /> : <Moon />}
        </button>
    );
}

