import React from 'react';
import classes from './Search.module.css';

import SearchForm from './SearchForm';

import CustomersTable from '../Tables/CustomersTable';
import UsersTestData from '../../data/GetTestData';

const Search = () => {
  //console.log("Search");
  return(
      <div className={classes.search}>
        <h3>Search For Customers:</h3>
        <SearchForm></SearchForm>
        <CustomersTable usersListData={UsersTestData}></CustomersTable>
      </div>
  );
}

export default Search;
