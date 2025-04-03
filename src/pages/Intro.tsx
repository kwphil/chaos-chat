import { Button, Card, Grid, List, ListItem, Typography } from '@mui/material';

const Intro = () => {
  return (
    <Grid
      container
      direction="column"
      spacing={2}
      sx={{
        justifyItems: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        color: 'white'
      }}
    >
      <Grid item xs={12} sm={6} md={4}>
        <Card
          sx={{
            padding: 4,
            borderRadius: 3,
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
            marginTop: '3rem',
            marginBottom: '3rem'
          }}
        >
          <Typography 
            variant="h3"
            sx={{
              fontWeight: 'bold',
              textAlign: 'center',
              fontFamily: 'tektur',
              color: '#00ffff',
              textShadow: '0 0 5px rgba(0, 255, 255, 0.8)'
            }}
          >
            ChaosChat
          </Typography>
          
          <Typography 
            variant="h4"
            sx={{
              fontWeight: 'bold',
              marginTop: 2,
              textAlign: 'center',
              fontFamily: 'tektur',
              color: '#ff00ff',
              textShadow: '0 0 5px rgba(255, 0, 255, 0.8)'
            }}
          >
            Welcome to ChaosChat - because who needs rules?
          </Typography>
        
          <Typography 
            variant="h6"
            sx={{
              marginTop: 3,
              fontWeight: 'bold',
              fontFamily: 'tektur',
              color: 'white'
            }}
          >
            What we offer:
          </Typography>

          <List sx={{ listStyleType: 'disc', marginTop: 2 }}>
            <ListItem>
              <Typography 
                variant="body1" 
                sx={{ fontFamily: 'tektur', color: '#e0e0e0' }}
              >
                Free and private conversations - We have one rule: don't say or show anything illegal! Anything else is fair game, no matter how bad you think it is.
              </Typography>
            </ListItem>
            <ListItem>
              <Typography 
                variant="body1" 
                sx={{ fontFamily: 'tektur', color: '#e0e0e0' }}
              >
                Instant messaging - Chat with anyone, anytime, anywhere!
              </Typography>
            </ListItem>
            <ListItem>
              <Typography 
                variant="body1" 
                sx={{ fontFamily: 'tektur', color: '#e0e0e0' }}
              >
                Privacy-first - Your data, your rules. We are open about what we do with your information: not a thing.
              </Typography>
            </ListItem>
          </List>

          <Typography 
            variant="h4"
            sx={{
              marginTop: 4,
              fontWeight: 'bold',
              textAlign: 'center',
              fontFamily: 'tektur',
              color: '#00ffff',
              textShadow: '0 0 5px rgba(0, 255, 255, 0.8'
            }}
          >
            Sounds good right?
          </Typography>

          <Typography 
            variant="body1"
            sx={{
              marginTop: 2,
              textAlign: 'center',
              fontFamily: 'tektur',
              color: '#e0e0e0'
            }}
          >
            Join us, where chaos is the rule, and conversations don't end.
          </Typography>
          
          <Grid
            container
            justifyContent="center"
            sx={{ marginTop: 3 }}
          >
            <Button
              variant="contained"
              color="primary"
              sx={{ 
                padding: '10px 20px', 
                fontSize: '1.1rem',
                fontFamily: 'tektur',
                backgroundColor: '#ff00ff',
                borderRadius: 2,
                '&:hover': {
                  backgroundColor: '#ff00cc'
                }
              }}
            >
              Join Us!
            </Button>
          </Grid>
        </Card>
      </Grid>
    </Grid>
  );
};

export default Intro;
