import {createGlobalStyle} from "styled-components"
//all of your global styling
// we can even access the themes via props in the same way we did in our styled component for example: color: ${({theme})=>theme.colors.body}
// good for light nad dark themes
const GlobalStyles = createGlobalStyle`
    h1 {
        font-size:5rem;
        text-decoration:underline;
    }


`

export default GlobalStyles