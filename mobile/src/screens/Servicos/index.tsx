import { SafeAreaView, Text, ImageBackground, Image, View } from "react-native"
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { styles } from "./styles"


export const Servicos = () => {
    return (
        <ImageBackground
            style={[styles.safe, { overflow: 'hidden' }]}
            source={require('../../assets/images/servicos.png')}
        >
            <View style={styles.view}>
                <Image source={require('../..//assets/images/seguro.png')} style={styles.image} />
            </View>
            <View style={styles.textView}>
                <Text style={styles.text}>Serviços</Text>
            </View>
            <View style={styles.linha}>
                <View style={styles.container}>
                    <View><MaterialCommunityIcons name="car-door" size={20} /></View>
                    <Text>Funilaria</Text>
                </View>
                <View style={styles.container}>
                    <View><MaterialCommunityIcons name="car-wash" size={20} /></View>
                    <Text>Lavagem</Text>
                </View>
            </View>
            <View style={styles.linha}>
                <View style={styles.container}>
                    <View><MaterialCommunityIcons name="car-multiple" size={20} /></View>
                    <Text>Estética</Text>
                </View>
                <View style={styles.container}>
                    <View><MaterialCommunityIcons name="car-wrench" size={20} /></View>
                    <Text>Manutenção</Text>
                </View>
            </View>
        </ImageBackground>
    )
}