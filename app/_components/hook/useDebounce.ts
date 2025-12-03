import { useState } from "react";

export default function useDebounce(func: () => void, delay: number) {
    const [timer, setTimer] = useState<ReturnType<typeof setTimeout> | null>(null);

    return function () {
        if (timer) clearTimeout(timer);
        const newTimer = setTimeout(func, delay);
        setTimer(newTimer);
    };
}