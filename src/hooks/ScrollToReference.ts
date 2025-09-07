import { type RefObject } from 'react'

/**
 * Scrolls smoothly to a referenced element with optional vertical offset.
 * @param ref - The HTML element ref to scroll to.
 * @param offset - Optional offset in percentage of the viewport height.
 */
export function scrollToRef(
    ref: RefObject<HTMLElement | null>,
    offset?: number
): void {
    if (!ref.current) return;
    offset = offset || 0;

    const position = ref.current.getBoundingClientRect().top + window.scrollY;
    window.scrollTo({
        behavior: 'smooth',
        top: position - (window.innerHeight * (offset / 100)),
    });
}