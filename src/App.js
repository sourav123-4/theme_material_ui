import './App.css';
import { createTheme, ThemeProvider, useTheme } from '@mui/material';
import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import { blue, purple } from '@mui/material/colors';
const theme = createTheme({
  palette: {
    primary:{
      main:"#000000"
    },
    secondary: purple,
    background: blue,
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 400,
      md: 800,
      lg: 1100,
      xl: 1536,
    },
  },
})

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes>
    </ThemeProvider>
  );
}

export default App;
