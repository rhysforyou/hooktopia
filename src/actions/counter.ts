import { Action, ActionCreator } from 'redux'

interface IncrementCounterAction extends Action {
  type: '@@counter/INCREMENT'
  amount: number
}

export const incrementCounter: ActionCreator<IncrementCounterAction> = (
  amount: number
) => ({
  type: '@@counter/INCREMENT',
  amount
})

interface DecrementCounterAction extends Action {
  type: '@@counter/DECREMENT'
  amount: number
}

export const decrementCounter: ActionCreator<DecrementCounterAction> = (
  amount: number
) => ({
  type: '@@counter/DECREMENT',
  amount
})

export type CounterAction = IncrementCounterAction | DecrementCounterAction
