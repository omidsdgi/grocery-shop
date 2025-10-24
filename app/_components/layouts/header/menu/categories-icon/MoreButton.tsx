import { Button } from '@/components/ui/button'
import { IconWrapper } from './IconWrapper'
import { cn } from '@/lib/utils'

interface MoreButtonProps {
    icon?: string
    text: string
    onClick?: () => void
    className?: string
    variant?: 'default' | 'ghost' | 'outline'
}

export function MoreButton({
                               icon = 'icon-add',
                               text,
                               onClick,
                               className,
                               variant = 'ghost'
                           }: MoreButtonProps) {
    return (
        <Button
            type="button"
            variant={variant}
            onClick={onClick}
            className={cn(
                'w-full mt-[17px] gap-4 h-auto py-3',
                className
            )}
        >
            <IconWrapper
                iconClass={icon}
                className="text-[24px]"
            />
            <span className="text-heading-sm text-blue-300">
        {text}
      </span>
        </Button>
    )
}
