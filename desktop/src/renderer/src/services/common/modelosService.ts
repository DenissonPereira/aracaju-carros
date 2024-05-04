import { IModelos } from '@renderer/model'
import { connectServer } from '../connection'

// eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/explicit-function-return-type
export async function modelosService(setModelos: (modelos: IModelos[]) => void) {
  try {
    const { data } = await connectServer.get('/modelos')
    if (data?.status) {
      setModelos(data?.modelos)
      return data.modelos
    }
  } catch (error) {
    console.log('Erro ao chamar API: ', error)
  }
}
