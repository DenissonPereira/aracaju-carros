import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import StackRoutes from './stack.routes';
import { Feather, FontAwesome, MaterialIcons, FontAwesome5 } from '@expo/vector-icons'
import { About, Categorias, Comentarios, Localizacao } from '../screens';
import { View } from 'react-native';

const Tab = createBottomTabNavigator();

export const TabRoutes = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarLabel: () => null,
                tabBarStyle: {
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: 100,
                },
                tabBarActiveTintColor: 'red',
            }}
        >
            <Tab.Screen
                name='homeTab'
                component={StackRoutes}
                options={{
                    tabBarIcon: ({ color, size }) => <Feather name='home' color={color} size={size} />
                }}
            />

            <Tab.Screen 
                name='comentariosTab'
                component={Comentarios}
                options={{
                    tabBarIcon: ({ color, size }) => <FontAwesome name='comments' color={color} size={size} />
                }}
            />
            
            <Tab.Screen 
                name='categoriasTab'
                component={Categorias}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <View style={{
                            backgroundColor: 'red',
                            borderRadius: 50,
                            padding: 10,
                            overflow: 'hidden'
                        }}>
                            <MaterialIcons name='category' color={'white'} size={size} />
                        </View>
                    )
                }}
            />

            <Tab.Screen 
                name='localizacaoTab'
                component={Localizacao}
                options={{
                    tabBarIcon: ({ color, size }) => <FontAwesome5 name='map-marked-alt' color={color} size={size} />
                }}
            />
            
            <Tab.Screen 
                name='aboutTab'
                component={About}
                options={{
                    tabBarIcon: ({ color, size }) => <Feather name='help-circle' color={color} size={size} />
                }}
            />

        </Tab.Navigator>
    )
}