import {getMenu} from "@/app/_lib/data-service";
import MenuList from "@/app/_components/layouts/header/menu/MenuList";

export default async function MenuCategories() {
const {mainMenu,browseCategory} =await getMenu()

    return (
        <MenuList
            mainMenu={mainMenu}
            browseCategory={browseCategory}
        />
    );
}