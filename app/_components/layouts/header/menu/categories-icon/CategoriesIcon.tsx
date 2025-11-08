import {CategoryCard} from "@/app/_components/layouts/header/menu/categories-icon/CategoryCard";
// import {categoriesMock} from "@/app/_components/mock/catergoriesMock";
import {getMenu} from "@/app/_lib/data-service";

export default async function CategoriesIcon() {
    const {browseCategory}=await getMenu()

    return (
        <div className="flex flex-wrap gap-4">
            {browseCategory.map((category,index) => (
                <CategoryCard
                    key={index}
                    icon={category.icon_name}
                    pathCount={category.icon_path}
                    title={category.title}
                    href={category.link}
                />
            ))}
        </div>
    )
}