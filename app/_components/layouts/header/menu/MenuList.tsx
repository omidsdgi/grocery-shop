import CategoriesIcon from "@/app/_components/layouts/header/menu/categories-icon/CategoriesIcon";
import {MoreButton} from "@/app/_components/layouts/header/menu/categories-icon/MoreButton";

import Link from "next/link";
import {MenuMock} from "@/app/_components/mock/MenuMock";

export default function MenuList() {
    return (
        <>
            <div id="all_categories"
                 className="flex relative cursor-pointer bg-green-200 gap-2.5 text-white px-4 py-3 rounded-[5px] items-center">
                <a href="#"><i className="icon-apps text-[24px]"></i></a>
                <div className="text-medium">Browse All Categories</div>
                <i className="icon-angle-small-down text-[24px]"></i>
                <div id="all_categories_box"
                     className="hidden absolute z-20 bg-white left-0 top-16 w-[500px] rounded-[5px] border-[1px] border-green-300 p-[30px] hover:cursor-default">
                    <div id="all_cat_inner_box" className="flex flex-wrap justify-between gap-y-[15px]">
                        <CategoriesIcon/>
                        <MoreButton text={"More Categories"}/>
                    </div>
                </div>
            </div>
            <nav id="main_menu">
                <ul className="flex flex-col lg:flex-row items-start lg:items-center text-heading6 lg:text-heading-sm 2xl:text-heading6 gap-[32px] mt-[32px] lg:mt-0 lg:gap-3 xl:gap-5 2xl:gap-10">

                    {MenuMock.map((item,index) =>{
                        return (
                            <li key={index}>{
                                item.icon ?
                                    (<Link href="#"  className="flex flex-row gap-2 items-center">
                                            <i className="icon-flame text-[24px]"></i>
                                            <div className="text-heading6 lg:text-heading-sm xl:text-heading6">{item.title}</div>
                                        </Link>
                                    ) :(
                                        <Link href="#" className="flex items-center gap-1">{item.title}</Link>)
                            }
                            </li>)})}
                </ul>
            </nav>
        </>
    )
}

