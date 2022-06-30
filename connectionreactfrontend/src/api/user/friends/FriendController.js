import api from "../../axios_config";
import UserModel from "../../_models/User.datamodel";

function convertToUsermodelList(data){
    return data.data.map(e => {
            return new UserModel(
                e.public_id,
                e.firstname,
                e.lastname,
                null,
                e.email,
                e.age,
                e.country,
                e.state,
                e.city,
                e.gender,
                e.biography,
                e.interests,
                null,
            )
        });
}

async function findFriendsWithSettings(SCOPE, mutualFriends, similarInterests, sameSex){
    const data = await api.get('/user/friends/find', {params: {scope: SCOPE.enum, mutualFriends: mutualFriends, similarInterests: similarInterests, sameSex: sameSex}});
    const friends = convertToUsermodelList(data);
    return friends;
}

async function findFriends(){
    const data = await api.get('/user/friends/find');
    const friends = convertToUsermodelList(data);
    return friends;
}

async function getFriends(){
    const data = await api.get('/user/friends')
    let list = convertToUsermodelList(data)
    return list;
}

async function addFriend(public_id){
    await api.post(`/user/friends/${public_id}`);
}

async function removeFriend(public_id){
    await api.delete(`/user/friends/${public_id}`)
}

const FriendRequests = {
    findFriends,
    findFriendsWithSettings,
    getFriends,
    addFriend,
    removeFriend
};

export default FriendRequests;