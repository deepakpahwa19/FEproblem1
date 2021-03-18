import styled, { createGlobalStyle } from 'styled-components';

// const GlobalStyle = createGlobalStyle`
//     * {
//         box-sizing: border-box;
//         margin: 0;
//         padding: 0;
//         font-family: 'Source Sans Pro', sans-serif;
//     }

// `;

const GlobalStyles = createGlobalStyle`

  *,
  *::after,
  *::before {
    margin: 0px;
    padding: 0px;
    box-sizing: inherit;
  }

  html {
    font-size: 62.5%;
  }

  body {
    box-sizing: border-box;
    font-size: 1.5rem;
    font-family: 'Montserrat', sans-serif;
  }

  h1 {
    font-size: 3.2rem;
  }

  h2 {
    font-size: 2.4rem;
  }
  
  h3 {
    font-size: 1.8rem;
  }

  h4 {
    font-size: 1.6rem;
  }

  h5 {
    font-size: 1.3rem
  }

  h6 {
    font-size: 1.2rem
  }

  h1, h2, h3, h4, h5, h6 {
    text-align: center;
    margin: 10px auto;
  }


`;

export default GlobalStyles;

export const Container = styled.div`
    z-index: 1;
    width: 100%;
    max-width: 1300px;
    margin-right: auto;
    margin-left: auto;
    padding-right: 50px;
    padding-left: 50px;

    @media screen and (max-width: 991px) {
        padding-right: 30px;
        padding-left: 30px;
    }
`;
