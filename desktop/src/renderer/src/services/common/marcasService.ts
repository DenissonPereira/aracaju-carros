import { IMarcas } from '@renderer/model'
import { connectServer } from '../connection'

// eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/explicit-function-return-type
export async function marcaService(setMarcas: (marcas: IMarcas[]) => void) {
  try {
    const { data } = await connectServer.get('/marcas')
    if (data?.status) {
      setMarcas(data?.marcas)
      return data.marcas
    }
  } catch (error) {
    console.log('Erro ao chamar API: ', error)
    return error
  }
}
