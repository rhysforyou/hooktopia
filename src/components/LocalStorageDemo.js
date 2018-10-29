import React, { useCallback } from 'react'
import styled, { css } from 'styled-components'
import useLocalStorage from '../hooks/useLocalStorage'
import usePreferredColorScheme from '../hooks/usePreferredColorScheme'

const TextArea = styled.textarea.attrs({
  rows: 5
})`
  appearance: none;
  margin: 0;
  padding: 0.5rem;
  font-size: 1rem;
  border-radius: 0.25rem;
  width: 100%;
  box-sizing: border-box;
  ${({ colorScheme }) =>
    colorScheme === 'dark'
      ? css`
          background-color: #222;
          color: #fff;
          border: 1px solid #444;
        `
      : css`
          background-color: #fff;
          color: #333;
          border: 1px solid #ddd;
        `};
`

const LocalStorageDemo = () => {
  const [name, setName] = useLocalStorage('name')
  const colorScheme = usePreferredColorScheme()
  const handleChange = useCallback(e => setName(e.target.value), [])

  return (
    <div>
      <h1>Local Storage Demo</h1>
      <p>
        As you enter text in the text area below, <code>localStorage</code> will
        be updated asynchronously.
      </p>
      <TextArea
        colorScheme={colorScheme}
        value={name}
        onChange={handleChange}
      />
    </div>
  )
}

export default LocalStorageDemo
