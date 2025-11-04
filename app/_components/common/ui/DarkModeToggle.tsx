"use client"
import {Monitor, Moon, Sun} from "lucide-react";
import {useDarkMode} from "@/app/_components/context/DarkModeContext";
import {useEffect, useState} from "react";

export default function DarkModeToggle(): JSX.Element | null {
    const{mode,isDarkMode, toggleDarkMode }=useDarkMode();
    const [mounted, setMounted] = useState<boolean>(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    const handleClick = () => {
        toggleDarkMode();
    };

    return (
        <button
            onClick={handleClick}
            aria-label="Toggle theme mode"
            className="p-2 rounded-lg transition-all duration-200 hover:scale-110 hover:bg-gray-200 active:scale-95 flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            title={`Current theme: ${mode}`}
            style={{
                background: isDarkMode ? '#333' : '#fff',
                color: isDarkMode ? '#fff' : '#000'
            }}
        >
            {mode === "system" ? <Monitor  className="w-5 h-5" /> : isDarkMode ? <Sun  className="w-5 h-5"/> : <Moon  className="w-5 h-5"/>}
        </button>
    );
}
