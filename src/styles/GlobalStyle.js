import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`${(props) => `
  // ---------- GENERAL ----------- //

  html, body {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    background-color: white;
  }

  body {
    color: ${props.theme.text.color};
    font-family: ${props.theme.text.fontFamily};
    font-size: ${props.theme.text.fontSize};
    line-height: ${props.theme.text.lineHeight};
    font-weight: 400;
    -webkit-font-smoothing: antialiased;
    overflow-x: auto;
  }

  // ---------- TITLES ----------- //

  h1, h2, h3, h4, h5, b {
    font-family: ${props.theme.title.fontFamily};
    font-weight: 600;
    // color: ${props.theme.title.color};
  }

  // ---------- LINKS ----------- //

  a {
    color: ${props.theme.palette.secondary[0]};
    font-weight: 500;
    text-decoration: underline;
  }

  // ---------- FONTS ----------- //

  // Segoe UI for the titles
  @font-face {
    font-family: Segoe UI;
    src: local(Segoe UI Regular),
      url(/fonts/Segoe UI.ttf) format("truetype");
    font-weight: 400;
    font-style: normal;
    font-stretch: normal;
  }
  @font-face {
    font-family: Segoe UI;
    src: local(Segoe UI Bold),
      url(/fonts/Segoe UI Bold.ttf) format("truetype");
    font-weight: 600;
    font-style: normal;
    font-stretch: normal;
  }

  // MaterialIcons for the Icons
  @font-face {
    font-family: 'Material Icons';
    font-style: normal;
    font-weight: 400;
    src: url(/fonts/MaterialIcons-Regular.ttf) format('truetype');
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
  }
`}`

export default GlobalStyle
