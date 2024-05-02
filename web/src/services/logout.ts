
const DBSTORE = '@AracajuCarros:CarrosBG';

export async function logoutService() {
    try {
        await localStorage.removeItem(DBSTORE);
    } catch(error) {
        console.log(error);
        return
    }
}