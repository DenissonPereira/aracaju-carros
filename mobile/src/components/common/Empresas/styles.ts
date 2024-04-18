import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({
    view: {
        margin: 10,
        marginTop: 300,
        justifyContent: 'center',
    },
    imagem: {
        objectFit: 'contain',
        width: 150,
        height: 50
    },
    viewImagens: {
        backgroundColor: '#EBEBEB',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        width: 350,
        height: 120,
        marginBottom: 20
    },
    textEmpresas: {
        margin: 20,
        marginTop: 120,
        fontSize: 25,
        color: '#DB0002',
        fontWeight: '600'
    },
    viewScroll: {
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 140
    },
    nome: {
        fontSize: 18,
        fontWeight: '700'
    },
    row: {
        flexDirection: 'row'
    },
    temQuantidade: {
        color: 'green',
    },
    naoTemQuantidade: {
        color: 'red',
    }
})