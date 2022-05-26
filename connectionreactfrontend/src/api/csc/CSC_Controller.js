import api from '../axios_config';

async function getAllCountries(){
    return (await api.get('/csc/countries')).data;
}

async function getStatesByCountry(ciso2){
    return (await api.get(`/csc/states/${ciso2}`)).data;
}

async function getCitiesByState(ciso2, siso2){
    return (await api.get(`/csc/cities/${ciso2}/${siso2}`)).data;
}

const cscController = {
    getAllCountries,
    getStatesByCountry,
    getCitiesByState
}

export default cscController;
