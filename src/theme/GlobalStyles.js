import { createGlobalStyle} from "styled-components"
export const GlobalStyles = createGlobalStyle`

#root{
    background: ${({ theme }) => theme.body};
}
body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    font-family: Tahoma, Helvetica, Arial, Roboto, sans-serif;
    transition: all 0.50s linear;
}
.card{
    background: ${({ theme }) => theme.cardBackgroud};
    box-shadow: ${({ theme }) => theme.boxShadow};
}
.skillwrapper{
    background: ${({ theme }) => theme.skillBackground};
    box-shadow: ${({ theme }) => theme.boxShadow};
}
section#contact{
    background: ${({ theme }) => theme.contactBackground};
}
`