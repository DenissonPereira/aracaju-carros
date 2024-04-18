import { databaseConnection } from "../../database";
import { IMarcas } from "../../model";



export async function marcasService() {
    try {
        const marcasGeral = await databaseConnection.raw<IMarcas[]>(
            `
            SELECT
                marcas.id AS id,
                marcas.nome AS nome,
                marcas.quantidade AS quantidade,
                marcas.imagem AS imagem
            FROM
                marcas
            `
        );
        //@ts-ignore
        const marcas: IMarcas[] = marcasGeral[0];
        if (marcas && marcas.length > 0) return {status: true, marcas: marcas};

        return {status: false};
    } catch (error) {
        console.log(error);
    }
}

