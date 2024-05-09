import { IMarcas } from "../../model";
import { connectServer } from ".."

export async function marcasService(setMarcas: (marcas: IMarcas[]) => void) {
    try {
        const { data } = await connectServer('/marcas')
        if (data?.status) {
            setMarcas(data.marcas)
            return data.marcas
        }
    } catch(error) {
        console.log('Erro ao chamar API: ', error)
        return error
    }
}