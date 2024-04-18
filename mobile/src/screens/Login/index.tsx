import { KeyboardAvoidingView, Text, TextInput, View, TouchableOpacity, Alert } from "react-native"
import { styles } from "./styles"
import { useRef } from "react"
import { useAracajuCarrosContext } from "../../context"
import { login } from "../../services/login"


export const Login = () => {

    const { setUsuario } = useAracajuCarrosContext();

    const email = useRef<string>('');
    const senha = useRef<string>('');

    async function handleLogin() {
        const result = await login(email.current, senha.current, setUsuario)
        if(!result?.status) return Alert.alert('Erro', `${result?.msg}`)
        if(result?.usuario) {
           setUsuario(result?.usuario);
           return result;
        }
    }

    return(
        <KeyboardAvoidingView style={styles.text}>
            <View>
                <TextInput 
                    placeholder="Email"
                    onChangeText={(text) => email.current = text}
                />
                <TextInput 
                    placeholder="Senha"
                    onChangeText={(text) => senha.current = text}
                />

                <TouchableOpacity
                    onPress={handleLogin}
                >
                    <Text>Entrar</Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    )
}