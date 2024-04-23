import { AracajuCarrosProvider } from "./context"
import { RoutesApp } from "./routes"

function App() {

  return (
    <AracajuCarrosProvider>
      <RoutesApp />
    </AracajuCarrosProvider>
  )
}

export default App
