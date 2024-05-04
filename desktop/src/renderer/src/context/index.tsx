import { createContext, useContext } from 'react'
import { ICarros, IMarcas, IModelos, IUsuario } from '@renderer/model'

type CarroProps = {
  carros: ICarros[]
  setCarros(carros: ICarros[]): void
  modelos: IModelos[]
  setModelos(modelos: IModelos[]): void
  usuario: IUsuario
  setUsuario(usuario: IUsuario): void
  marcas: IMarcas[]
  setMarcas(marcas: IMarcas[]): void
}

const Context = createContext<CarroProps>({} as CarroProps)

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const useAracajuCarrosContext = () => {
  const carrosConstante = useContext(Context)
  return carrosConstante
}

export default Context
