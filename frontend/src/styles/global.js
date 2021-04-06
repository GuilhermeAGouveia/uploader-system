import { createGlobalStyle } from "styled-components"
import "react-circular-progressbar/dist/styles.css"
export default createGlobalStyle`
    * {
        margin:0;
        padding:0;
        outline:0;
        box-sizing: border-box;
    }

    html, body, #root {
   
        background: #7159c1;
        height: 100%;
        font-family: sans-serif;
        font-size: 14px;
    }
`

