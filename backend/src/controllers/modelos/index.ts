import { Request, Response } from 'express'
import { serviceModelos } from '../../services';

export async function modelosGeral(req: Request, res: Response) {
    try {
        const resultModelos = await serviceModelos();
        if (resultModelos) {
            const {status, modelos} = resultModelos;
            if (status && modelos) return res.json({status: status, modelos: modelos}).status(200);
            if(!status && !modelos) return res.json({status: status}).status(200);
        }
    } catch (error) {
        console.log(error);
        return res.status(500).json({ status: "error", message: "Erro interno do servidor." })
    }
}