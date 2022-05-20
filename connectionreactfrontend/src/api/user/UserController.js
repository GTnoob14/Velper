import api from "../axios_config";
import UserModel from '../_models/User.datamodel';
import qs from 'qs';
import axios from "axios";

//returns Promise<UserModel>
async function getUsers() {
    const data = (await api.get('/user/all')).data;
    data.map(res => new UserModel(res.public_id, res.firstname, res.lastname, res.password, res.email, res.age, res.country, res.city, res.biography, res.interests, res.friendIdList));
    return data;
}

async function getUser() {
    const res = (await api.get('/user')).data;
    return new UserModel(res.public_id, res.firstname, res.lastname, res.password, res.email, res.age, res.country, res.city, res.biography, res.interests, res.friendIdList)
}

async function signUp(userModel){
    return await api.post('/user/add', userModel);
}

async function login(email, password, remember_me){
    const data = {username: email, password: password, 'remember-me': remember_me};
    axios.post('http://localhost:8081/login', qs.stringify(data), {
        headers: {'Content-Type': 'application/x-www-form-urlencoded'}
    });
}

async function updateUser(userModel){
    const res = (await api.put('/user')).data;
    return new UserModel(res.public_id, res.firstname, res.lastname, res.password, res.email, res.age, res.country, res.city, res.biography, res.interests, res.friendIdList)
}

async function deleteUser(){
    await api.delete('/user')
}

let exports = {
    getUsers,
    getUser,
    signUp,
    login,
    updateUser,
    deleteUser
};

export default exports;