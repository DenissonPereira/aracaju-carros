import { View, Text } from "react-native";
import { styles } from "./styles";
import { useAracajuCarrosContext } from "../../context";



export const Home = () => {

    const { carros } = useAracajuCarrosContext();

    return (
        <View style={styles.view}>
            {carros.map((item) => (
                <View key={item.id}>
                    <Text>{item.marca}</Text>
                </View>
            ))}
        </View>
    );
}