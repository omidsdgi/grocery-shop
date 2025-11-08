import CategoriesIcon from "@/app/_components/layouts/header/menu/categories-icon/CategoriesIcon";
import {MoreButton} from "@/app/_components/layouts/header/menu/categories-icon/MoreButton";

import MainMenu from "@/app/_components/layouts/header/menu/main-menu/mainMenu";

export default  function MenuList() {
      return (
        <>
            <div id="all_categories"
                 className="flex relative cursor-pointer bg-green-200 gap-2.5 text-white px-4 py-3 rounded-[5px] items-center">
                <a href="#"><i className="icon-apps text-[24px]"></i></a>
                <div className="text-medium">Browse All Categories</div>
                <i className="icon-angle-small-down text-[24px]"></i>
                <div id="all_categories_box"
                     className=" absolute z-20 bg-white left-0 top-16 w-[500px] rounded-[5px] border-[1px] border-green-300 p-[30px] hover:cursor-default">
                    <div id="all_cat_inner_box" className="flex flex-wrap justify-between gap-y-[15px]">
                        <CategoriesIcon/>
                        <MoreButton text={"Show More Category"}/>
                    </div>
                </div>
            </div>
            <MainMenu/>
              </>
    )
}

