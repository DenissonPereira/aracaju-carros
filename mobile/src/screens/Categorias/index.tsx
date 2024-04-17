import { Text, View } from "react-native"
import { useAracajuCarrosContext } from "../../context"
import { Cabecario } from "../../components";
import { styles } from "./styles";


export const Categorias = () => {

    const { modelos } = useAracajuCarrosContext();

    return (
        <View style={styles.view}>
            <Cabecario />
        </View>
    )
}