import { useAracajuCarrosContext } from '@renderer/context'
import { IModelos } from '@renderer/model'
import { useState } from 'react'

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const UseMostrarCarros = () => {
  const { carros } = useAracajuCarrosContext()
  const [selectedItem, setSelectedItem] = useState<IModelos | number>(1)
  const [numero, setNumero] = useState<number>(1)
  const carrosFiltrados = carros.filter((carro) => carro.tipo == `${numero}`)

  // eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/explicit-function-return-type
  const mudarNumero = (item: IModelos) => {
    setSelectedItem(item)
    setNumero(item.id)
  }

  return { mudarNumero, selectedItem, carrosFiltrados, numero }
}
