import { createContext, useContext } from 'react'
import { IUsuario } from '@renderer/model'

type CarroProps = {
  usuario: IUsuario
  setUsuario(usuario: IUsuario): void
}

const Context = createContext<CarroProps>({} as CarroProps)

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const useAracajuCarrosContext = () => {
  const carrosConstante = useContext(Context)
  return carrosConstante
}

export default Context
