import axios from "axios";

const SECRET_KEY = process.env.NEXT_PUBLIC_API_KEY

export const api = axios.create({
    baseURL: 'https://api.pexels.com/v1/',
    headers: {
        'Authorization': SECRET_KEY
    }
})
