import { ICarros } from '@renderer/model'
import { connectServer } from '../connection'

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export async function carrosService(setCarros: (carros: ICarros[]) => void) {
  try {
    const { data } = await connectServer.get('/carros')
    if (data?.status) {
      setCarros(data?.carros)
      return data.carros
    }
  } catch (error) {
    console.log('Erro ao chamar API: ', error)
    return error
  }
}
