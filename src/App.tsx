import LandingPage from "./pages/LandingPage/LandingPage"
import './index.css'
import { ThemeProvider } from "styled-components"
import { theme } from "./styles/theme"
import { Analytics } from "@vercel/analytics/react"

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Analytics/>
      <LandingPage/>
    </ThemeProvider>
  )
}

export default App
