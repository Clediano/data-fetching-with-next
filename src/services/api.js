import axios from "axios";

export const api = axios.create({
    baseURL: 'https://api.pexels.com/v1/',
    headers: {
        'Authorization': '563492ad6f91700001000001873235568afd44b0ab7a0e7f63ca302d'
    }
})
