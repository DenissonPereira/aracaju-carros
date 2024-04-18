import { KeyboardAvoidingView, Text, TextInput, View, TouchableOpacity, Alert, ImageBackground, Image } from "react-native"
import { styles } from "./styles"
import { useRef } from "react"
import { useAracajuCarrosContext } from "../../context"
import { login } from "../../services/login"
import { FontAwesome5 } from '@expo/vector-icons'


export const Login = () => {

    const { setUsuario } = useAracajuCarrosContext();

    const email = useRef<string>('');
    const senha = useRef<string>('');

    async function handleLogin() {
        const result = await login(email.current, senha.current, setUsuario)
        if (!result?.status) return Alert.alert('Erro', `${result?.msg}`)
        if (result?.usuario) {
            setUsuario(result?.usuario);
            return result;
        }
    }

    return (
        <ImageBackground
            style={[styles.safe, { overflow: 'hidden' }]}
            source={require('../../assets/images/login.png')}
        >
            <KeyboardAvoidingView style={styles.text}>
            <Image source={require('../../assets/images/bemvindo.png')} style={styles.image} />
                <View style={styles.view}>
                    <View style={styles.viewLogin}>
                        <FontAwesome5 name='user-alt' size={15} />
                        <TextInput
                            style={styles.input}
                            placeholder="Email"
                            onChangeText={(text) => email.current = text}
                        />
                    </View>
                    <View style={styles.viewLogin}>
                        <FontAwesome5 name='unlock' size={15} />
                        <TextInput
                            style={styles.input}
                            placeholder="Senha"
                            onChangeText={(text) => senha.current = text}
                        />
                    </View>
                    <TouchableOpacity
                        style={styles.esqueceu}
                    >
                        <Text style={styles.textEsqueceu}>Esqueceu a sua senha?</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={handleLogin}
                        style={styles.botao}
                    >
                        <Text style={styles.textButton}>Entrar</Text>
                    </TouchableOpacity>
                </View>
            </KeyboardAvoidingView>
        </ImageBackground>
    )
}