import React, { createContext } from 'react'
import styled from 'styled-components'
import Counter from './Counter'
import ReduxCounter from './ReduxCounter'
import { DarkBaseline, LightBaseline } from './Baseline'
import usePreferredColorScheme from '../hooks/usePreferredColorScheme'
import { Store } from '../lib/storeContext'
import { configureStore } from '../lib/store'

const Container = styled.main`
  margin: auto;
  padding: 1rem;
  max-width: 32rem;
`

const App = () => {
  const preferredColorScheme = usePreferredColorScheme()

  return (
    <Store.Provider value={configureStore()}>
      <Container>
        {preferredColorScheme === 'dark' ? <DarkBaseline /> : <LightBaseline />}
        <h1>Hello, React 16.7 (with hooks!)</h1>
        <Counter />
        <ReduxCounter />
      </Container>
    </Store.Provider>
  )
}

export default App
