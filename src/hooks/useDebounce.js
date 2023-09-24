import { useEffect, useMemo, useRef } from "react";
import { debounce } from "@utils/debounce";

function useDebounce(callback, delayInMilliSeconds = 500) {
    const ref = useRef();

    useEffect(() => {
        ref.current = callback;
    }, [callback]);

    const debouncedCallback = useMemo(() => {
        const func = () => {
            ref.current?.();
        };

        return debounce(func, delayInMilliSeconds);
    }, [delayInMilliSeconds]);

    return debouncedCallback;
}

export default useDebounce;
