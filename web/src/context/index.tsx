import React, { createContext, useContext, useEffect, useState } from "react";
import { IUsuario } from "../model"


type CarroProps = {
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

    useEffect(() => {

        async function logar() {
            const usuarioDB = await localStorage.getItem(DBSTORE);
            const usuario: IUsuario =  usuarioDB ? await JSON.parse(usuarioDB) : undefined;
            if(usuario?.id) {
              setUsuario(usuario);
              return;
            }
        }
        logar();

    }, []);

    const values = { usuario, setUsuario }

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