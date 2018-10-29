import { useState, useEffect } from 'react'

export default function usePreferredColorScheme(defaultColorScheme = 'light') {
  const [matches, setMatches] = useState(defaultColorScheme == 'dark')

  useEffect(() => {
    const mediaQueryList = window.matchMedia('(prefers-color-scheme: dark)')
    let active = true

    const listener = () => {
      if (!active) {
        return
      }

      setMatches(mediaQueryList.matches)
    }

    mediaQueryList.addListener(listener)
    setMatches(mediaQueryList.matches)

    return () => {
      active = false
      mediaQueryList.removeListener(listener)
    }
  }, [])

  return matches ? 'dark' : 'light'
}
