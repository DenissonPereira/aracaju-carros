import { connectServer } from '..';
import { DBSTORE } from '../../config';
import { IUsuario } from '../../model';

export async function loginService(email: string, senha: string, setUsuario: (usuario: IUsuario) => void ) {
    try {
        const { data } = await connectServer.post('/login', {
            email, senha
        });
        if (!data.status) return data?.msg;
        else {
            await localStorage.setItem(DBSTORE, JSON.stringify(data.usuario));
            setUsuario(data.usuario);
            return data;
        }
    } catch (error) {
        console.log(error);
        return;
    }
}