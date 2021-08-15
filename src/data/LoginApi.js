import axios from "axios";

export function LoginApi(credentials, setToken, setMessage, setError, setLoading) {
    console.log("loginApi.credentials:" + credentials);

    const postConfig = {
        url: "http://127.0.0.1:8081/login",
        method: "post",
        data: credentials,
        headers: {
          "headerKey": "vs001@cox.net",
          "Content-Type": "application/json",
        },
      };
      axios(postConfig)
        .then((response) => {
          console.log("LoginForm.handleSubmit.axios:" + response.data.token);
          setToken(response.data.token);
          setMessage("Success");
          setError(false);
          setLoading(false);
        })
        .catch((error) => {
          console.log("LoginForm.handleSubmit.axios.error:" + error);
          setToken(null);
          setMessage(error.response.data.message);
          setError(true);
          setLoading(false);
        });

    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
    // axios
    //   .post(loginUrl, creds, { headers: { headerKey: "vs001@cox.net" } })
    //   .then((response) => {
    //     console.log("LoginForm.handleSubmit.axios:" + response.data.token);
    //     LoginCtx.setToken(response.data.token);
    //     setLoading(false);
    //   })
    //   .catch((error) => {
    //     console.log("LoginForm.handleSubmit.axios.error:" + error);
    //     console.log("LoginForm.handleSubmit.axios.error:" + error.response);
    //     LoginCtx.setToken(null);
    //     LoginCtx.setMessage(error.response.data.message);
    //     setError(true);
    //     setLoading(false);
    //   });

    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
    // const headers = { headerKey: "vs001@cox.net" };
    // axios
    //   .post(loginUrl, creds, { headers: headers })
    //   .then((response) => {
    //     console.log("LoginForm.handleSubmit.axios:" + response.data.token);
    //     LoginCtx.setToken(response.data.token);
    //     setError(false);
    //     setLoading(false);
    //   })
    //   .catch((error) => {
    //     console.log("LoginForm.handleSubmit.axios.error:" + error);
    //     console.log("LoginForm.handleSubmit.axios.error:" + error.response);
    //     LoginCtx.setToken(null);
    //     LoginCtx.setMessage(error.response.data.message);
    //     setError(true);
    //     setLoading(false);
    //   });

  
};    