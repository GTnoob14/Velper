import React, { Component } from 'react'
import FriendRequests from '../api/user/friends/FriendController';
import Navbar from './models/_partials/Navbar';
import ProfileCard from './models/ProfileCard';
import SCOPE from '../api/_models/Scope.datamodel';
import Divider from '@mui/material/Divider';
import { Box, IconButton } from '@mui/material';
import { Toolbar } from '@mui/material';
import SettingsIcon from '@mui/icons-material/Settings';
import SearchOptionsDrawer from './models/friends/SearchOptionsDrawer';

class FindPage extends Component {
    constructor(props){
        super(props);
        this.state = {
            friends: [],
            index: 0,

            scope: SCOPE.CITY,
            mutualFriends: true,
            similarInterests: true,

            open: false,
        }
    }

    async findFriends(){
        FriendRequests.findFriendsWithSettings(this.state.scope, this.state.mutualFriends, this.state.similarInterests).then(res => {
            console.log(res);
            this.setState({friends: res});
        }).catch(err => console.log(err));
    }

    componentDidMount(){
        this.findFriends();
    }

    toggleOpen = (val) => {
        this.setState({open: val});
    }

    next = () => {
        this.setState({index: this.state.index+1});
    }

    addToFriends = (public_id) => {
        FriendRequests.addFriend(public_id).then(res => {
            console.log(`Added friend ${public_id} ${res}`);
        })
    }

    changeSearchOptions = (scope, mutualFriends, similarInterests) => {
        this.setState({scope, mutualFriends, similarInterests}, this.findFriends);
        this.toggleOpen(false);
    }

  render() {
      if(this.state.friends.length === 0 || this.state.index >= this.state.friends.length){
          return (
            <div>
                <Box sx={{ flexGrow: 1}}>
                    <Toolbar>
                        <h1 style={{ flexGrow: 1}}>Find</h1>
                        <IconButton edge="end" onClick={this.toggleOpen}>
                            <SettingsIcon />
                        </IconButton>
                    </Toolbar>
                </Box>
                <Divider />
                <h1>We can't find any new friends for you right now. Sorry :/</h1>
                <SearchOptionsDrawer open={this.state.open} toggleDrawer={this.toggleOpen} changeSearchOptions={this.changeSearchOptions}/>
                <Navbar value={'find'} />
            </div>)
      }
      let friend = this.state.friends[this.state.index];
      console.log(friend);
    return (
        <>
        <Box sx={{ flexGrow: 1}}>
            <Toolbar>
                <h1 style={{ flexGrow: 1}}>Find</h1>
                <IconButton edge="end" onClick={this.toggleOpen}>
                    <SettingsIcon />
                </IconButton>
            </Toolbar>
        </Box>
        <Divider />
            <div align="center" style={{margin: "20px"}}>
                <ProfileCard
                    public_id={friend.public_id}
                    firstname={friend.firstname}
                    lastname={friend.lastname}
                    age={friend.age}
                    email={friend.email}
                    country={friend.country}
                    state={friend.state}
                    city={friend.city}
                    biography={friend.biography}
                    interests={friend.interests}

                    addToFriends={this.addToFriends}
                    next={this.next}

                    friend={true}
                />
                <SearchOptionsDrawer open={this.state.open} toggleDrawer={this.toggleOpen} changeSearchOptions={this.changeSearchOptions}/>
                <Navbar value={'find'}/>
            </div>
        </>
    )
  }
}

export default FindPage;
