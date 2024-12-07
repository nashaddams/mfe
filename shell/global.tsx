import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  html, body, #root {
    margin: 0;
    padding: 0;
    height: 100%;
    width: 100%;
    font-family: "Lucida Console", "Courier New", monospace;
    background-color: black;
    color: white;
  }

  #root {
    display: grid;
    grid-template-areas:
      "header header"
      "nav main";
    grid-template-columns: auto 1fr;
    grid-template-rows: auto 1fr;
    gap: 16px;
  }
`;

export const theme = {};
