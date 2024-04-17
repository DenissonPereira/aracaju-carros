import { StyleSheet, Dimensions } from "react-native";


export const styles = StyleSheet.create({
    safe: {
        flex: 1,
        height: Dimensions.get("window").height,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 20
    },
    image: {
        width: 350,
        height: 180,
        borderRadius: 5,
        marginTop: 320
    },
    view: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'

    },
    linha: {
        flexDirection: 'row',
        gap: 20
    },
    container: {
        backgroundColor: '#EBEBEB',
        width: 160,
        height: 80,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textView: {
        marginRight: 230
    },
    text: {
        fontSize: 30,
        fontWeight: '500'
    }
})