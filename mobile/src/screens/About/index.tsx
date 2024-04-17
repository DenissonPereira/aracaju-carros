import { ImageBackground, Text } from "react-native"
import { styles } from "./styles"


export const About = () => {
    return (
        <ImageBackground
            style={[styles.safe, {overflow: 'hidden'}]}
            source={require('../../assets/images/sobre.png')}
        >

        </ImageBackground>
    )
}