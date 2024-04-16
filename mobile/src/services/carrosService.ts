import { api } from ".";
import { ICarros } from "../model";

export async function loadCarros(setCarros: (carros: ICarros[]) => void) {
    try {
        const {data} = await api.get('/carros');
        if(data?.status) {
            setCarros(data?.carros);
            return data.carros;
        }
        return data;
    } catch (error) {
        console.log('Erro ao chamar API:', error);
    }
}