import './index.css'
import { ThemeProvider } from "styled-components"
import { theme } from "./styles/theme"
import { Analytics } from "@vercel/analytics/react"
import RouterContainer from "./routes/RouterContainer"

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Analytics/>
      <RouterContainer/>
    </ThemeProvider>
  )
}

export default App
