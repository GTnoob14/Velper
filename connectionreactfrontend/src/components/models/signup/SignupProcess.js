import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import IdentificationProcess from './process/IdentificationProcess';
import ConfirmationProcess from './process/ConfirmationProcess';
import AccountProcess from './process/AccountProcess';

const steps = ['Email Address', 'Email Confirmation', 'Account data'];

export default function SignupProcess(props) {
  const [activeStep, setActiveStep] = React.useState(0);

  const [verificationCode, setVerificationCode] = React.useState('');

  const widgets = [<IdentificationProcess 
    firstName={props.firstName}
    lastName={props.lastName}
    email={props.email}
    password={props.password}
    age={props.age}
    country={props.country}
    state={props.state}
    city={props.city}

    updateFirstName={props.updateFirstName}
    updateLastName={props.updateLastName}
    updateEmail={props.updateEmail}
    updatePassword={props.updatePassword}
    updateAge={props.updateAge}
    updateCountry={props.updateCountry}
    updateState={props.updateState}
    updateCity={props.updateCity}

    countries={props.countries}
    states={props.states}
    cities={props.cities}
  />, <ConfirmationProcess 
    verificationCode={verificationCode}
    updateVerificationCode={setVerificationCode}
  />, <AccountProcess 
    biography={props.biography}
    interests={props.interests}
    
    updateBiography={props.updateBiography}
    updateInterests={props.updateInterests}
  />];

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const nextFuncs = [
    () => {
        //send email to server, to be able to get verification code

        handleNext();
    },
    () => {
        //send verification code to server, to be able to verify the account

        handleNext();
    },
    () => {
        //send all data to server, to create account
        props.signup();
        handleNext();
    }
  ];

  

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <Box sx={{ margin: '20px' }}>
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => {
          const stepProps = {};
          const labelProps = {};
          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      {activeStep === steps.length ? (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>
            All steps completed - you&apos;re finished
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Box sx={{ flex: '1 1 auto' }} />
            <Button onClick={handleReset}>Reset</Button>
          </Box>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <Box sx={{ mt: 2, mb: 1 }}>
              {widgets[activeStep]}
          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Button
              color="inherit"
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ mr: 1 }}
            >
              Back
            </Button>
            <Box sx={{ flex: '1 1 auto' }} />

            <Button onClick={nextFuncs[activeStep]}>
              {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
            </Button>
          </Box>
        </React.Fragment>
      )}
    </Box>
  );
}