import { NavigationContainer } from "@react-navigation/native";
import DrawerRoutes from "./drawer.routes";
import { useAracajuCarrosContext } from "../context";
import { Login } from "../screens/Login";


export default function Routes() {

    const { usuario } = useAracajuCarrosContext();

    return (
        <NavigationContainer>
            {usuario?.id ? <DrawerRoutes /> : <Login />}
        </NavigationContainer>
    )
}