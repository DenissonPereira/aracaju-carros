import { api } from ".";
import { IMarcas } from "../model";



export async function loadMarcas(setMarcas: (marcas: IMarcas[]) => void) {
    try {
        const { data } = await api.get('/marcas');
        if (data?.status) {
            setMarcas(data?.marcas);
            return data.marcas;
        }
    } catch (error) {
        console.log("Erro ao chamar API:", error);
    }
}