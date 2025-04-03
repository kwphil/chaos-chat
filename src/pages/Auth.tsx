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
          marginTop: '3rem'
        }}
        xs={12}
        sm={8}
        md={4}
      >
        <Typography
          variant="h3"
          sx={{
            color: '#00ffff',
            fontFamily: 'tektur'
          }}
        >
          Sign In
        </Typography>
        <form action={signUp}>
          <TextField
            name="name"
            label="Username"
            variant="outlined"
            type="text"
            required
          />
          <TextField 
            name="email"
            label="Email" 
            variant="outlined" 
            type="email" 
            required 
          />
          <TextField 
            name="pass"
            label="Password" 
            variant="outlined" 
            type="password" 
            required 
          />
          <TextField
            name="pass_conf"
            label="Confirm Password"
            variant="outlined"
            type="password"
            required
          />
          <Button
            variant="primary"
            type="submit"
          >
            Submit
          </Button>
        </form>
      </Card>
    </Grid>
  );
};

export default Auth;
