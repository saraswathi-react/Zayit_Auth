import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`

  body {
    margin: 0;
    padding: 0;
    font-family:  'Poppins', sans-serif;
  }
  a, a:focus, a:hover {
  color: #e31e25;
  text-decoration: none;
}
`

export default GlobalStyle
