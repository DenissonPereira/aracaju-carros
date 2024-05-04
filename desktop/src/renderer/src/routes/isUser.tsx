import { Discover, Home, Perfil } from '@renderer/screens'
import { Route, Routes } from 'react-router-dom'

export function IsUser(): JSX.Element {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/perfil" element={<Perfil />} />
      <Route path="/discover" element={<Discover />} />

      <Route path="*" element={<Home />} />
    </Routes>
  )
}