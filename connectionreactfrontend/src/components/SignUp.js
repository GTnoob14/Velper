import React from "react";
import UserRequests from '../api/user/UserController';
import UserModel from "../api/_models/User.datamodel";
import { Button, Divider, Typography } from "@mui/material";
import SignupProcess from "./models/signup/SignupProcess";
import cscController from '../api/csc/CSC_Controller';
import InterestController from "../api/interests/InterestsController";
import ConfirmationController from '../api/user/confirmation/ConfirmationController';


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
      confirmationToken: '',
      biography: '',
      interests: new Set(),

      countries: [],
      states: [],
      cities: [],

      interestList: new Set()
    }
  }

  componentDidMount(){
    cscController.getAllCountries().then(res => {
      InterestController.getAllInterests().then(i => {
        this.setState({countries: res || [], interestList: new Set(i.map(ist => ist.interest)) || new Set()});
      })
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
  updateConfirmationToken = (_confirmationToken) => {
    this.setState({confirmationToken: _confirmationToken});
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
      //window.location.href = '/';
    }).catch(err => {
      console.log(err);
      alert('Something went wrong!')
    });
  }

  confirm = () => {
    ConfirmationController.confirmAccount(this.state.confirmationToken, this.state.email).then(() => {
      UserRequests.login(this.state.email, this.state.password, true).then(() => {
        window.location.href = window.location.href + '?con=2';
      }).catch(err => {
        console.log(err);
        alert('Couldn\'t log in');
      });
    }).catch(err => {
      console.log(err);
    });

  }

  updateSignup = () => {
    const userModel = new UserModel(
      null,
      null,//this.state.firstName,
      null,//this.state.lastName,
      null,//this.state.password,
      null,//this.state.email,
      null,//this.state.age,
      null,//this.state.country.iso2,
      null,//this.state.state.name,
      null,//this.state.city.name,
      this.state.biography,
      [...this.state.interests],
      null
    );
    UserRequests.updateUser(userModel).then(() => {
      window.location.href = '/';
    }).catch(err => {
      console.log(err);
    })
  }

  render(){
    const windowUrl = window.location.search;
    const step = new URLSearchParams(windowUrl).get('con');
    
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
          step={step}

          signup={func}
          confirm={this.confirm}
          updateSignup={this.updateSignup}

          firstName={this.state.firstName}
          lastName={this.state.lastName}
          email={this.state.email}
          password={this.state.password}
          age={this.state.age}
          country={this.state.country}
          state={this.state.state}
          city={this.state.city}

          verificationCode={this.state.confirmationToken}

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

          updateVerificationCode={this.updateConfirmationToken}

          updateBiography={this.updateBiography}
          updateInterests={this.updateInterests}

          countries={this.state.countries}
          states={this.state.states}
          cities={this.state.cities}
          interestList={this.state.interestList}
        />
        <Typography
          style={{opacity: '0.5', display: 'inline-block'}}
        >
                Already have an account?
            </Typography>
            <Button 
              variant='text'
              style={{textTransform: 'none', display: 'inline-block'}}
              onClick={() => {
                  window.location.href = '/login';
              }}
            >
                Log in
            </Button>
      </>
    );
  }
}

export default Signup;