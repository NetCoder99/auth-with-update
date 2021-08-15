import React from 'react';
import classes from './Search.module.css';

import CustomersTable from '../Tables/CustomersTable';
import UsersTestData from '../../data/GetTestData';

const Search = () => {
  console.log("Search");

  return(
      <div className={classes.search}>
        <p>Search by type:</p>

        <CustomersTable usersListData={UsersTestData}></CustomersTable>
      </div>
  );
}

export default Search;
