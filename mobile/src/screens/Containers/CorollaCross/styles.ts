import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({
    view: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    imagemCarro: {
        width: 250,
        height: 150,
        resizeMode: 'cover',
        marginBottom: 10,
    },
    linha: {
        flexDirection: 'row'
    },
    branco: {
        width: 20,
        height: 20,
        backgroundColor: 'white',
        borderRadius: 50,
        borderColor: '#585958',
        borderWidth: 1
    },
    prata: {
        width: 20,
        height: 20,
        backgroundColor: '#D5D6D8',
        borderRadius: 50,
        borderColor: '#585958',
        borderWidth: 1
    },
    preto: {
        width: 20,
        height: 20,
        backgroundColor: 'black',
        borderRadius: 50,
        borderColor: '#585958',
        borderWidth: 1
    },
    vermelho: {
        width: 20,
        height: 20,
        backgroundColor: 'red',
        borderRadius: 50,
        borderColor: '#585958',
        borderWidth: 1
    }
})