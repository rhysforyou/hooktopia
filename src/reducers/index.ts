import counter, { CounterState } from './counter'
import { combineReducers, Reducer } from 'redux'
import { Action } from '../actions'

export interface State {
  counter: CounterState
}

const reducer: Reducer<State, Action> = combineReducers({
  counter
})

export default reducer
