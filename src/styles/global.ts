import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: ${props => props.theme.colors.body};
    color: ${props => props.theme.colors.primary};
    font: 400 16px PT Mono, sans-serif, monospace;
  }
`
