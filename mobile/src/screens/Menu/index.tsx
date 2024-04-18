import { ImageBackground, Text, TouchableOpacity, View } from "react-native"
import { styles } from "./styles"
import { logout } from "../../services/logout"
import { useRoutes } from "../../hooks/useRoutes";
import { useAracajuCarrosContext } from "../../context"; 
import { IUsuario } from "../../model";
import { Perfil } from "../../components";

export const Menu = () => {
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
                <Perfil />
                <View style={styles.viewBotao}>
                    <TouchableOpacity onPress={handleSair} style={styles.botao}>
                        <Text style={styles.textBotao}>Sair</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ImageBackground>
    )
}
