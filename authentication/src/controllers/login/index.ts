import { Request, Response, json } from "express";
import { serviceLogin } from "../../services";


export async function login(req: Request, res: Response) {
    const { email, senha } = req.body;

    if (!email || !senha) {
        return res.status(400).json({ msg: 'Email ou senha inválidos!' });
    }

    try {
        const resultadoLogin = await serviceLogin(email, senha);
        if(resultadoLogin) {
            const {status, usuario, msg} = resultadoLogin;
            if (status && usuario) {
                return res.json({msg: msg, usuario: usuario, status: status});
            } else {
                return res.json({ msg: msg, status: status});
            }
        }
    } catch (error) {
        return res.status(500).json({ msg: 'Erro interno no servidor!'});
    }
}