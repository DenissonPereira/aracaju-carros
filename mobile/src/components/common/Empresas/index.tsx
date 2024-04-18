import { Image, ScrollView, Text, View } from "react-native";
import { useAracajuCarrosContext } from "../../../context";
import { styles } from "./styles";


export const Empresas = () => {

    const { marcas } = useAracajuCarrosContext();

    return (
        <View style={styles.view}>
            <Text style={styles.textEmpresas}>Empresas</Text>
            <View style={styles.viewScroll}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    {marcas.map((item) => (
                        <View key={item.id} style={styles.viewImagens}>
                            <Image source={{ uri: item.imagem }} style={styles.imagem} />
                            <View>
                                <Text style={styles.nome}>{item.nome}</Text>
                                <View style={styles.row}>
                                    <Text>Quantidade disponível: </Text>
                                    <Text style={item.quantidade == '0' ? styles.naoTemQuantidade : styles.temQuantidade}>{item.quantidade}</Text>
                                </View>
                            </View>
                        </View>
                    ))}
                </ScrollView>
            </View>
        </View>
    );
}