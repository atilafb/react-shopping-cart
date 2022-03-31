import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    background-color: ${props => props.theme.colors.gray}
  }
`
export default GlobalStyle;