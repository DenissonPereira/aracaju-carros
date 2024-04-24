import { databaseConnection } from "../../database";
import { IUsuario } from "../../model";


export async function serviceLogin(email: string, senha: string) {
    try {
        const usuarios = await databaseConnection<IUsuario>('usuarios')
            .select('*')
            .where({'email': email})

        const usuario = usuarios[0];
        if (usuario && usuario.senha === senha) {
            //@ts-ignore
            usuario.senha = undefined;
            return {status: true, msg: 'Logado com sucesso!', usuario: usuario};
        } else if (usuario && usuario.senha !== senha) {
            return {status: false, msg: 'Senha inválida!'};
        }
        
        return {status: false, msg: 'Usuário não encontrado!'}
    } catch (error) {
        console.log(error);
    }
}