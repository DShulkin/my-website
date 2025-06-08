import { useState, useEffect } from 'react' 

export default function useBreakpoint() {
    const [width, setWidth] = useState(null)

    useEffect ( () => {
        const handleResize = () => setWidth(window.innerWidth) /* get current width of browser window */
        handleResize() /* immediately called”*/
        window.addEventListener('resize', handleResize) /* Every time the user resizes the window, run handleResize again.”*/
        return () => window.removeEventListener('resize', handleResize) /* clean up code prevents bugs */
    }, [])

    return {
        isMobile: width !== null && width < 768,
        isTablet: width >= 768 && width < 1366,
        isDesktop: width >= 1366
    }
}

        // isMobile: width !== null && width < 768,
        // isTablet: width >= 768 && width < 1180,
        // isDesktop: width >= 1180