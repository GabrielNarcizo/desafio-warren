import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  text-decoration: none;
  list-style: none;
  border: none;
  font-family: 'Roboto', sans-serif;
}

  sub, sup {
    font-size: inherit;
    vertical-align: sub;
    line-height: normal;
    top: 0;
    bottom: 0;
  }
`;

export default GlobalStyle;
