import { AracajuCarrosProvider } from './provider'
import { RoutesApp } from './routes'

function App(): JSX.Element {
  return (
    <AracajuCarrosProvider>
      <RoutesApp />
    </AracajuCarrosProvider>
  )
}

export default App
