import Link from "next/link";
import {Flame} from "lucide-react";
import {MainMenuListProps} from "@/components/type/MenuItemType";
import {FC} from "react";

export const MainMenuList:FC<MainMenuListProps>=({mainMenu})=> {
    return (
        <nav id="main_menu">
            <ul className="flex flex-col lg:flex-row items-start lg:items-center text-heading6 lg:text-heading-sm 2xl:text-heading6 gap-[32px] mt-[32px] lg:mt-0 lg:gap-3 xl:gap-5 2xl:gap-10">
                {mainMenu?.map((item) => (
                    <li key={item.id}>
                        {item.icon_name ? (
                            <Link
                                href={item.link}
                                className="flex flex-row gap-2 items-center"
                            >
                                <Flame className="text-[24px]"/>
                                <div className="text-heading6 lg:text-heading-sm xl:text-heading6">
                                    {item.title}
                                </div>
                            </Link>
                        ) : (
                            <Link
                                href={item.link}
                                className="flex items-center gap-1"
                            >
                                {item.title}
                            </Link>
                        )}
                    </li>
                ))}
            </ul>
        </nav>
    );
}

