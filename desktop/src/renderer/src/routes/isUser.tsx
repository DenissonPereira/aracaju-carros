import { Home } from '@renderer/screens'
import { Route, Routes } from 'react-router-dom'

export function IsUser(): JSX.Element {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="*" element={<Home />} />
    </Routes>
  )
}
