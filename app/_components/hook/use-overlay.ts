import React, {useEffect} from "react";

type RefElement= React.RefObject<HTMLElement>;

interface UseOverlayProps {
   refs:RefElement[];
   onClickOutside:()=>void
    enable:boolean;
}

export function useOverlay({refs, onClickOutside, enable}:UseOverlayProps) {
    useEffect(() => {
        if (!enable) return
        const handleClick= (event:MouseEvent) => {
            const target = event.target as Node;
            const clickInside= refs.some(ref=>ref.current?.contains(target))
            if (clickInside) return

            onClickOutside()
        }
        document.addEventListener("click", handleClick)
        return () => {
            document.removeEventListener("click", handleClick)
        }
    }, [refs, onClickOutside, enable]);
}