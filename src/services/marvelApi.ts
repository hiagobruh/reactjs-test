import axios from 'axios'
import { config } from '../utils/config'

const marvelApi = axios.create({
  baseURL: 'http://gateway.marvel.com',
  params: {
    apikey: config().marvelApiPublicKey,
  },
})

export default marvelApi
