import { api } from ".";
import { IModelos } from "../model";


export  async function loadModelos(setModelos: (modelos: IModelos[]) => void) {
    try {
        const { data } = await api.get('/modelos');
        if (data?.status) {
            setModelos(data?.modelos);
            return data.modelos;
        }
    } catch (error) {
        console.log('Erro ao chamar API:', error);
    }
}