import React from 'react';

//import { useContext, Fragment } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import './App.css';

import {LoginContextProvider} from './data/LoginContext';
import Layout from './components/Layout/Layout';
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import DashboardPage from './pages/DashboardPage';

function App() {
  return (
    <LoginContextProvider>
    <Layout>
      <Switch>
        <Route path='/' exact>
          <HomePage />
        </Route>
        <Route path='/login'><LoginPage/></Route>
        <Route path='/dashboard'><DashboardPage/></Route>
        <Route path='*'>
          <Redirect to="/" />
        </Route>
      </Switch>
    </Layout>
    </LoginContextProvider>    
  );
}

export default App;
