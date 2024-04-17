import { SafeAreaView, Text, ImageBackground } from "react-native"
import { styles } from "./styles"


export const Servicos = () => {
    return (
        <ImageBackground
            style={[styles.safe, { overflow: 'hidden' }]}
            source={require('../../assets/images/servicos.png')}
        >

        </ImageBackground>
    )
}