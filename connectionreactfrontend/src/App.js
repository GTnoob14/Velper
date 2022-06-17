import React, { Suspense, lazy } from 'react';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';

import { ThemeProvider, createTheme } from '@mui/material/styles';

const Login = lazy(() => import('./components/Login'));
const OwnProfilePage = lazy(() => import('./components/OwnProfilePage'));
const Signup = lazy(() => import('./components/SignUp'));
const Home = lazy(() => import('./components/Home'));


const ChatPage = lazy(() => import('./components/ChatPage'));
const FindPage = lazy(() => import('./components/FindPage'));
const UpdateOwnProfilePage = lazy(() => import('./components/UpdateOwnProfilePage'));

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
      <div className="App" style={{textAlign: 'center'}}>
        <Suspense fallback={<div />}>
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
        </Suspense>
      </div>
    </ThemeProvider>
  );
}

export default App;
