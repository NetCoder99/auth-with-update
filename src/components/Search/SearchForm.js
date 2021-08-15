import React, {  useRef, useContext } from "react";
import classes from "./SearchForm.module.css";
import CustomerContext from '../../data/CustomersContext';
import {CustomersApi}  from '../../data/CustomersApi';

import AppButton from "../Common/AppButton";

// ----------------------------------------------------------------------------
const SearchForm = (props) => {
    const customerCtx = useContext(CustomerContext);
    const srch1Ref = useRef();
    const srchFld1dParms = {
      id: "searchFld1",
      label: "Name:",
      type: "text",
      defaultValue: "Charlie",
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
      console.log("SearchForm.handleSubmit");
      customerCtx.setError(); 
      customerCtx.setisloading(true);
      CustomersApi(
          srch1Ref.current.value, 
          customerCtx.setData, 
          customerCtx.setMessage, 
          customerCtx.setError, 
          customerCtx.setisloading);

    };
  
    return (
      <form onSubmit={handleSubmit} >
        <div className={classes.search}>
            <label htmlFor={srchFld1dParms.id}>{srchFld1dParms.label}</label>
            <input {...srchFld1dParms} ref={srch1Ref}></input>

            {customerCtx.isLoading && (
                <AppButton onClick={handleSubmit} disabled={true}>
                    Processing...
                </AppButton>
            )}
            {!customerCtx.isLoading && (
                <AppButton>Search</AppButton>
            )}

            <div></div>
            {!customerCtx.isLoading && !customerCtx.error && (
              <label className={classes.success}>{customerCtx.message}</label>
            )}
            {!customerCtx.isLoading && customerCtx.error && (
              <label className={classes.error}>{customerCtx.message}</label>
            )}
        </div>
      </form>
    );
  };
  
  export default SearchForm;
  