import { serviceCarros } from "../../services";
import { Request, Response } from "express";

export async function carrosGeral(req: Request, res: Response) {
    try {
        const resultCarros = await serviceCarros();
        if (resultCarros) {
            const {status, carros} = resultCarros;
            if (status && carros) return res.json({status: status, carros: carros}).status(200);
            if(!status && !carros) return res.json({status: status}).status(200);
        }
    } catch (error) {
        console.log(error);
        return res.status(500).json({ status: "error", message: "Erro interno do servidor." });
    }
}
