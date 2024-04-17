import { ImageBackground, ScrollView, Text, View, TouchableOpacity, Image } from "react-native"
import { styles } from "./styles"
import { useAracajuCarrosContext } from "../../../context"
import { useState } from "react";
import { IModelos } from "../../../model";
import { useRoutes } from "../../../hooks/useRoutes";


export const Cabecario = () => {

    const { navigate } = useRoutes();

    const { modelos, carros } = useAracajuCarrosContext();
    const [selectedItem, setSelectedItem] = useState<IModelos | null>(null);
    const [numero, setNumero] = useState<number>(1);

    const carrosPasseio = carros.filter((carro) => carro.tipo == `${numero}`);

    const handleSelectItem = (item: IModelos) => {
        setSelectedItem(item);
        setNumero(item.id)
    }

    return (
        <ImageBackground
            style={[styles.safe, { overflow: 'hidden' }]}
            source={require('../../../assets/images/plano.png')}
        >
            <View style={styles.view}>
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                    <View style={styles.container}>
                        {modelos.map((item) => (
                            <TouchableOpacity
                                key={item.id}
                                onPress={() => handleSelectItem(item)}
                                style={[
                                    styles.item,
                                    selectedItem && selectedItem.id === item.id && styles.selectedItem,
                                ]}
                            >
                                <Text style={styles.text}>{item.modelo}</Text>
                            </TouchableOpacity>
                        ))}
                    </View>
                </ScrollView>
                <ScrollView>
                    <View style={styles.carros}>
                        {carrosPasseio.map((car) => (
                            <TouchableOpacity 
                                key={car.id} 
                                onPress={() => navigate(`${car.id}`)}
                            >
                                <Text>* {car.modelo}</Text>
                                <Image source={{ uri: car.imagem1 }} style={styles.imagemCarro} />
                            </TouchableOpacity>
                        ))}
                    </View>
                </ScrollView>
            </View>
        </ImageBackground>
    )
}