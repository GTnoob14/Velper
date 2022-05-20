import React, { Component } from 'react'
import Navbar from './models/_partials/Navbar';
import FriendRequests from '../api/user/friends/FriendController';
import ChatFriends from './models/chat/ChatFriends';
import ChatRequests from '../api/chat/ChatController';

class ChatPage extends Component {
  constructor(props){
    super(props);
    this.state = {
      friends: [],
      friend: {},
      messages: []
    };
  }

  componentDidMount(){
    FriendRequests.getFriends().then(res => {
      this.setState({friends: res, friend: res[0]});
      this.loadMessagesOf(res[0].public_id);
    })
  }

  loadMessages = () => {
    this.loadMessagesOf(this.state.friend.public_id);
  }

  loadMessagesOf = (id) => {
    ChatRequests.getMessages(id).then(res => {
      console.log(res);
      this.setState({
        messages: res
      });
    })
  }

  sendMessage = (message) => {
    ChatRequests.sendMessage(message, this.state.friend.public_id).then(res => {
      this.loadMessages();
    })
  }

  updateFriend = (id) => {
    this.setState({friend: this.state.friends.filter(f => f.public_id === id)[0]});
    this.loadMessagesOf(id);
  }

  render() {
    
    return (
      <div>
        <ChatFriends
          friends={this.state.friends}
          friend={this.state.friend}
          messages={this.state.messages}

          setFriend={this.updateFriend}
          sendMessage={this.sendMessage}
        />
          {/* <Chat
            friends={this.state.friends}
            friend={this.state.friend}
            messages={this.state.messages}
          /> */}
          <Navbar value={'chat'} />
      </div>
    )
  }
}

export default ChatPage;
