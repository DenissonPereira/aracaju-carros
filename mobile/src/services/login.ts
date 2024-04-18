import AsyncStorage from "@react-native-async-storage/async-storage";
import { api } from ".";
import { IUsuario } from "../model";
import { isAxiosError } from "axios";

const DBSTORE = '@AracajuCarros:CarrosBG';

export async function login(email: string, senha: string, setUsuario: (usuario: IUsuario) => void) {
    try {
        const { data } = await api.post('/login', {
            email,
            senha
        })
        if (data.status) {
            await AsyncStorage.setItem(DBSTORE, JSON.stringify(data.usuario))
            setUsuario(data.usuario);
            return data
        }
        return data
    } catch (error) {
        if(isAxiosError(error)) {
            console.log(error);
        }
    }
}