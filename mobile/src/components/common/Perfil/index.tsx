import { Image, Text, View } from "react-native";
import { useAracajuCarrosContext } from "../../../context";
import { styles } from "./styles";
import { Zocial, Fontisto, MaterialIcons } from '@expo/vector-icons'


export const Perfil = () => {

    const { usuario } = useAracajuCarrosContext();

    return (
        <View>
            <View style={styles.viewPerfil}>
                <Image source={{ uri: usuario.foto }} style={styles.imagem} />
                <View>
                    <Text style={styles.textNome}>{usuario.nome} {usuario.sobrenome}</Text>
                    <Text style={styles.telefone}>+55 {usuario.contato}</Text>
                    <Text style={styles.telefone}>{usuario.tipo}</Text>
                </View>
            </View>
            <View style={styles.viewDados}>
                <Text style={styles.textConta}>Minha conta</Text>
                <View style={styles.viewRow}>
                    <Zocial name="email" size={20} color={'#919192'} />
                    <Text>Email: {usuario.email}</Text>
                </View>
                <View style={styles.viewRow}>
                    <Fontisto name="map-marker-alt" size={20} color={'#919192'} />
                    <Text>Meu endereço: {usuario.endereco}</Text>
                </View>
                <View style={styles.viewRow}>
                    <MaterialIcons name="person-search" size={20} color={'#919192'} />
                    <Text>CPF: {usuario.cpf}</Text>
                </View>
            </View>
        </View>
    );
}