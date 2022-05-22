import React from "react";
import Form from "./models/signup/Form";
import UserRequests from '../api/user/UserController';
import UserModel from "../api/_models/User.datamodel";
import { Divider } from "@mui/material";

class Signup extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      age: '',
      country: '',
      city: '',
      biography: '',
      interests: new Set(),
    }
  }

  updateFirstName = (_firstName) => {
    this.setState({firstName: _firstName});
  }
  updateLastName = (_lastName) => {
    this.setState({lastName: _lastName});
  }
  updateEmail = (_email) => {
    this.setState({email: _email});
  }
  updatePassword = (_password) => {
    this.setState({password: _password});
  }
  updateAge = (_age) => {
    this.setState({age: _age});
  }
  updateCountry = (_country) => {
    this.setState({country: _country});
  }
  updateCity = (_city) => {
    this.setState({city: _city});
  }
  updateBiography = (_biography) => {
    this.setState({biography: _biography});
  }
  updateInterests = (_interests) => {
    this.setState({interests: _interests});
  }

  signup = () => {
    let userModel = new UserModel(
      null,
      this.state.firstName,
      this.state.lastName,
      this.state.password,
      this.state.email,
      this.state.age,
      this.state.country,
      this.state.city,
      this.state.biography,
      [...this.state.interests]
    );

    UserRequests.signUp(userModel).then(() => {
      alert('Signed Up');
    }).catch(err => {
      console.log(err);
      alert('Something went wrong!')
    });
  }

  render(){

    return (
      <>
        <h1>Sign up</h1>
        <Divider />
        <Form 
          signUp={this.signup}

          firstName={this.state.firstName}
          lastName={this.state.lastName}
          email={this.state.email}
          password={this.state.password}
          age={this.state.age}
          country={this.state.country}
          city={this.state.city}
          biography={this.state.biography}
          interests={this.state.interests}

          updateFirstName={this.updateFirstName}
          updateLastName={this.updateLastName}
          updateEmail={this.updateEmail}
          updatePassword={this.updatePassword}
          updateAge={this.updateAge}
          updateCountry={this.updateCountry}
          updateCity={this.updateCity}
          updateBiography={this.updateBiography}
          updateInterests={this.updateInterests}
        />
      </>
    );
  }
}

export default Signup;