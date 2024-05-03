import { Login } from '@renderer/screens'
import { Route, Routes } from 'react-router-dom'

export function NotUser(): JSX.Element {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
    </Routes>
  )
}
