import React  from 'react';
import { ThemeProvider, createTheme, makeStyles } from '@material-ui/core';
import Home from './Home';
import ListaDeDesejos from './ListaDeDesejos';
import { BrowserRouter, Route, Switch } from 'react-router-dom';


function App() {
  const theme = createTheme({
    spacing: 4,
    palette: {
      primary: {
        main: '#212121',
      },
      secondary: {
        main: '#6d1b7b',
      }, 
    },
  });
  
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
      <Switch>
      <Route path='/' exact component={Home}></Route>
        <Route path='/Lista' component={ListaDeDesejos}></Route>
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
