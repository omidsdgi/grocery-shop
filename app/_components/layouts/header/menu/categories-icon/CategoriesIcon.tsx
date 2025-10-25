import {CategoryCard} from "@/app/_components/layouts/header/menu/categories-icon/CategoryCard";
import {categoriesMock} from "@/app/_components/mock/BrowserCategoryMock";

export default function CategoriesIcon() {

    return (
        <div className="flex flex-wrap gap-4">
            {categoriesMock.map((category,index) => (
                <CategoryCard
                    key={index}
                    icon={category.icon}
                    pathCount={category.pathCount}
                    title={category.title}
                    href={category.href}
                />
            ))}
        </div>
    )
}