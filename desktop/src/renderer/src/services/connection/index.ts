import { BASE_URL } from '@renderer/config/url_base_api'
import axios from 'axios'

export const connectServer = axios.create({
  baseURL: BASE_URL
})
