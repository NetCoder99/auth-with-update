import axios from "axios";

export function CustomersApi(srchFlds, setData, setMessage, setError, setLoading) {
    console.log("Customers.srchFlds:" + srchFlds);

    //const postBody = {"srchFld1" : srchFlds};

    const postConfig = {
        url:     "http://127.0.0.1:8081/getCustomers",
        method:  "get",
        //data:    postBody,
        headers: {
          "headerKey":    srchFlds,
          "Content-Type": "application/json",
        },
      };
      axios(postConfig)
        .then((response) => {
          console.log("CustomersApi.axios.success:");  //+ response.data);
          setData(response.data);
          let recCount = -1;
          if (Array.isArray(response.data)) {
            recCount = response.data.length
          }

          setMessage("Rows returned:" + recCount);
          setError(false);
          setLoading(false);
        })
        .catch((error) => {
          console.log("CustomersApi.axios.error:" + error);
          setData(null);
          if (!error.response)  {
            setMessage("Customers fetch unknown failure.");    
          }
          else
          {
            if (error.response.data.status === 404){
                setMessage("Customers fetch URL not found.");    
            }
            else {
                setMessage(error.response.data.error);
            }
          }
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