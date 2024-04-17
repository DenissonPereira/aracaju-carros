import { createStackNavigator } from "@react-navigation/stack"
import { CorollaCross, CorollaGLi, CorollaHybrid, GRCorolla, HilluxGR, HilluxSTD, Home, RAV4, SW4SRX, Yaris } from "../screens";



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
                options={{ headerShown: false }}
            />

            <Stack.Screen
                name="2"
                component={HilluxSTD}
                options={{ headerShown: false }}
            />

            <Stack.Screen
                name="3"
                component={SW4SRX}
                options={{ headerShown: false }}
            />

            <Stack.Screen
                name="4"
                component={Yaris}
                options={{ headerShown: false }}
            />

            <Stack.Screen
                name="5"
                component={CorollaCross}
                options={{ headerShown: false }}
            />

            <Stack.Screen
                name="6"
                component={GRCorolla}
                options={{ headerShown: false }}
            />

            <Stack.Screen
                name="7"
                component={HilluxGR}
                options={{ headerShown: false }}
            />

            <Stack.Screen
                name="8"
                component={CorollaHybrid}
                options={{ headerShown: false }}
            />

            <Stack.Screen
                name="9"
                component={RAV4}
                options={{ headerShown: false }}
            />

        </Stack.Navigator>
    )
}