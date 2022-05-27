import axios from "axios";

//setup axios
axios.defaults.withCredentials = true;
// axios.defaults.baseURL = "http://localhost:8081/api/v1/";
// axios.defaults.xsrfHeaderName = 'X-CSRF-TOKEN';
// axios.defaults.xsrfCookieName = '_csrf';
// axios.defaults.headers.post['Content-Type'] = 'application/json;charset=utf-8';

let api = axios.create({
    baseURL: "http://192.168.178.65:8081/api/v1/",
    withCredentials: true,
    xsrfCookieName: '_csrf',
    xsrfHeaderName: 'X-XSRF-TOKEN'
});

api.defaults.headers.common = {
    'X-XSRF-TOKEN': 
        (document.cookie.split(';')
            .map(c => c.trim())
            .filter(c => c.startsWith('XSRF-TOKEN='))[0] || '')
            .replace('XSRF-TOKEN=', '')
        
}

api.interceptors.response.use((response) => response, (err) => {
    if(err.response === undefined || err.response.status === 403){
        window.location.href = '/login';
    }
    console.log(err);
    throw err;
})

export default api;