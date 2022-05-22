import React, { Component } from 'react'
import FriendRequests from '../api/user/friends/FriendController';
import Navbar from './models/_partials/Navbar';
import ProfileCard from './models/ProfileCard';

class FindPage extends Component {
    constructor(props){
        super(props);
        this.state = {
            friends: [],
            index: 0
        }
    }
    componentDidMount(){
        FriendRequests.findFriends().then(res => {
            console.log(res);
            this.setState({friends: res});
        }).catch(err => console.log(err));
    }

    next = () => {
        this.setState({index: this.state.index+1});
    }

    addToFriends = (public_id) => {
        FriendRequests.addFriend(public_id).then(res => {
            console.log(`Added friend ${public_id} ${res}`);
        })
    }

  render() {
      if(this.state.friends.length === 0 || this.state.index >= this.state.friends.length){
          return (
            <div>
                <h1>We can't find any new friends for you right now. Sorry :/</h1>
                <Navbar value={'find'} />
            </div>)
      }
      let friend = this.state.friends[this.state.index];
      console.log(friend);
    return (
      <div align="center" style={{margin: "20px"}}>
          <ProfileCard
             public_id={friend.public_id}
             firstname={friend.firstname}
             lastname={friend.lastname}
             age={friend.age}
             email={friend.email}
             country={friend.country}
             city={friend.city}
             biography={friend.biography}
             interests={friend.interests}

             addToFriends={this.addToFriends}
             next={this.next}
          />
          <Navbar value={'find'}/>
      </div>
    )
  }
}

export default FindPage;
