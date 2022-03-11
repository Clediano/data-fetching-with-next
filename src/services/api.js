import axios from "axios";

const SECRET_KEY = process.env.API_KEY

export const api = axios.create({
    baseURL: 'https://api.pexels.com/v1/',
    headers: {
        'Authorization': SECRET_KEY
    }
})
