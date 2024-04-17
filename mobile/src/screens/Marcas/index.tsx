import { ImageBackground, Text } from "react-native"
import { styles } from "./styles"


export const Marcas = () => {
    return (
        <ImageBackground
            style={[styles.safe, {overflow: 'hidden' }]}
            source={require('../../assets/images/marcas.png')}
        >

        </ImageBackground>
    )
}