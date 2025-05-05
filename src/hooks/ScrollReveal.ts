import { RefObject, useEffect } from "react";
import ScrollReveal from "scrollreveal";

const useScrollReveal = <T extends HTMLElement>(refs: RefObject<T>[], config = {}) => {
    useEffect(() => {
        if (refs.length > 0) {
            const scrollReveal = ScrollReveal({
                delay: 500,
                distance: "50px",
                duration: 300,
                easing: "ease-in-out",
                origin: "bottom",
                reset: false,
                ...config,
            });
            refs.forEach(ref => {
                if (ref.current) {
                    scrollReveal.reveal(ref.current);
                }
            });
            return () => scrollReveal.destroy();
        }
    }, [refs, config]);
};

export default useScrollReveal;
