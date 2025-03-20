const BASE_URL=import.meta.env.VITE_NEWS_BASE_API_URL
const API_KEY=import.meta.env.VITE_NEWS_BASE_API_KEY

import axios from 'axios';
//const axios = require('axios/dist/browser/axios.cjs'); // browser commonJS bundle (ES2017)
//const axios = require('axios/dist/node/axios.cjs'); // node commonJS bundle (ES2017)

export const getNews = async () => {
    try {
        const response = await axios.get(`${BASE_URL}latest-news`, {
            params: {
                apiKey: API_KEY
            }
        })
        return response.data
    }
    catch (error) {
        console.log(error);
    }
}
