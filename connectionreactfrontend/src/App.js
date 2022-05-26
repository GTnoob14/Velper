import React from 'react';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Login from './components/Login';
import OwnProfilePage from './components/OwnProfilePage';
import Signup from './components/SignUp';
import Home from './components/Home';

import { ThemeProvider, createTheme } from '@mui/material/styles';
import ChatPage from './components/ChatPage';
import FindPage from './components/FindPage';
import UpdateOwnProfilePage from './components/UpdateOwnProfilePage';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1520A6',
      contrastText: '#fff'
    }
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Router>
          <Routes>
            <Route path='/' element={<Home key="home_page" />} />
            <Route path='/signup' element={<Signup key="signup_page" />}/>
            <Route path='/login' element={<Login key="login_page" />}/>
            <Route path='/find' element={<FindPage key="find_page" />} />
            <Route path='/chat' element={<ChatPage key="chat_page" />} />
            <Route path='/profile' element={<OwnProfilePage key="ownprofilepage_page" />}/>
            <Route path='/profile/update' element={<UpdateOwnProfilePage key="updateownprofilepage_page" />}/>
          </Routes>
        </Router>
      </div>
    </ThemeProvider>
  );
}

export default App;
