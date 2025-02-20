import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
:root{
--black: #000000;
--blue-100: #0B60B0;
--blue-200: #40A2D8;
--gray: #F0EDCF;
}

body {
background: var(--black);
font-family: "Playfair Display";    
}

* {
margin: 0;
padding: 0;}


`;
