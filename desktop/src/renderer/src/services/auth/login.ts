import { IUsuario } from '@renderer/model'
import { connectServer } from '../connection'

const DBSTORE = '@AracajuCarros:CarrosBG'

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export async function loginService(
  email: string,
  senha: string,
  setUsuario: (usuario: IUsuario) => void
) {
  try {
    const { data } = await connectServer.post('/login', { email, senha })
    if (!data.status) {
      return data?.msg
    } else {
      await localStorage.setItem(DBSTORE, JSON.stringify(data.usuario))
      setUsuario(data.usuario)
      return data
    }
  } catch (error) {
    console.log(error)
    return
  }
}
