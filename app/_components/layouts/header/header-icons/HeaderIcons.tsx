import { User, ShoppingCart } from "lucide-react";
import DarkModeToggle from "@/app/_components/common/ui/DarkModeToggle";
import {auth} from "@/app/_lib/auth";
import Image from "next/image";

export default async function HeaderIcons() {
    const session=await auth();
    return (
        <ul className="hidden lg:flex  gap-5">
            <li className="flex gap-2 cursor-pointer items-center justify-center">
                <a href="#" className="flex items-center gap-2">
                    {session?.user?.image ? (
                        <Image
                            className="h-6 w-6 rounded-full object-cover"
                            src={session.user.image}
                            alt={session.user.name || "User avatar"}
                            height={24}
                            width={24}
                            referrerPolicy="no-referrer"
                        />
                    ) : (
                        <User className="h-6 w-6"/>
                    )
                    }
                    <div className="hidden xl:inline-block text-sm text-gray-500 font-lato">Account</div>
                </a>
            </li>
            <li>
                <DarkModeToggle/>
            </li>
            <li className="flex gap-2 cursor-pointer items-center">
                <div className="relative">
                <span
                    className="absolute -top-2.5 -right-2.5 w-5 h-5 bg-emerald-500 rounded-full flex justify-center items-center text-white text-xs">
                  4
                </span>
                    <a href="#">
                        <ShoppingCart className="h-6 w-6"/>
                    </a>
                </div>
                <div className="hidden xl:inline-block text-sm text-gray-500 font-lato">Cart</div>
            </li>
        </ul>
    );
}


export  function HeaderIconsResponsive() {
    return (
        <ul className="flex gap-5">
            <li className="flex gap-2 cursor-pointer items-center">
                <a href="#">
                    <User className="h-6 w-6"/>
                </a>
                <div className="hidden xl:inline-block text-sm text-gray-500 font-lato">Account</div>
            </li>
            <li>
                <DarkModeToggle/>
            </li>
            <li className="flex gap-2 cursor-pointer items-center">
                <div className="relative">
                  <span
                      className="absolute -top-2.5 -right-2.5 w-5 h-5 bg-emerald-500 rounded-full flex justify-center items-center text-white text-xs">
                    4
                  </span>
                    <a href="#">
                        <ShoppingCart className="h-6 w-6"/>
                    </a>
                </div>
                <div className="hidden xl:inline-block text-sm text-gray-500 font-lato">Cart</div>
            </li>
        </ul>
    );
}

