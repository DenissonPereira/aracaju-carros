import { createStackNavigator } from "@react-navigation/stack"
import { CorollaCross, CorollaGLi, CorollaHybrid, GRCorolla, HilluxGR, HilluxSTD, Home, RAV4, SW4SRX, Yaris } from "../screens";
import { Login } from "../screens/Login";



const Stack = createStackNavigator();

export default function StackRoutes() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="home"
                component={Home}
                options={{ headerShown: false }}
            />

            <Stack.Screen
                name="1"
                component={CorollaGLi}
                options={{
                    headerShown: true,
                    headerTitle: 'Toyota Corolla GLi'
                }}
            />

            <Stack.Screen
                name="2"
                component={HilluxSTD}
                options={{
                    headerShown: true,
                    headerTitle: 'Toyota Hillux STD'
                }}
            />

            <Stack.Screen
                name="3"
                component={SW4SRX}
                options={{
                    headerShown: true,
                    headerTitle: 'Toyota SW4 SRX'
                }}
            />

            <Stack.Screen
                name="4"
                component={Yaris}
                options={{
                    headerShown: true,
                    headerTitle: 'Toyota Yaris'
                }}
            />

            <Stack.Screen
                name="5"
                component={CorollaCross}
                options={{
                    headerShown: true,
                    headerTitle: 'Toyota Corolla Cross'
                }}
            />

            <Stack.Screen
                name="6"
                component={GRCorolla}
                options={{
                    headerShown: true,
                    headerTitle: 'Toyota Corolla GR'
                }}
            />

            <Stack.Screen
                name="7"
                component={HilluxGR}
                options={{
                    headerShown: true,
                    headerTitle: 'Toyota Hillux GR'
                }}
            />

            <Stack.Screen
                name="8"
                component={CorollaHybrid}
                options={{
                    headerShown: true,
                    headerTitle: 'Toyota Corolla Hybrid'
                }}
            />

            <Stack.Screen
                name="9"
                component={RAV4}
                options={{
                    headerShown: true,
                    headerTitle: 'Toyota RAV4'
                }}
            />

            <Stack.Screen
                name="login"
                component={Login}
                options={{
                    headerShown: true,
                    headerTitle: 'Toyota RAV4'
                }}
            />
        </Stack.Navigator>
    )
}