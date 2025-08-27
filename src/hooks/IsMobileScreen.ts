import { useEffect, useState } from 'react'

/**
 * Hook that detects if the current screen width is considered "mobile".
 * --
 * @returns {boolean} - True if the viewport width matches.
 */
export const useIsMobileScreen = (): boolean => {
    const [isMobile, setIsMobile] = useState(
        window.innerWidth < 768
    );
    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 768)
        handleResize()
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])
    return isMobile
}