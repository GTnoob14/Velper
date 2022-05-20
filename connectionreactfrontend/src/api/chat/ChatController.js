import api from "../axios_config";
import MessageModel from "../_models/Message.datamodel";

async function getMessages(friend_id){
    const res = (await api.get(`/chat/${friend_id}`)).data;
    res.map(m => new MessageModel(m.id, m.message, m.sentAt, m.receivedAt, m.read));
    return res;
}

async function sendMessage(message, friend_id){
    const messageModel = new MessageModel(
        null, null, message, null, null, false
    );
    return await api.post(`/chat/${friend_id}`, messageModel);
}

async function deleteMessage(message_id, friend_id){
    return await api.delete(`/chat/${friend_id}/${message_id}`);
}

const ChatRequests = {
    getMessages,
    sendMessage,
    deleteMessage
};

export default ChatRequests;