"use client"
import {useEffect, useState, MouseEvent, useRef} from "react";
import Link from "next/link";
import {MoreButton} from "@/app/_components/layouts/header/menu/categories-icon/MoreButton";
import {MainMenuList} from "@/app/_components/layouts/header/menu/main-menu/MainMenuList";
import {CategoriesIcon} from "@/app/_components/layouts/header/menu/categories-icon/CategoriesIcon";
import {MainListProps} from "@/components/type/MenuItemType";

export default  function MenuList({mainMenu, browseCategory}:MainListProps) {
    const [showCategoryMenu, setShowCategoryMenu] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);

    const categoryBtnClickHandler = (e:MouseEvent<HTMLDivElement>) => {
        e.stopPropagation();
        setShowCategoryMenu((prevState) => !prevState);
    };

    useEffect(()=>{
        const handleClickOutside=(event:Event)=>{
            if (menuRef.current && !menuRef.current.contains(event.target as Node)){
                setShowCategoryMenu(false);
            }
        }
        if (showCategoryMenu){
            document.addEventListener("click",handleClickOutside);
        }
        return () => {
            document.removeEventListener("click",handleClickOutside );
        }
    },[showCategoryMenu]);

    return (
        <>
            <div className={"relative"} ref={menuRef}>
                <div onClick={categoryBtnClickHandler} className="flex cursor-pointer bg-green-200 gap-2.5 text-white px-4 py-3 rounded-[5px] items-center" >
                    <Link href="#"><i className="icon-apps text-[24px]"></i></Link>
                    <div className="text-medium">Browse All Categories</div>
                    <i className="icon-angle-small-down text-[24px]"></i>
                </div>
                <div
                    className= {`${showCategoryMenu ? "flex" : "hidden"} lg:absolute z-20 bg-white left-0 top-16 w-[500px] rounded-[5px] lg:border-[1px] border-green-300 p-[30px] hover:cursor-default`}>
                    <div className="flex flex-wrap justify-between gap-y-[15px]">
                        <CategoriesIcon browseCategory={browseCategory} />
                        <MoreButton text={"Show More Category"}/>
                    </div>
                </div>
            </div>

            <MainMenuList mainMenu={mainMenu} browseCategory={browseCategory} />
        </>
    )
}

