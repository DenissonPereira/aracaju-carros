import React, { createContext, useContext, useEffect, useState } from "react";
import { ICarros, IModelos } from "../model"
import { loadCarros } from "../services/carrosService";
import { loadModelos } from "../services/modelosService";


type CarroProps = {
    carros: ICarros[];
    setCarros(carros: ICarros[]): void;
    modelos: IModelos[];
    setModelos(modelos: IModelos[]): void;
}

type Props = {
    children: React.ReactNode;
}

const Context = createContext<CarroProps>({} as CarroProps);

export const AracajuCarrosProvider: React.FC<Props> = ({children}: Props) => {
    const [carros, setCarros] = useState<ICarros[]>([]);
    const [modelos, setModelos] = useState<IModelos[]>([]);

    useEffect(() => {
        loadCarros(setCarros);
        loadModelos(setModelos);

    }, []);

    const values = { carros, setCarros, modelos, setModelos }

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