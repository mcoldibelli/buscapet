import LandingPage from "./pages/LandingPage/LandingPage"
import './index.css'
import { ThemeProvider } from "styled-components"
import { theme } from "./styles/theme"

function App() {
  return (
    <ThemeProvider theme={theme}>
      <LandingPage/>
    </ThemeProvider>
  )
}

export default App
