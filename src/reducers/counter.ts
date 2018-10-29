import { Reducer } from 'redux'
import { Action } from '../actions'

export type CounterState = number

const counter: Reducer<CounterState, Action> = (state = 0, action) => {
  switch (action.type) {
    case '@@counter/INCREMENT':
      return state + action.amount
    case '@@counter/DECREMENT':
      return state - action.amount
    default:
      return state
  }
}

export default counter
