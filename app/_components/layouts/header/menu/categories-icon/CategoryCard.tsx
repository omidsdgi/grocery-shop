import Link from 'next/link'
import {IconWrapper} from "@/app/_components/layouts/header/menu/categories-icon/IconWrapper";

interface CategoryCardProps {
    icon: string
    pathCount?: number
    title: string
    href: string
    className?: string
}

export function CategoryCard({
                                 icon,
                                 pathCount = 1,
                                 title,
                                 href,
                                 className = ''
                             }: CategoryCardProps) {
    return (
        <Link
            href={href}
            className={`
        flex items-center gap-3.5 rounded-[5px] 
        lg:border-[1px] lg:border-gray-300 
        py-2.5 basis-full  lg:-[calc(50%-8px)] 
        justify-start pl-4 
        lg:hover:border-green-300 
        cursor-pointer
        transition-colors
        ${className}
      `.trim().replace(/\s+/g, ' ')}
        >

            <IconWrapper
                iconClass={icon}
                pathCount={pathCount}
            />
            <div className="text-heading-sm text-blue-300">
                {title}
            </div>
        </Link>
    )
}
