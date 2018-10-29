import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import Button from './Button'

const Count = styled.span`
  display: inline-block;
  font-size: 1.5rem;
  padding: 0.5rem 1rem;
  min-width: 4rem;
  text-align: center;
`

const Counter = () => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    document.title = `useThePlatform(${count})`
  })

  return (
    <div>
      <Button onClick={() => setCount(count - 1)}>Decrement</Button>
      <Count>{count}</Count>
      <Button onClick={() => setCount(count + 1)}>Increment</Button>
    </div>
  )
}

export default Counter
