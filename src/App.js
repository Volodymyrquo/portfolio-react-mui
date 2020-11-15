import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Home from './components';
import CssBaseline from '@material-ui/core/CssBaseline';
import Resume from './components/Resume';

function App() {
  return (
    <>
      <CssBaseline />
      <Route exact path='/' component={Home} />
      <Route path='/resume' component={Resume} />
    </>
  );
}

export default App;
