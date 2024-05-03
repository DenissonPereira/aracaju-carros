import { BrowserRouter } from 'react-router-dom'
import { IsUser } from './isUser'
import { useAracajuCarrosContext } from '@renderer/context'
import { NotUser } from './notUser'

export function RoutesApp(): JSX.Element {
  const { usuario } = useAracajuCarrosContext()
  return <BrowserRouter>{usuario.id ? <IsUser /> : <NotUser />}</BrowserRouter>
}
