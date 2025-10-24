import CategoriesIcon from "@/app/_components/layouts/header/menu/categories-icon/CategoriesIcon";

export default function Menu() {
    return (
        <>
        <div id="all_categories"
             className="flex relative cursor-pointer bg-green-200 gap-2.5 text-white px-4 py-3 rounded-[5px] items-center">
            <a href="#"><i className="icon-apps text-[24px]"></i></a>
            <div className="text-medium">Browse All Categories</div>
            <i className="icon-angle-small-down text-[24px]"></i>
            <div id="all_categories_box"
                 className=" absolute z-20 bg-white left-0 top-16 w-[500px] rounded-[5px] border-[1px] border-green-300 p-[30px] hover:cursor-default">
                <CategoriesIcon/>
                <div id="all_cat_inner_box" className="flex flex-wrap justify-between gap-y-[15px]">
                    <a href="#"
                       className="flex items-center gap-3.5 rounded-[5px] lg:border-[1px] lg:border-gray-300 py-2.5 basis-[calc(50%-8px)] justify-start pl-4 lg:hover:border-green-300 cursor-pointer">
                        <i className="icon-groceries-1 text-[30px]"><span className="path1"></span><span
                            className="path2"></span><span className="path3"></span><span className="path4"></span><span
                            className="path5"></span><span className="path6"></span><span className="path7"></span></i>
                        <div className="text-heading-sm text-blue-300">Milks and Dairies</div>
                    </a>
                    <a href="#"
                       className="flex items-center gap-3.5 rounded-[5px] lg:border-[1px] lg:border-gray-300 py-2.5 basis-[calc(50%-8px)] justify-start pl-4 lg:hover:border-green-300 cursor-pointer">
                        <i className="icon-drinks-1 text-[30px]"><span className="path1"></span><span
                            className="path2"></span><span className="path3"></span><span className="path4"></span><span
                            className="path5"></span></i>
                        <div className="text-heading-sm text-blue-300">Wines & Drinks</div>
                    </a>
                    <a href="#"
                       className="flex items-center gap-3.5 rounded-[5px] lg:border-[1px] lg:border-gray-300 py-2.5 basis-[calc(50%-8px)] justify-start pl-4 lg:hover:border-green-300 cursor-pointer">
                        <i className="icon-dress-1 text-[30px]"><span className="path1"></span><span
                            className="path2"></span><span className="path3"></span><span className="path4"></span></i>
                        <div className="text-heading-sm text-blue-300">Clothing & beauty</div>
                    </a>
                    <a href="#"
                       className="flex items-center gap-3.5 rounded-[5px] lg:border-[1px] lg:border-gray-300 py-2.5 basis-[calc(50%-8px)] justify-start pl-4 lg:hover:border-green-300 cursor-pointer">
                        <i className="icon-crab-1 text-[30px]"><span className="path1"></span><span
                            className="path2"></span><span className="path3"></span><span className="path4"></span><span
                            className="path5"></span><span className="path6"></span><span className="path7"></span><span
                            className="path8"></span><span className="path9"></span></i>
                        <div className="text-heading-sm text-blue-300">Fresh Seafood</div>
                    </a>
                    <a href="#"
                       className="flex items-center gap-3.5 rounded-[5px] lg:border-[1px] lg:border-gray-300 py-2.5 basis-[calc(50%-8px)] justify-start pl-4 lg:hover:border-green-300 cursor-pointer">
                        <i className="icon-pet-food-1 text-[30px]"><span className="path1"></span><span
                            className="path2"></span><span className="path3"></span><span className="path4"></span><span
                            className="path5"></span><span className="path6"></span><span className="path7"></span><span
                            className="path8"></span></i>
                        <div className="text-heading-sm text-blue-300">Pet Foods & Toy</div>
                    </a>
                    <a href="#"
                       className="flex items-center gap-3.5 rounded-[5px] lg:border-[1px] lg:border-gray-300 py-2.5 basis-[calc(50%-8px)] justify-start pl-4 lg:hover:border-green-300 cursor-pointer">
                        <i className="icon-sweet-1 text-[30px]"><span className="path1"></span><span
                            className="path2"></span><span className="path3"></span><span className="path4"></span><span
                            className="path5"></span><span className="path6"></span><span className="path7"></span></i>
                        <div className="text-heading-sm text-blue-300">Fast food</div>
                    </a>
                    <a href="#"
                       className="flex items-center gap-3.5 rounded-[5px] lg:border-[1px] lg:border-gray-300 py-2.5 basis-[calc(50%-8px)] justify-start pl-4 lg:hover:border-green-300 cursor-pointer">
                        <i className="icon-dairy-products-1 text-[30px]"><span className="path1"></span><span
                            className="path2"></span><span className="path3"></span><span className="path4"></span><span
                            className="path5"></span></i>
                        <div className="text-heading-sm text-blue-300">Baking material</div>
                    </a>
                    <a href="#"
                       className="flex items-center gap-3.5 rounded-[5px] lg:border-[1px] lg:border-gray-300 py-2.5 basis-[calc(50%-8px)] justify-start pl-4 lg:hover:border-green-300 cursor-pointer">
                        <i className="icon-grocery-1 text-[30px]"><span className="path1"></span><span
                            className="path2"></span><span className="path3"></span><span className="path4"></span><span
                            className="path5"></span><span className="path6"></span><span className="path7"></span></i>
                        <div className="text-heading-sm text-blue-300">Vegetables</div>
                    </a>
                    <a href="#"
                       className="flex items-center gap-3.5 rounded-[5px] lg:border-[1px] lg:border-gray-300 py-2.5 basis-[calc(50%-8px)] justify-start pl-4 lg:hover:border-green-300 cursor-pointer">
                        <i className="icon-fruit-1 text-[30px]"><span className="path1"></span><span
                            className="path2"></span><span className="path3"></span></i>
                        <div className="text-heading-sm text-blue-300">Fresh Fruit</div>
                    </a>
                    <a href="#"
                       className="flex items-center gap-3.5 rounded-[5px] lg:border-[1px] lg:border-gray-300 py-2.5 basis-[calc(50%-8px)] justify-start pl-4 lg:hover:border-green-300 cursor-pointer">
                        <span className="icon-milk-products-1 text-[30px]"><span className="path1"></span><span
                            className="path2"></span><span className="path3"></span><span className="path4"></span><span
                            className="path5"></span></span>
                        <div className="text-heading-sm text-blue-300">Bread and Juice</div>
                    </a>
                    <div id="more_categories"
                         className="cursor-pointer flex gap-4 items-center justify-center w-full mt-[17px]">
                        <i className="icon-add text-[24px]"></i>
                        <div className="text-heading-sm text-blue-300">More Categories</div>
                    </div>
                </div>
            </div>
        </div>
    <nav id="main_menu">
        <ul className="flex flex-col lg:flex-row items-start lg:items-center text-heading6 lg:text-heading-sm 2xl:text-heading6 gap-[32px] mt-[32px] lg:mt-0 lg:gap-3 xl:gap-5 2xl:gap-10">
            <li>
                <a href="#" className="flex flex-row gap-2 items-center">
                    <i className="icon-flame text-[24px]"></i>
                    <div className="text-heading6 lg:text-heading-sm xl:text-heading6">Hot Deals</div>
                </a>
            </li>
            <li>
                <a href="#" className="flex items-center gap-1">Home</a>
            </li>
            <li>
                <a href="#" className="flex flex-row">Food</a>
            </li>
            <li>
                <a href="#" className="flex flex-row">Vegetables</a>
            </li>
        </ul>
    </nav>
        </>
)
    ;
}

