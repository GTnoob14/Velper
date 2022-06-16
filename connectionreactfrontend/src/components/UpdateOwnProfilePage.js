import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import { ArrowBackIos } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { Typography } from '@mui/material';
import UserController from '../api/user/UserController';
import InterestController from '../api/interests/InterestsController';
import cscController from '../api/csc/CSC_Controller';
import UserModel from '../api/_models/User.datamodel';
import SignupProcess from './models/signup/SignupProcess';

const UpdateOwnProfilePage = () => {
  const navigate = useNavigate();
  return (<CUpdateOwnProfilePage navigate={navigate} />);
}

class CUpdateOwnProfilePage extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      step: 0,

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
    UserController.getUser().then(res => {
      this.setState({
        firstName: res.firstname,
        lastName: res.lastname,
        email: res.email,
        password: res.password,
        age: res.age,
        country: res.country,
        state: res.state,
        city: res.city,
        confirmationToken: res.confirmationToken,
        biography: res.biography,
        interests: res.interests,
      });
    });

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
  updateBiography = (_biography) => {
    this.setState({biography: _biography});
  }
  updateInterests = (_interests) => {
    this.setState({interests: _interests});
  }

  updateSignup = () => {
    const userModel = new UserModel(
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
    UserController.updateUser(userModel).then(() => {
      this.props.navigate('/profile');
    }).catch(err => {
      console.log(err);
    })
  }
  render(){
    return (
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
              onClick={() => this.props.navigate('/profile')}
            >
              <ArrowBackIos />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                Update your Profile
            </Typography>
          </Toolbar>
        </AppBar>
          <SignupProcess 
            step={this.state.step}

            //signup={func}
            updateSignup={this.updateSignup}

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
            interestList={this.state.interestList}

            skipConf={true}
          />
      </Box>
    )
  }
}

export default UpdateOwnProfilePage;
