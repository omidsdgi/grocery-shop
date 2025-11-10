"use client"
import {MoreButton} from "@/app/_components/layouts/header/menu/categories-icon/MoreButton";
import Link from "next/link";
import {MainMenuList} from "@/app/_components/layouts/header/menu/main-menu/MainMenuList";
import {CategoriesIcon} from "@/app/_components/layouts/header/menu/categories-icon/CategoriesIcon";
import {MainMenuListProps} from "@/components/type/MenuItemType";

export default  function MenuList({mainMenu, browseCategory}:MainMenuListProps) {

        return (
        <>
            <div className="relative">
                <div  className="flex cursor-pointer bg-green-200 gap-2.5 text-white px-4 py-3 rounded-[5px] items-center" >
                <Link href="#"><i className="icon-apps text-[24px]"></i></Link>
                <div className="text-medium">Browse All Categories</div>
                <i className="icon-angle-small-down text-[24px]"></i>
                </div>
                <div  className="relative">
                <div
                     className= "absolute z-20 bg-white left-0 top-16 w-[500px] rounded-[5px] border-[1px] border-green-300 p-[30px] hover:cursor-default">
                    <div id="all_cat_inner_box" className="flex flex-wrap justify-between gap-y-[15px]">
                        <CategoriesIcon browseCategory={browseCategory} />
                        <MoreButton text={"Show More Category"}/>
                    </div>
                </div>
                </div>
            </div>
            <MainMenuList mainMenu={mainMenu} browseCategory={browseCategory} />
              </>
    )
}

