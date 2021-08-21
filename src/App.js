import React, { useContext } from "react";

import { Switch, Route, Redirect } from "react-router-dom";
import "./App.css";

import PrivateRoute from './components/Common/PrivateRoute';
import LoginContext from "./data/LoginContext";

import Layout from "./components/Layout/Layout";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import SearchPage from "./pages/SearchPage";
import ReportsPage from "./pages/ReportsPage";
import DashboardPage from "./pages/DashboardPage";

function App() {
  const LoginCtx = useContext(LoginContext);
  console.log("App.token:" + LoginCtx.token);

  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
        <Route path="/login">
          <LoginPage />
        </Route>
        <PrivateRoute exact path="/search" component={SearchPage} />
        <PrivateRoute exact path="/dashboard" component={DashboardPage} />
        <PrivateRoute exact path="/reports" component={ReportsPage} />
        <Route path="*">
          <Redirect to="/" />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
