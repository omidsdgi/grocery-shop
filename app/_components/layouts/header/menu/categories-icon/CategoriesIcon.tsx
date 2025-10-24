import {CategoryCard} from "@/app/_components/layouts/header/menu/categories-icon/CategoryCard";

export default function CategoriesIcon() {
    const categories = [
        {
            icon: 'icon-groceries-1',
            pathCount: 7,
            title: 'Milks and Dairies',
            href: '#'
        },
        {
            icon: 'icon-drinks-1',
            pathCount: 5,
            title: 'Wines & Drinks',
            href: '#'
        },
        {
            icon: 'icon-dress-1',
            pathCount: 4,
            title: 'Clothing & beauty',
            href: '#'
        },
        {
            icon: 'icon-crab-1',
            pathCount: 9,
            title: 'Fresh Seafood',
            href: '#'
        },
        {
            icon: 'icon-pet-food-1',
            pathCount: 8,
            title: 'Pet Foods & Toy',
            href: '#'
        },
        {
            icon: 'icon-sweet-1',
            pathCount: 7,
            title: 'Fast food',
            href: '#'
        },
        {
            icon: 'icon-sweet-1',
            pathCount: 5,
            title: 'Baking material',
            href: '#'
        },
        {
            icon: 'icon-grocery-1',
            pathCount: 7,
            title: 'Vegetables',
            href: '#'
        },
        {
            icon: 'icon-fruit-1',
            pathCount: 3,
            title: 'Fresh Fruit',
            href: '#'
        },
        {
            icon: 'icon-milk-products-1',
            pathCount: 5,
            title: 'Bread and Juice',
            href: '#'
        }

    ]

    return (
        <div className="flex flex-wrap gap-4">
            {categories.map((category) => (
                <CategoryCard
                    key={category.href}
                    icon={category.icon}
                    pathCount={category.pathCount}
                    title={category.title}
                    href={category.href}
                />
            ))}
        </div>
    )
}