import { ICarros } from "../../model"
import { connectServer } from ".."

export async function carrosService(setCarros: (carros: ICarros[]) => void) {
    try {
        const { data } = await connectServer('/carros')
        if (data?.status) {
            setCarros(data.carros)
            return data.carros
        }
    } catch (error) {
        console.log('Erro ao chamar API: ', error)
        return error
    }
}