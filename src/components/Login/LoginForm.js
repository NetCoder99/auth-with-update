import React, { useState, useRef, useContext } from "react";
import axios from "axios";

import classes from "./LoginForm.module.css";

import AppButton from "../Common/AppButton";
import AppInput from "../Common/AppInput";
import LoginContext from "../../data/LoginContext";
import {LoginApi} from '../../data/LoginApi';

// ----------------------------------------------------------------------------
const LoginForm = (props) => {
  const LoginCtx = useContext(LoginContext);

  const versionUrl = "http://localhost:8081/version2";
  const loginUrl = "http://127.0.0.1:8081/login";

  const userIdRef = useRef();
  const passIdRef = useRef();

  const [postData, setPostData] = useState();
  const [hasError, setError] = useState(false);
  const [isLoading, setLoading] = useState(false);

  const userIdParms = {
    id: "userIdInput",
    type: "text",
    defaultValue: "vs001@cox.net",
  };
  const passIdParms = {
    id: "passIdInput",
    type: "password",
    defaultValue: "ksksk111",
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log("LoginForm.handleSubmit");
    const creds = {
      userName: userIdRef.current.value,
      passWord: passIdRef.current.value,
    };

    setError(false);
    setLoading(true);
    LoginCtx.setToken(null);

    //LoginApi(creds, setError, setLoading);

    const postConfig = {
      url: "http://127.0.0.1:8081/login",
      method: "post",
      data: creds,
      headers: {
        "headerKey": "vs001@cox.net",
        "Content-Type": "application/json",
      },
    };
    axios(postConfig)
      .then((response) => {
        console.log("LoginForm.handleSubmit.axios:" + response.data.token);
        LoginCtx.setToken(response.data.token);
        LoginCtx.setMessage("Success");
        setError(false);
        setLoading(false);
      })
      .catch((error) => {
        console.log("LoginForm.handleSubmit.axios.error:" + error);
        LoginCtx.setToken(null);
        LoginCtx.setMessage(error.response.data.message);
        setError(true);
        setLoading(false);
      });


    };

  return (
    <form onSubmit={handleSubmit}>
      <div className={classes.login}>
        <h2>Login to the Application</h2>
        <hr></hr>
        <div className={classes.centerInputs}>
          <AppInput
            label="User Id:"
            input={userIdParms}
            ref={userIdRef}
          ></AppInput>
          <AppInput
            label="Password:"
            input={passIdParms}
            ref={passIdRef}
          ></AppInput>
        </div>

        {!isLoading && <AppButton onClick={handleSubmit}>Submit</AppButton>}
        {isLoading && (
          <AppButton onClick={handleSubmit} disabled={true}>
            Processing...
          </AppButton>
        )}

        <div></div>
        {!hasError && (
          <label className={classes.success}>{LoginCtx.token}</label>
        )}
        {hasError && (
          <label className={classes.error}>{LoginCtx.message}</label>
        )}
      </div>
    </form>
  );
};

export default LoginForm;
