import React, { useEffect, useState } from 'react'
import { IUsuario, ICarros, IModelos, IMarcas } from '../model'
import { DBSTORE } from '../config'
import { carrosService, marcasService, modelosService } from '../services'
import Context from '../context'

type Props = {
  children: React.ReactNode
}

export const AracajuCarrosProvider: React.FC<Props> = ({ children }: Props) => {
  const [usuario, setUsuario] = useState<IUsuario>({} as IUsuario)
  const [carros, setCarros] = useState<ICarros[]>([])
  const [modelos, setModelos] = useState<IModelos[]>([])
  const [marcas, setMarcas] = useState<IMarcas[]>([])

  useEffect(() => {
    async function logar() {
      const usuarioDB = await localStorage.getItem(DBSTORE)
      const usuario: IUsuario = usuarioDB ? await JSON.parse(usuarioDB) : undefined
      if (usuario?.id) {
        setUsuario(usuario)
        return
      }
    }
    logar()
    carrosService(setCarros)
    modelosService(setModelos)
    marcasService(setMarcas)
  }, [])

  const values = {
    usuario,
    setUsuario,
    carros,
    setCarros,
    modelos,
    setModelos,
    marcas,
    setMarcas
  }

  return <Context.Provider value={values}>{children}</Context.Provider>
}