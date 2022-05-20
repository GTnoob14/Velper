class MessageModel{
    constructor(id, public_id, message, sentAt, receivedAt, read){
        this.id = id;
        this.public_id = public_id;
        this.message = message;
        this.sentAt = sentAt;
        this.receivedAt = receivedAt;
        this.read = read;
    }
}

export default MessageModel;