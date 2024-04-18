import { Request, Response } from 'express';
import { marcasService } from '../../services';

export async function marcasGeral(req: Request, res: Response) {
    try {
        const resultMarcas = await marcasService();
        if (resultMarcas) {
            const {status, marcas} = resultMarcas;
            if(status && marcas) return res.json({status: status, marcas: marcas}).status(200);
            if(!status && !marcas) return res.json({status: status}).status(200);
        }
    } catch (error) {
        console.log(error);
        return res.status(500).json({ status: "error", msg: "Erro no servidor!" });
    }
}