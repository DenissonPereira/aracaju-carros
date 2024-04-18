import { Dimensions, StyleSheet } from "react-native";


export const styles = StyleSheet.create({
    safe: {
        flex: 1,
        height: Dimensions.get("window").height,
        justifyContent: 'center'
    }
})