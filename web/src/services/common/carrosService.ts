import { ICarros } from "../../model"
import { connectServer } from ".."
import { api_erro } from "../../core"

export async function carrosService(setCarros: (carros: ICarros[]) => void) {
    try {
        const { data } = await connectServer('/carros')
        if (data?.status) {
            setCarros(data.carros)
            return data.carros
        }
    } catch (error) {
        console.log(api_erro, error)
        return error
    }
}