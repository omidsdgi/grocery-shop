"use client"
import {Menu} from "lucide-react";
import Link from "next/link";
import {ReactNode, useEffect, useState, useRef} from "react";

export default function MobileMenuButton({children}: {children: ReactNode}) {
    const [showMobileMenu, setShowMobileMenu] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);
    const buttonRef = useRef<HTMLButtonElement>(null);

    const toggleMenu = () => {
        setShowMobileMenu((prevState) => !prevState);
    };

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            const target = event.target as Node;

            if (
                (menuRef.current && menuRef.current.contains(target)) ||
                (buttonRef.current && buttonRef.current.contains(target))
            ) {
                return;
            }

            setShowMobileMenu(false);
        };
        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []); // dependency array خالی

    return (
        <>
            <button
                ref={buttonRef}
                onClick={toggleMenu}
                id="menu_btn"
                className="lg:hidden w-[24px] h-[24px]"
            >
                <Menu size={24}/>
            </button>

            <div
                ref={menuRef}
                className={`container transition-all w-4/5 rounded-[24px] lg:rounded-[0px] lg:w-auto flex absolute top-0 bottom-0 ${showMobileMenu ? "left-0" : "-left-[100%]"} lg:static flex-col lg:flex-row justify-start lg:justify-between items-start pt-[16px] pl-[24px] lg:py-[13px] lg:items-center h-[100vh] bg-white lg:h-[70px] mobile-menu z-50`}
            >
                {children}

                <div className="hidden lg:flex items-center shrink-0 gap-3">
                    <Link href="#"><i
                        className="icon-headset text-[30px] xl:text-[32px] 2xl:text-[36px] aspect-square"></i></Link>
                    <div>
                        <Link href="tel:19008888"
                              className="text-green-200 lg:text-heading6 xl:text-heading5 2xl:text-heading4">1900-8888</Link>
                        <div className="font-lato text-xsmall"><span className="hidden xl:inline-block">24/7 </span>Support
                            Center
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}