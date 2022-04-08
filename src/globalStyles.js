import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  html {
    font-size: 62.5%;
  }

  body {
    font-size: 1.6rem;
    font-family: 'Fira Sans', sans-serif;
    font-weight: 300;
    background-color: #fef9f8;
    color: #0d0d0d;
  }

  h1, h2, h3 {
    font-family: 'Cormorant Garamond', serif;
    font-weight: 700;
  }

  button {
    background-color: #ef9273;
  }
`;
