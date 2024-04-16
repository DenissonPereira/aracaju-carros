import { databaseConnection } from "../../database";
import { IModelos } from "../../model";


export async function serviceModelos() {
    try {
        const modelosGeral = await databaseConnection.raw<IModelos[]>(
            `
            SELECT
                modelos.id AS id,
                modelos.modelo AS modelo
            FROM
                modelos
            `
        );
        //@ts-ignore
        const modelos: IModelos[] = modelosGeral[0];
        if (modelos && modelos.length > 0) return {status: true, modelos: modelos};
        return {status: false};
    } catch (error) {
        console.log(error);
    }
}