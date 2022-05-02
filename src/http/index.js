import axios from 'axios'

export const $host = axios.create({ //Для обычных запросов для деофт лохов пользоваптелей которых заскамят
    baseURL:process.env.REACT_APP_API_URL
})

