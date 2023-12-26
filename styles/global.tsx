import { createGlobalStyle } from "styled-components";
import { mobile, tablet } from "Constants/Devices";

export const headerHeight = 72;
export const mtDesktop = 64;
export const mtMobile = 18;
export const mobileHeaderHeight = 74;
export const desktopPaddings = 140;
export const tabletPaddings = 32;

const GlobalStyles = createGlobalStyle`
  :root {
    --blue: #ADBCFF;
    --purple-light: #F0ADFF;
    --purple: #9E52AF;
    --purple-dark: #C7ADFF;
    --purple-darkest: #5D3068;
    --black: #3a3a3a;
    --white: #ffffff;
    --soft-white: #FAF3ED;
    --bgColor: #0B0812;
    --paddings: ${desktopPaddings}px;
    --marginTop: ${mtDesktop}px;
    --marginBottom: ${mtDesktop}px;
  }

  *,
  *::after,
  *::before {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    -webkit-tap-highlight-color: transparent;
    user-select: none;
  }

  html {
    font-size: 16px;
  }

  ::-webkit-scrollbar {
	  width: 0;
  }

  a {
    text-decoration: none;
    color: #fff;
  }

  html,
  button,
  input {
    font-family: "Poppins", sans-serif;
  }

  @media only screen and (max-width: ${tablet}px) {
    :root {
      --paddings: ${tabletPaddings}px;
      --marginTop: ${mtMobile}px;
    }
  }

  @media only screen and (max-width: ${mobile}px) {
    :root {
      --header-height: ${mobileHeaderHeight}px;
    }
  }
`;

export default GlobalStyles;
