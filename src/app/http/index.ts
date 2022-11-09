import Axios , {AxiosInstance} from 'axios'

const httpClient:AxiosInstance = Axios.create({
   // baseURL:'https://philips-challenge.herokuapp.com'
    baseURL:'http://localhost:3004'
   // baseURL:' http://localhost:8080'
})

export default httpClient