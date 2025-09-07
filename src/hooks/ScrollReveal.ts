import { useEffect, type RefObject } from "react";
import ScrollReveal from "scrollreveal";

/**
 * Custom hook to apply ScrollReveal animations to multiple refs.
 * --
 * @param refs Array of refs to be revealed on scroll
 * @param config Optional configuration for ScrollReveal
 */
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
