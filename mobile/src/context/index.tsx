import React, { createContext, useContext, useEffect, useState } from "react";
import { ICarros } from "../model"
import { loadCarros } from "../services/carrosService";


type CarroProps = {
    carros: ICarros[];
    setCarros(carros: ICarros[]): void;
}

type Props = {
    children: React.ReactNode;
}

const Context = createContext<CarroProps>({} as CarroProps);

export const AracajuCarrosProvider: React.FC<Props> = ({children}: Props) => {
    const [carros, setCarros] = useState<ICarros[]>([]);

    useEffect(() => {
        loadCarros(setCarros);
    }, []);

    const values = { carros, setCarros }

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