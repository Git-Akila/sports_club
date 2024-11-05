import axios from 'axios';

//Initialize our API to request the info
const api = axios.create({
    // Production
    //baseURL: 'https://api-fitclub.herokuapp.com'
    // Development
    // baseURL : "http://localhost:8080"
    baseURL:"http://192.168.0.116:8080/"
})

export default api;