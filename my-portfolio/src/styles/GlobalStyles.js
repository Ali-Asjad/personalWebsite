import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

  body {
    margin: 0;
    color: #333;
    scroll-behavior: smooth;
    background-color: rgba(40, 41, 63, 1);
    scroll-behavior: smooth;
  }
  
  * {
    box-sizing: border-box;
  }
  
  h1, h2 {
    margin: 0;
  }
  
  p {
    margin: 0 0 0.25rem;
    font-family: 'Roboto', sans-serif;
  }
  
  a {
    text-decoration: none;
    color: inherit;
  }
  
  button {
    cursor: pointer;
    border: none;
    padding: 0.5rem 1rem;
    margin: 0.5rem;
    border-radius: 5px;
    background-color: #333;
    color: white;
    font-size: 1rem;
  }
`;

export default GlobalStyle;
