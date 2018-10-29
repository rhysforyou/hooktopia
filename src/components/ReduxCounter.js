import React from 'react'
import styled from 'styled-components'
import Button from './Button'
import { incrementCounter, decrementCounter } from '../actions'
import createReduxHook from '../hooks/useStoreConnector'

const Count = styled.span`
  display: inline-block;
  font-size: 1.5rem;
  padding: 0.5rem 1rem;
  min-width: 4rem;
  text-align: center;
`

const useCounterConnector = createReduxHook(
  state => ({
    count: state.counter
  }),
  dispatch => ({
    increment: () => dispatch(incrementCounter(1)),
    decrement: () => dispatch(decrementCounter(1))
  })
)

const Counter = () => {
  const { count, increment, decrement } = useCounterConnector()

  return (
    <div>
      <Button onClick={() => decrement()}>Decrement</Button>
      <Count>{count}</Count>
      <Button onClick={() => increment()}>Increment</Button>
    </div>
  )
}

export default Counter
