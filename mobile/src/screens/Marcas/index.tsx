import { ImageBackground, Text } from "react-native"
import { styles } from "./styles"
import { Empresas } from "../../components"


export const Marcas = () => {
    return (
        <ImageBackground
            style={[styles.safe, {overflow: 'hidden' }]}
            source={require('../../assets/images/marcas.png')}
        >
            <Empresas />
        </ImageBackground>
    )
}