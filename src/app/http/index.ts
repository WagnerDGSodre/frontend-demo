import Axios , {AxiosInstance} from 'axios'

const httpClient:AxiosInstance = Axios.create({
   // baseURL:'https://philips-challenge.herokuapp.com'
   // baseURL:'http://localhost:3000'
    baseURL:' http://localhost:3004'
})

export default httpClient