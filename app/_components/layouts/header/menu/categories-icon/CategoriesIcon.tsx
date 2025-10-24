import {CategoryCard} from "@/app/_components/layouts/header/menu/categories-icon/CategoryCard";
import {categories} from "@/app/_components/mock/BrowserCategory";

export default function CategoriesIcon() {

    return (
        <div className="flex flex-wrap gap-4">
            {categories.map((category,index) => (
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