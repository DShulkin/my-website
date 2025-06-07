import { useState, useEffect } from 'react' 

export default function useBreakpoint() {
    const [width, setWidth] = useState(null)

    useEffect ( () => {
        const handleResize = () => setWidth(window.innerWidth)
        handleResize()
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    return {
        isMobile: width !== null && width < 768,
        isTablet: width >= 768 && width < 1024,
        isDesktop: width >= 1024
    }
}