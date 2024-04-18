import React, { createContext, useContext, useEffect, useState } from "react";
import { ICarros, IModelos, IUsuario } from "../model"
import { loadCarros } from "../services/carrosService";
import { loadModelos } from "../services/modelosService";
import AsyncStorage from "@react-native-async-storage/async-storage";


type CarroProps = {
    carros: ICarros[];
    setCarros(carros: ICarros[]): void;
    modelos: IModelos[];
    setModelos(modelos: IModelos[]): void;
    usuario: IUsuario;
    setUsuario(usuario: IUsuario): void;
}

type Props = {
    children: React.ReactNode;
}

const DBSTORE = '@AracajuCarros:CarrosBG';
const Context = createContext<CarroProps>({} as CarroProps);

export const AracajuCarrosProvider: React.FC<Props> = ({children}: Props) => {
    const [usuario, setUsuario] = useState<IUsuario>({} as IUsuario);
    const [carros, setCarros] = useState<ICarros[]>([]);
    const [modelos, setModelos] = useState<IModelos[]>([]);

    useEffect(() => {

        async function logar() {
            const usuarioDB = await AsyncStorage.getItem(DBSTORE);
            const usuario: IUsuario =  usuarioDB ? await JSON.parse(usuarioDB) : undefined;
            if(usuario?.id) {
              setUsuario(usuario);
              return;
            }
        }
        logar();
        loadCarros(setCarros);
        loadModelos(setModelos);

    }, []);

    const values = { usuario, setUsuario, carros, setCarros, modelos, setModelos }

    return (
        <Context.Provider value={values}>
            {children}
        </Context.Provider>
    );
}

export const useAracajuCarrosContext = () => {
    const carrosConstante = useContext(Context);
    return carrosConstante;
}