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
                e.biography,
                e.interests,
                null,
            )
        });
}

async function findFriends(){
    // let l = [new UserModel(
    //     'public_id',
    //     'Paul',
    //     'Berger',
    //     null,
    //     'paul@berger.com',
    //     23,
    //     'United States of America',
    //     'New York',
    //     'Just a random guy from NYC hope we can be friends!',
    //     ['soccer', 'cycling', 'business'],
    //     []
    // )];
    //     console.log("List" + l);
    // return l;
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
    getFriends,
    addFriend,
    removeFriend
};

export default FriendRequests;