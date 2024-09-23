import './index.css'
import { ThemeProvider } from "styled-components"
import { theme } from "./styles/theme"
import RouterContainer from "./routes/RouterContainer"

function App() {
  return (
    <ThemeProvider theme={theme}>
      <RouterContainer/>
    </ThemeProvider>
  )
}

export default App
