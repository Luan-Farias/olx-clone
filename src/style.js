import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    *{
        box-sizing: border-box;
    }
    body{
        font-size: 14px;
        font-family: 'Open Sans', sans-serif;
        background-color: #EEE;
        margin: 0;
        text-rendering: optimizeLegibility;
        -webkit-font-smoothing: antialiased;
    }
    html, body, #root{
        height: 100%;
    }
`;