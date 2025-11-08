import {getMenu} from "@/app/_lib/data-service";
import Link from "next/link";
import {Flame} from "lucide-react";

export default async function MainMenu() {
    const {mainMenu}= await getMenu();
    return (
        <nav id="main_menu">
            <ul className="flex flex-col lg:flex-row items-start lg:items-center text-heading6 lg:text-heading-sm 2xl:text-heading6 gap-[32px] mt-[32px] lg:mt-0 lg:gap-3 xl:gap-5 2xl:gap-10">

                {mainMenu.map((item, index) => {
                    return (
                        <li key={index}>{
                            item.icon_name ?
                                (<Link href="#" className="flex flex-row gap-2 items-center">
                                        <Flame className="text-[24px]"/>
                                        <div
                                            className="text-heading6 lg:text-heading-sm xl:text-heading6">{item.title}</div>
                                    </Link>
                                ) : (
                                    <Link href="#" className="flex items-center gap-1">{item.title}</Link>)
                        }
                        </li>)
                })}
            </ul>
        </nav>
    );
}

