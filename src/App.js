import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Home, Resume, Portfolio, Contacts, Navbar, About } from './components';

function App() {
  return (
    <>
      <CssBaseline />
      <Navbar />
      <Route exact path='/' component={Home} />
      <Route path='/about' component={About} />
      <Route path='/resume' component={Resume} />
      <Route path='/portfolio' component={Portfolio} />
      <Route path='/contacts' component={Contacts} />
    </>
  );
}

export default App;
