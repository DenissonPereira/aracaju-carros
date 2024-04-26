import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({
    view: {
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'white'
    },
    titulo: {
        fontSize: 20,
        fontWeight: '500',
        margin: 10
    },
    imagemCarro: {
        width: 250,
        height: 150,
        resizeMode: 'cover',
        marginBottom: 10,
    },
    linha: {
        flexDirection: 'row',
        gap: 20
    },
    branco: {
        width: 30,
        height: 30,
        backgroundColor: 'white',
        borderRadius: 50,
        borderWidth: 1,
        borderColor: '#C9C9C9'
    },
    prata: {
        width: 30,
        height: 30,
        backgroundColor: '#D5D6D8',
        borderRadius: 50,
    },
    preto: {
        width: 30,
        height: 30,
        backgroundColor: 'black',
        borderRadius: 50,
    },
    vermelho: {
        width: 30,
        height: 30,
        backgroundColor: 'red',
        borderRadius: 50,
    },
    disponivel: {
        color: 'green',
        fontWeight: '600'
    },
    indisponivel: {
        color: 'red',
        fontWeight: '600'
    },
    viewDescricao: {
        justifyContent: 'center',
        alignItems: 'flex-start',
    },
    descricao: {
        justifyContent: 'space-between',
        alignItems: 'center',
        textAlign: 'center',
        fontSize: 15,
        fontWeight: '400',
        color: 'red',
        margin: 10
    },
    cor: {
        margin: 2,
        marginBottom: 20
    },
    caixa: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    preco: {
        flexDirection: 'row',
        gap: 50,
        margin: 10,
    },
    botao: {
        backgroundColor: 'red',
        margin: 30,
        padding: 10,
        paddingLeft: 60,
        paddingRight: 60,
        borderRadius: 5
    },
    textButton: {
        fontSize: 30,
        color: 'white'
    },
    valor: {
        fontSize: 30,
        fontWeight: '700',
        color: 'green'
    },
    caracteristicas: {
        fontSize: 15,
        fontWeight: '400'
    },
})