import api from '../axios_config';


//[{id: 1L, interest: 'name'}]
async function getAllInterests(){
    return (await api.get('/interests')).data;
}

const exports = {
    getAllInterests
};

export default exports;