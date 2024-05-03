import { BrowserRouter } from 'react-router-dom'
import { Teste } from './teste'

export function RoutesApp(): JSX.Element {
  return (
    <BrowserRouter>
      <Teste />
    </BrowserRouter>
  )
}
