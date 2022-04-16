import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
@font-face {
    font-family: 'Libre Baskerville';
    font-style: normal;
    font-weight: 400;
    src: url(https://fonts.gstatic.com/s/librebaskerville/v13/kmKnZrc3Hgbbcjq75U4uslyuy4kn0qNXaxMICA.woff2) format('woff2');
    unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
  }
  /* latin */
  @font-face {
    font-family: 'Libre Baskerville';
    font-style: normal;
    font-weight: 400;
    src: url(https://fonts.gstatic.com/s/librebaskerville/v13/kmKnZrc3Hgbbcjq75U4uslyuy4kn0qNZaxM.woff2) format('woff2');
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
  }
  /* latin-ext */
  @font-face {
    font-family: 'Libre Baskerville';
    font-style: normal;
    font-weight: 700;
    src: url(https://fonts.gstatic.com/s/librebaskerville/v13/kmKiZrc3Hgbbcjq75U4uslyuy4kn0qviTgY5KcCsww.woff2) format('woff2');
    unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
  }
  /* latin */
  @font-face {
    font-family: 'Libre Baskerville';
    font-style: normal;
    font-weight: 700;
    src: url(https://fonts.gstatic.com/s/librebaskerville/v13/kmKiZrc3Hgbbcjq75U4uslyuy4kn0qviTgY3KcA.woff2) format('woff2');
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
  }
  body {
    font-family: "Libre Baskerville";
    color: #444;
  }
  
  
`;

export default GlobalStyle