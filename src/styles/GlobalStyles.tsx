import { createGlobalStyle } from 'styled-components'
export default createGlobalStyle`
  * {
    font-feature-settings: "liga" on, "calt" on;
    -webkit-font-feature-settings: "liga" on, "calt" on;
    -webkit-font-smoothing: antialiased;
    text-rendering: optimizeLegibility;
    font-family: 'Montserrat', sans-serif;
    text-decoration: none;
    list-style-type: none;
    outline: 0;
  }
  html {
    box-sizing: border-box;
    overflow-x: hidden;
    font-size: 16px;
  }
*,
*:before,
*:after {
  box-sizing: inherit;
}
body,
h1,
h2,
h3,
h4,
h5,
h6,
p,
ol,
ul {
  margin: 0;
  padding: 0;
  font-weight: normal;
}
ol,
ul {
  list-style: none;
}
`
