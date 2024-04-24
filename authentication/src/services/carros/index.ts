import { databaseConnection } from "../../database";
import { ICarros } from "../../model";

export async function serviceCarros() {
  try {
    const carrosGeral = await databaseConnection.raw<ICarros[]>(
      `
      SELECT
        carros.id AS id,
        carros.marca AS marca,
        carros.modelo AS modelo,
        carros.ano AS ano,
        carros.descricao AS descricao,
        carros.preco AS preco,
        carros.quilometragem AS quilometragem,
        carros.disponibilidade AS disponibilidade,
        carros.imagem1 AS imagem1,
        carros.imagem2 AS imagem2,
        carros.imagem3 AS imagem3,
        carros.imagem4 AS imagem4,
        carros.tipo AS tipo
      FROM
        carros
      JOIN
        modelos ON modelos.id = carros.tipo;
      `
    );
    //@ts-ignore
    const carros: ICarros[] = carrosGeral[0];
    if (carros && carros.length > 0) return {status: true, carros: carros};
    return {status: false};
  } catch (error) {
    console.log(error);
  }
}
