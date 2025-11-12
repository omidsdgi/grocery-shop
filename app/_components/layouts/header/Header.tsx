
import Logo from "@/app/_components/common/ui/Logo";
import SearchForm from "@/app/_components/layouts/header/search-form/SearchForm";
import HeaderIcons, {HeaderIconsResponsive} from "@/app/_components/layouts/header/header-icons/HeaderIcons";
import MobileMenuButton from "@/app/_components/layouts/header/menu/mobile-menu-button/MobileMenuButton";
import MenuCategories from "@/app/_components/layouts/header/menu/menu-categories/MenuCategories";

export default function Header() {
    return (
        <header className="mb-[33px]">
            <div className="container flex items-center justify-between py-4 md:py-6 xl:py-8">
                <Logo/>
                <SearchForm/>
                <HeaderIcons/>
                <div className="lg:hidden">
                <MobileMenuButton>
                    <MenuCategories/>
                </MobileMenuButton>
                </div>
            </div>
            <div className="border-gray-200 border-y h  flex flex-col justify-between py-[4px]">
                <div className="hidden lg:block">
                    <MobileMenuButton>
                        <MenuCategories/>
                    </MobileMenuButton>
                </div>

                <div className="container flex justify-between lg:hidden pt-[20px] pb-[16px] items-end">
                    <div className="border-[1px] border-green-150 rounded-[5px] w-full max-w-[220px] p-[6px]">
                        <form name="search-form" action="#" method="post" className="flex items-center">
                            <input type="text" name="search_text" placeholder="Search for items"
                                   className="text-xsmall text-gray-400 border-gray-300 w-full focus:outline-none"/>
                            <button type="submit"><i className="icon-search text-[16px]"></i></button>
                        </form>
                    </div>


                    <HeaderIconsResponsive/>

                </div>
            </div>
        </header>
    );
}

