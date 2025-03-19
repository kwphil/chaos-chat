import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Button } from '@mui/material';
import './App.css';

const theme = createTheme({
  palette: {
    primary: {
      main: '#2563eb',
    },
  },

  spacing: 4,
});

const App = () => {
  return(<ThemeProvider theme={theme}>
    <Button variant="contained" color="primary">Styled Button</Button>
  </ThemeProvider>);
}

export default App;