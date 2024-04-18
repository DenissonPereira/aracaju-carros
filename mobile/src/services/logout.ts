import AsyncStorage from "@react-native-async-storage/async-storage";

const DBSTORE = '@AracajuCarros:CarrosBG';

export async function logout() {
    try {
        await AsyncStorage.removeItem(DBSTORE);
    } catch (error) {
        console.log(error);
    }
}