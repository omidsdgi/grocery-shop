import {CategoryCard} from "@/app/_components/layouts/header/menu/categories-icon/CategoryCard";
import {FC} from "react";
import {CategoriesIconProps} from "@/components/type/MenuItemType";

export  const CategoriesIcon:FC<CategoriesIconProps>=({browseCategory})=> {

    return (
        <div className="flex flex-wrap gap-4">
            {browseCategory?.map((category) => (
                <CategoryCard
                    key={category.id}
                    icon={category.icon_name}
                    pathCount={category.icon_path}
                    title={category.title}
                    href={category.link}
                />
            ))}
        </div>
    )
}