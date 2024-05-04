import React, { useEffect, useState } from 'react'
import { ICarros, IMarcas, IModelos, IUsuario } from '@renderer/model'
import Context from '@renderer/context'
import { carrosService } from '@renderer/services/common/carrosService'
import { modelosService } from '@renderer/services/common/modelosService'
import { marcaService } from '@renderer/services/common/marcasService'

type Props = {
  children: React.ReactNode
}

const DBSTORE = '@AracajuCarros:CarrosBG'

export const AracajuCarrosProvider: React.FC<Props> = ({ children }: Props) => {
  const [usuario, setUsuario] = useState<IUsuario>({} as IUsuario)
  const [carros, setCarros] = useState<ICarros[]>([])
  const [modelos, setModelos] = useState<IModelos[]>([])
  const [marcas, setMarcas] = useState<IMarcas[]>([])

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
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
    marcaService(setMarcas)
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
