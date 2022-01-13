import { ThemeProvider } from "styled-components"
import GlobalStyles from "./components/styles/Global"
//import theme provider to enable themes like a context provider, it takes in a theme prop we provide this js object with styles in key value pairs or whatever
//see global file for global styles we import it and it just works
import { Container } from "./components/styles/Container.style"

import Header from "./components/Header"

//you can put this theme OBJECT in a separate file if you wish (it may be better)
const theme = {
  colors:{
    header:'#ebfbff',
    body:'#fff',
    footer:'#003333'
  }
}

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Container>
        <h1>Hubble</h1>
      </Container>
      <Header />
    </ThemeProvider>
  )
}


