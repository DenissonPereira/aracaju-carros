import { useAracajuCarrosContext } from "../context"
import { BrowserRouter } from 'react-router-dom';
import { IsUser } from "./IsUser";
import { NotUser } from "./NotUser";


export const RoutesApp = () => {

    const { usuario } = useAracajuCarrosContext();

    return (
        <BrowserRouter>
            {usuario.id ? <IsUser /> : <NotUser />}
        </BrowserRouter>
    )
}