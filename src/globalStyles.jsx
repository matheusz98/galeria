import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        text-decoration: none;
        list-style: none;
        border: none;
        outline: none;
        font-family: 'Poppins', sans-serif;
        scroll-behavior: smooth;

        ::-webkit-scrollbar{
            width: 0.6rem;  
            background: #b14bb1;
        }

        ::-webkit-scrollbar-thumb{
            background: #493749;
            border-radius: .5rem;
        }
    }

    body {
        background: #1b1b1b;
    }

    img {
        max-width: 100%;
    }
`;

export default GlobalStyle;
