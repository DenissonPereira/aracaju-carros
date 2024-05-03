import { Outra } from '@renderer/screens/outra'
import { Segunda } from '@renderer/screens/segunda'
import { Route, Routes } from 'react-router-dom'

export function Teste(): JSX.Element {
  return (
    <Routes>
      <Route path="/" element={<Segunda />} />
      <Route path="/outra" element={<Outra />} />
    </Routes>
  )
}
