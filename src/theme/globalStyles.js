import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0px;
        padding: 0px;
        scrollbar-width: none;
    -ms-overflow-style: none;

        ::-webkit-scrollbar {
         display: none;
        }
    }
    
body {
    font-family: 'Montserrat', sans-serif;
}
`;

export default GlobalStyle;
