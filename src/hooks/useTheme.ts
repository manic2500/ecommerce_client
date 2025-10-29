import { useEffect, useState } from 'react'

export function useTheme() {
    const [theme, setTheme] = useState(localStorage.getItem('theme') || 'system')

    useEffect(() => {
        const root = window.document.documentElement
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches

        const activeTheme = theme === 'system' ? (prefersDark ? 'dark' : 'light') : theme
        root.classList.remove('light', 'dark')
        root.classList.add(activeTheme)
        localStorage.setItem('theme', theme)
    }, [theme])

    return { theme, setTheme }
}
