import { ImageBackground, Text, TouchableOpacity, View } from "react-native"
import { styles } from "./styles"
import { logout } from "../../services/logout"
import { useRoutes } from "../../hooks/useRoutes";
import { useAracajuCarrosContext } from "../../context"; 
import { IUsuario } from "../../model";

export const About = () => {
    const { navigate } = useRoutes(); 
    const { setUsuario } = useAracajuCarrosContext(); 

    const handleSair = async () => {
        await logout(); 
        setUsuario({} as IUsuario);
        navigate('login'); 
    }

    return (
        <ImageBackground
            style={[styles.safe, {overflow: 'hidden'}]}
            source={require('../../assets/images/sobre.png')}
        >
            <View style={styles.view}>
                <TouchableOpacity onPress={handleSair}>
                    <Text>Sair</Text>
                </TouchableOpacity>
            </View>
        </ImageBackground>
    )
}
