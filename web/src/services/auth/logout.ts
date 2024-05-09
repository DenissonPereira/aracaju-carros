import { DBSTORE } from "../../config";

export async function logoutService() {
    try {
        await localStorage.removeItem(DBSTORE);
    } catch(error) {
        console.log(error);
        return
    }
}