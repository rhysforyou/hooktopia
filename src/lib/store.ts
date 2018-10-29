import { createStore, Store as ReduxStore, applyMiddleware } from 'redux'
import reducer, { State } from '../reducers'
import { Action } from '../actions'
import { createLogger } from 'redux-logger'

export type Store = ReduxStore<State, Action>

export function configureStore(): Store {
  const logger = createLogger({
    collapsed: true
  })
  return createStore(reducer, applyMiddleware(logger))
}
