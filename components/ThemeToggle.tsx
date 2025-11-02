'use client'

import { useEffect, useState } from 'react'
import { FaSun, FaMoon, FaDesktop } from 'react-icons/fa'

type Theme = 'light' | 'dark' | 'system'

export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>('system')

  // Function to get system theme
  const getSystemTheme = () => 
    window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'

  // Function to update the theme class on document
  const updateThemeClass = (newTheme: Theme) => {
    const resolvedTheme = newTheme === 'system' ? getSystemTheme() : newTheme
    document.documentElement.classList.toggle('dark', resolvedTheme === 'dark')
  }

  useEffect(() => {
    // On mount, read the theme from localStorage or default to system
    const savedTheme = (localStorage.getItem('theme') as Theme) || 'system'
    if (savedTheme !== theme) {
      setTheme(savedTheme)
    }
    updateThemeClass(savedTheme)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    // Add system theme change listener
    if (theme !== 'system') return
    
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    const handleSystemThemeChange = () => {
      updateThemeClass('system')
    }

    mediaQuery.addEventListener('change', handleSystemThemeChange)
    return () => mediaQuery.removeEventListener('change', handleSystemThemeChange)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [theme])

  const toggleTheme = () => {
    const themeOrder: Theme[] = ['light', 'dark', 'system']
    const currentIndex = themeOrder.indexOf(theme)
    const newTheme = themeOrder[(currentIndex + 1) % themeOrder.length]
    
    setTheme(newTheme)
    updateThemeClass(newTheme)
    localStorage.setItem('theme', newTheme)
  }

  const getIcon = () => {
    if (theme === 'system') return <FaDesktop className="h-5 w-5" />
    if (theme === 'light') return <FaSun className="h-5 w-5" />
    return <FaMoon className="h-5 w-5" />
  }

  const getLabel = () => {
    if (theme === 'system') return 'System theme'
    if (theme === 'light') return 'Light theme'
    return 'Dark theme'
  }

  return (
    <button
      onClick={toggleTheme}
      className="rounded-md p-2 text-slate-700 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-800"
      aria-label={getLabel()}
      title={getLabel()}
    >
      {getIcon()}
    </button>
  )
} 