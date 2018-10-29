import { useState, useEffect } from 'react'

export default function useLocalStorage(key, initialValue = undefined) {
  const [value, setValue] = useState(
    localStorage.getItem(key) != null ? localStorage.getItem(key) : initialValue
  )

  useEffect(() => {
    localStorage.setItem(key, value)
  })

  return [value, setValue]
}
