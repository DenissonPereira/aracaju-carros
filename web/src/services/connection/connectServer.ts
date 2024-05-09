import axios from "axios";
import { BASE_URL_AUTH } from "../../config";

export const connectServer = axios.create({
    baseURL: BASE_URL_AUTH
})