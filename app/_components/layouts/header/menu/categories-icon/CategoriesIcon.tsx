import {CategoryCard} from "@/app/_components/layouts/header/menu/categories-icon/CategoryCard";
import {CategoriesIconProps} from "@/components/type/MenuItemType";

export default  function CategoriesIcon({browseCategory}:CategoriesIconProps) {

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