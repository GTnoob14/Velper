import api from '../../axios_config';

async function confirmAccount(token, email){
    const data = {email, token};
    await api.post('/user/token', data);
}

const exports = {
    confirmAccount
};

export default exports;