import "bootstrap/dist/css/bootstrap-grid.min.css";
import "bootstrap/dist/css/bootstrap-reboot.min.css";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  html, body, #root{
    height: 100%;
    scroll-behavior: smooth !important;
    overflow-x: hidden;
  }
`;

export default GlobalStyle;
