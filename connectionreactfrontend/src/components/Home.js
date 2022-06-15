import * as React from 'react';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Navbar from './models/_partials/Navbar';
import TextBoxField from './models/_partials/TextBoxField';

function ButtonAppBar(props) {
  return (
    <Box sx={{ flexGrow: 1, color: 'white', fontWeight: 'bold'}}>
        <Toolbar>
          <Typography variant="h6" component="div" color="inherit" sx={{ flexGrow: 1 }} />
          <Button color="inherit" onClick={() => window.location.href = '/signup'}>Sign Up</Button>
          <Button color="inherit" onClick={() => window.location.href = '/login'}>Login</Button>
        </Toolbar>
    </Box>
  );
}

function Home(props) {
  
  //const isMobile = useMediaQuery({ query: `(max-width: 760px)` });

  return (
      <div>
        <Box sx={{display: { xs: 'none', sm: 'block' }}}>
          <div style={{backgroundImage: "linear-gradient(to bottom, #1520a6, #1c21b3, #2322bf, #2b22cc, #3322d9, #3522de, #3723e2, #3923e7, #3524e5, #3126e3, #2c27e0, #2828de)"}}>
            <ButtonAppBar />

            <Typography sx={{color: "white", paddingBottom: '60px'}} variant="h2">
              Velper
            </Typography>
          </div>
          <Typography sx={{color: 'gray', fontWeight: 'bold', paddingTop: '20px'}} variant='h4'>
            Find meaningful friendships
          </Typography>
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            marginBottom: '2vh',
            backgroundColor: 'white'
          }}>
            <TextBoxField
              text="We help you find new friends whom you can have
              meaningful conversations with, pursue a hobby with
              or just have a fun time with."
            />
            <TextBoxField
              text="You will achieve this by entering your interests,
              hobbys and writing a short biography about yourself to 
              find people you can connect with and befriend them!"
            />
          </div>
          <div style={{marginBottom: '64px',}}>
            <Typography variant='h4' style={{fontWeight: 'bold'}}>
              Start your journey now
            </Typography>
            <div style={{
              display: 'flex',
              justifyContent: 'center',
            }}>
              <Button sx={{margin: '20px'}} variant="contained" color="primary" onClick={() => window.location.href = '/signup'}>Sign Up</Button>
              <Button sx={{margin: '20px'}} variant="contained" color="primary" onClick={() => window.location.href = '/login'}>Login</Button>
            </div>
            {/* Example Profile */}
            {/* <div style={{display: 'flex', justifyContent: 'center', }}>
              <ProfileCard
                friend={true}
                firstname={'Noah'}
                lastname={'Johnson'}
                age={23}
                country={'USA'}
                state={'California'}
                city={'Los Angelos'}
                biography="Hey I'm Noah! I currently go to College to study 
                  Computer Science. In my free time I like playing basketball
                  and play some CS:GO or just hit the guitar. If you like some
                  of the same things, add me and maybe we can meet up later on!"
                interests={[{id: 1, interest: 'basketball'}, {id: 2, interest: 'CS:GO'}, {id: 3, interest: 'guitar'}, {id: 4, interest: 'avengers'}, ]}
                
                addToFriends={() => {}}
                next={() => {}}
              />
            </div> */}
          </div>
        </Box>
        <Box sx={{display: { xs: 'block', sm: 'none' }}}>
          <div style={{height: '100vh', backgroundImage: "linear-gradient(to bottom, #1520a6, #1c21b3, #2322bf, #2b22cc, #3322d9, #3522de, #3723e2, #3923e7, #3524e5, #3126e3, #2c27e0, #2828de)"}}>
            <ButtonAppBar />

            <Typography sx={{color: "white", paddingTop: '10vh'}} variant="h2">
              Velper
            </Typography>
            <Typography sx={{color: '#9E9E9E ', fontWeight: 'bold', paddingTop: '55vh'}} variant='h6'>
            Find meaningful friendships
          </Typography>
          </div>
        </Box>
        {/* <a href='https://pngtree.com/free-backgrounds'>free background photos from pngtree.com/</a> */}
        <Navbar />
      </div>
    );
}

export default Home;
