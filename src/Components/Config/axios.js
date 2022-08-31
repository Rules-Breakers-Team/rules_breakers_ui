import axios from "axios";

const instance = axios.create({
    baseURL: 'https://virtserver.swaggerhub.com/Oniitsiky/n-hotel_api_2/1.0/'
})
export default instance;