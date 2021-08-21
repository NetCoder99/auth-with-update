import { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
import classes from './MainNavigation.module.css';
import LoginContext from '../../data/LoginContext';

const MainNavigation = (props) => {
  console.log("MainNavigation.init");
  const history = useHistory();
  const LoginCtx = useContext(LoginContext);
  const displayName = LoginCtx.userName || "Logout"

  const logoutHandler = (event) => { 
    console.log("MainNavigation.logoutHandler");
    LoginCtx.setToken(null);
    history.replace("/");
  };

  return (
    <header className={classes.header}>
      <Link to='/'>
        <div className={classes.logo}>React Auth</div>
      </Link>
      <nav>
        <ul>
          <li>
            {LoginCtx.isLoggedIn &&<Link to='/search'>Search</Link>} 
          </li>
          <li>
            {LoginCtx.isLoggedIn &&<Link to='/reports'>Reports</Link>} 
          </li>
          <li>
            {LoginCtx.isLoggedIn &&<Link to='/dashboard'>Dashboard</Link>} 
          </li>
          <li>
            {LoginCtx.isLoggedIn &&<Link to="" onClick={logoutHandler}>{displayName}</Link>} 
            {!LoginCtx.isLoggedIn &&<Link to='/login'>Login</Link>} 
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
