import { NavigationContainer } from "@react-navigation/native";
import { useAracajuCarrosContext } from "../context";
import { Login } from "../screens/Login";
import { TabRoutes } from "./tab.routes";


export default function Routes() {

    const { usuario } = useAracajuCarrosContext();

    return (
        <NavigationContainer>
            {usuario?.id ? <TabRoutes /> : <Login />}
        </NavigationContainer>
    )
}