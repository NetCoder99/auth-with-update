//import { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
import classes from './MainNavigation.module.css';

const MainNavigation = (props) => {
  const history = useHistory();
  const logoutHandler = (event) => { 
    //AuthCtx.logout();
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
            <Link to='/dashboard'>Dashboard</Link>
          </li>
          <li>
            {<Link to='/login'>Login</Link>} 
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
