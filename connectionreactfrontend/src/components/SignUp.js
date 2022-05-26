import React from "react";
import UserRequests from '../api/user/UserController';
import UserModel from "../api/_models/User.datamodel";
import { Divider } from "@mui/material";
import SignupProcess from "./models/signup/SignupProcess";
import cscController from '../api/csc/CSC_Controller';
class Signup extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      age: '',
      country: {id: undefined, name: '', iso2: ''},
      state: {id: undefined, name: '', iso2: ''},
      city: {id: undefined, name: ''},
      biography: '',
      interests: new Set(),

      countries: [],
      states: [],
      cities: []
    }
  }

  componentDidMount(){
    cscController.getAllCountries().then(res => {
      this.setState({countries: res || []});
    });
  }

  refreshStates = (ciso) => {
    cscController.getStatesByCountry(ciso).then(res => {
      this.setState({states: res || []});
    })
  }

  refreshCities = (ciso, siso) => {
    cscController.getCitiesByState(ciso, siso).then(res => {
      this.setState({cities: res || []});
    })
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
    if(_country != null)
      this.refreshStates(_country.iso2);
    else
      this.setState({states: []})
  }
  updateState = (_state) => {
    this.setState({state: _state});
    if(_state != null)
      this.refreshCities(this.state.country.iso2, _state.iso2);
    else
      this.setState({cities: []})
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
    //TODO don't allow empty fields
    let userModel = new UserModel(
      null,
      this.state.firstName,
      this.state.lastName,
      this.state.password,
      this.state.email,
      this.state.age,
      this.state.country.iso2,
      this.state.state.name,
      this.state.city.name,
      this.state.biography,
      [...this.state.interests],
      null
    );
    console.log(userModel);

    UserRequests.signUp(userModel).then(() => {
      window.location.href = '/';
    }).catch(err => {
      console.log(err);
      alert('Something went wrong!')
    });
  }

  render(){

    let func = null;
    if(this.props.submitFunc !== undefined){
      func = () => {
        let userModel = new UserModel(
          null,
          this.state.firstName,
          this.state.lastName,
          this.state.password,
          this.state.email,
          this.state.age,
          this.state.country.iso2,
          this.state.state.name,
          this.state.city.name,
          this.state.biography,
          [...this.state.interests],
          null
        );
        this.props.submitFunc(userModel)};
    }else{
      func = this.signup;
    }

    return (
      <>
        <h1>Sign up</h1>
        <Divider />
        <SignupProcess 
          signup={func}

          firstName={this.state.firstName}
          lastName={this.state.lastName}
          email={this.state.email}
          password={this.state.password}
          age={this.state.age}
          country={this.state.country}
          state={this.state.state}
          city={this.state.city}
          biography={this.state.biography}
          interests={this.state.interests}

          updateFirstName={this.updateFirstName}
          updateLastName={this.updateLastName}
          updateEmail={this.updateEmail}
          updatePassword={this.updatePassword}
          updateAge={this.updateAge}
          updateCountry={this.updateCountry}
          updateState={this.updateState}
          updateCity={this.updateCity}
          updateBiography={this.updateBiography}
          updateInterests={this.updateInterests}

          countries={this.state.countries}
          states={this.state.states}
          cities={this.state.cities}
        />
      </>
    );
  }
}

export default Signup;