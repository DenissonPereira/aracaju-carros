import { IModelos } from "../../model"
import { connectServer } from ".."

export async function modelosService(setModelos: (modelos: IModelos[]) => void) {
    try {
        const { data } = await connectServer('/modelos')
        if (data?.status) {
            setModelos(data.modelos)
            return data.modelos
        }
    } catch(error) {
        console.log('Erro ao chamar API: ', error)
        return error
    }
}