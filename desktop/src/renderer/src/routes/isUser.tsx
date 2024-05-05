import { Develop, Discover, ErrorScreen, Home, Marcas, Perfil, Updates } from '@renderer/screens'
import { Route, Routes } from 'react-router-dom'

export function IsUser(): JSX.Element {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/perfil" element={<Perfil />} />
      <Route path="/discover" element={<Discover />} />
      <Route path="/marcas" element={<Marcas />} />
      <Route path="/updates" element={<Updates />} />
      <Route path="/develop" element={<Develop />} />

      <Route path="*" element={<ErrorScreen />} />
    </Routes>
  )
}
