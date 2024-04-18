import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({
    imagem: {
        width: 90,
        height: 90,
        borderRadius: 50,
        borderWidth: 5,
        borderColor: '#DB0002'
    },
    viewPerfil: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        gap: 20
    },
    textNome: {
        fontSize: 30,
        color: '#DB0002',
        fontWeight: '600'
    },
    telefone: {
        fontSize: 20,
        color: '#919192',
        fontWeight: '400'
    },
    textConta: {
        fontSize: 25,
        color: '#DB0002',
        fontWeight: '600'
    },
    viewDados: {
        marginTop: 20
    },
    viewRow: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
        margin: 5
    }
})