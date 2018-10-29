import { createGlobalStyle, css } from 'styled-components'

const baseStyles = css`
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  border: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`

export const DarkBaseline = createGlobalStyle`
html, body, :root {
  background-color: #303030;
  color: #fff;

  ${baseStyles}
}
`

export const LightBaseline = createGlobalStyle`
html, body, :root {
  background-color: #fafafa;
  color: rgba(0, 0, 0, 0.87);

  ${baseStyles}
}
`
