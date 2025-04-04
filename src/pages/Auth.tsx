import React from 'react';
import { Button, Card, Grid, TextField, Typography } from '@mui/material';

const Auth = () => {
  const signUp = (event: React.FormData) => {
    const formValues = {
      name: event.get('name'),
      email: event.get('email'),
      pass: event.get('pass'),
      pass_conf: event.get('pass_conf')
    };
  };

  return ( 
    <Grid
      container
      spacing={2}
      direction="column"
      sx={{
        alignItems: 'center',
        justifyItems: 'center',
        minHeight: '100vh'
      }}
    >
      <Card
        sx={{
          backgroundColor: 'rgba(255,255,255,0.1)',
          marginTop: '3rem',
        }}
        xs={12}
        sm={8}
        md={4}
      >
        <Typography
          variant="h3"
          sx={{
            color: '#00ffff',
            fontFamily: 'tektur',
            textAlign: 'center',
            fontWeight: 'bold',
            marginBottom: '1.5rem',
            marginTop: '1.5rem'
          }}
        >
          Sign In
        </Typography>
        <form 
          action={signUp}
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-evenly',
          }}
        >
          <TextField
            name="name"
            label="Username"
            variant="filled"
            type="text"
            margin="normal"
            required
            sx={{ 
              marginLeft: '1rem',
              marginRight: '1rem',
              input: {
                backgroundColor: '#121212',
                color: 'white',
                fontFamily: 'tektur'
              },
              label: {
                color: '#00ffff',
                fontFamily: 'tektur',
                fontWeight: 'bold'
              }
            }}
          />
          <TextField 
            name="email"
            label="Email" 
            variant="outlined" 
            type="email"
            margin="normal"
            required 
            sx={{
              marginLeft: '1rem',
              marginRight: '1rem',
              input: {
                backgroundColor: '#121212',
                color: 'white',
                fontFamily: 'tektur'
              },
              label: {
                color: '#00ffff',
                fontFamily: 'tektur',
                fontWeight: 'bold'
              }
            }}
          />
          <TextField 
            name="pass"
            label="Password" 
            variant="outlined" 
            type="password"
            margin="normal"
            required
            sx={{
              marginLeft: '1rem',
              marginRight: '1rem',
              input: {
                backgroundColor: '#121212',
                color: 'white',
                fontFamily: 'tektur'
              },
              label: {
                color: '#00ffff',
                fontFamily: 'tektur',
                fontWeight: 'bold'
              }
            }}
          />
          <TextField
            name="pass_conf"
            label="Confirm Password"
            variant="outlined"
            type="password"
            margin="normal"
            required
            sx={{
              marginLeft: '1rem',
              marginRight: '1rem',
              input: {
                backgroundColor: '#121212',
                color: 'white',
                fontFamily: 'tektur'
              },
              label: {
                color: '#00ffff',
                fontFamily: 'tektur',
                fontWeight: 'bold'
              }
            }}
          />
          <Button
            variant="primary"
            type="submit"
            sx={{
              backgroundColor: '#00ffff',
              fontFamily: 'tektur',
              fontWeight: 'bold',
              margin: '1rem',
              marginBottom: '1.5rem',
              borderRadius: 0,
            }}
          >
            Submit
          </Button>
        </form>
      </Card>
    </Grid>
  );
};

export default Auth;
