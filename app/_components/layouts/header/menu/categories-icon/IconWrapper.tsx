interface IconWrapperProps {
    iconClass: string
    pathCount?: number
    className?: string
}

export function IconWrapper({
                                iconClass,
                                pathCount = 1,
                                className = "text-[30px]"
                            }: IconWrapperProps) {
    return (
        <i className={`${iconClass} ${className}`}>
            {Array.from({ length: pathCount }, (_, i) => (
                <span key={i} className={`path${i + 1}`} />
            ))}
        </i>
    )
}