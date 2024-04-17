import { Dimensions, StyleSheet } from "react-native";


export const styles = StyleSheet.create({
    safe: {
        flex: 1,
        height: Dimensions.get("window").height,
    },
    view: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        marginTop: 250
    },
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 20,
        padding: 20
    },
    text: {
        fontSize: 20,
        fontWeight: '500'
    },
    item: {
        paddingHorizontal: 5,
        paddingVertical: 10,
    },
    selectedItem: {
        borderBottomWidth: 2,
        borderBottomColor: 'red',
    },
    imagemCarro: {
        width: 250,
        height: 150,
        resizeMode: 'cover',
        marginBottom: 10,
    },
    carros: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textModelo: {
        textAlign: 'center',
        fontSize: 20,
        color: 'red',
        fontWeight: '500'
    }
});