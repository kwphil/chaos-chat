import { Button, Typography } from '@mui/material';

const Home = () =>
<div
  style={{
    display: 'flex',
    flexDirection: 'row'
  }}
>
  {/* Hero section will go here */}
  <section>
    <Typography variant="h3" sx={{
      fontFamily: 'tektur',
      color: '#ff0000',
      fontWeight: 'bold',
      textShadow: '0 0 8px #ff0000'
    }}>
      System Malfunction Detected
    </Typography>
    <Typography variant="h4" sx={{
      fontFamily: 'tektur',
      color: '#ff0000',
      fontWeight: 'bold',
      fontStyle: 'italic',
      textShadow: '0 0 8px #ff0000'
    }}>
      Unknown user: %USER% 
    </Typography>
  </section>
  {/* And then here is the popular threads */}
  <aside>
    <Button
      sx={{
        fontFamily: 'tektur',
        fontWeight: 'bold',
        fontStyle: 'italic',
        textShadow: '0 0 5px #00ffff',
        fontSize: 'large',
        color: '#00ffff'
      }}
    >Thread1</Button>
    <Button
      sx={{
        fontFamily: 'tektur',
        fontWeight: 'bold',
        fontStyle: 'italic',
        textShadow: '0 0 5px #00ffff',
        fontSize: 'large',
        color: '#00ffff'
      }}
    >Thread2</Button>
  </aside>
</div>;

export default Home;
