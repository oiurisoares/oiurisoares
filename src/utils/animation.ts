// Define the animation variants
export const fadeVariants = {
    exit: { opacity: 0 }, hidden: { opacity: 0 }, visible: { opacity: 1 },
};
export const fadeSlideDownVariants = {
    hidden: { opacity: 0, y: -10 }, visible: { opacity: 1, y: 0 }, exit: { opacity: 0, y: -10 },
};
export const fadeSlideUpVariants = {
    hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 }, exit: { opacity: 0, y: 10 },
};
