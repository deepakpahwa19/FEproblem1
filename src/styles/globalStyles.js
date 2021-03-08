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

  @import url('https://fonts.googleapis.com/css?family=Montserrat:400,600&display=swap');;

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
    font-size: 2rem;
    font-family: 'Montserrat', sans-serif;
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

export const Button = styled.button`
    border-radius: 4px;
    background: ${({ primary }) => (primary ? '#4B59F7' : '#0467FB')};
    white-space: nowrap;
    padding: ${({ big }) => (big ? '12px 64px' : '10px 20px')};
    color: #fff;
    font-size: ${({ fontBig }) => (fontBig ? '20px' : '16px')};
    outline: none;
    border: none;
    cursor: pointer;

    &:hover {
        transition: all 0.3s ease-out;
        /* background: #fff; */
        background: ${({ primary }) => (primary ? '#0467FB' : '#4B59F7')};
    }

    @media screen and (max-width: 960px) {
        width: 100%;
    }
`;
