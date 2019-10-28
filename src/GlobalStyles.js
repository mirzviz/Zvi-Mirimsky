import { createGlobalStyle } from "styled-components";

const Globals = createGlobalStyle`
    *{
    margin:0;
    padding:0;
    box-sizing:border-box;
    }
    body{
        font-size:16px;
    }
    h1{
        font-size:9vw;line-height:1.2;margin-bottom:0.5em
    }
    h2{
        font-size:2vw;margin-bottom:0.75em
    }
    h3{
        font-size:1.5vw;line-height:1;margin-bottom:1em
    }
    h4{
        font-size:1.2vw;line-height:1.2;margin-bottom:1.25em;font-weight:bold;
    }
    h5{
        font-size:1vw;margin-bottom:1.5em;font-weight:bold;
    }
    h6{
        font-size:1vw;font-weight:bold;
    }
    p{
        line-height:1.5;margin:0 0 1.5rem 0;
    }
`;

export default Globals;
