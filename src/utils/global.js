import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    *,
    *::after,
    *::before {
        outline:0;
        box-sizing: border-box;
        padding: 0;
        margin: 0;
        font-family: 'Encode Sans Expanded', sans-serif;
    }
`;