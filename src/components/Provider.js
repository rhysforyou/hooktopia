import { createContext } from 'react'
import { configureStore } from '../lib/store'

const store = configureStore()

export const Store = createContext(store)
