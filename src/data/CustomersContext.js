import React, {useState} from 'react';

const initData = [{
    "id":"" ,
    "first_name": "",
    "last_name": "",
    "email": "",
    "gender": "",
    "ip_address": ""
}];

const CustomersContext = React.createContext({

    data: initData,
    message: ''
});

export const CustomersContextProvider = (props) => {
    console.log("CustomersContextProvider");

    const [srchFlds,  setsrchFlds]  = useState();
    const [data,      setData]      = useState(initData);
    const [message,   setMessage]   = useState();
    const [error,     setError]     = useState();
    const [isLoading, setisloading] = useState(false);

    const setsrchFldsHandler  = (srchFlds) => {
        console.log("LoginContextProvider.setMessageHandler:"+srchFlds);
        setsrchFlds(srchFlds);
    };
    const setDataHandler  = (data) => {
        //console.log("LoginContextProvider.setMessageHandler:"+data);
        setData(data);
    };
    const setMessageHandler  = (message) => {
        console.log("LoginContextProvider.setMessageHandler:"+message);
        setMessage(message);
    };
    const setErrorHandler  = (error) => {
        console.log("LoginContextProvider.sethasErrorHandler:"+error);
        setError(error);
    };
    const setisloadingHandler  = (isLoading) => {
        console.log("LoginContextProvider.setisloadingHandler:"+isLoading);
        setisloading(isLoading);
    };

    const contextValue = {
        srchFlds:  srchFlds,  
        data:      data,      
        message:   message,   
        error:     error,     
        isLoading: isLoading, 
        setsrchFlds:  setsrchFldsHandler,
        setData:      setDataHandler,
        setMessage:   setMessageHandler,
        setError:     setErrorHandler,
        setisloading: setisloadingHandler
    };
    return <CustomersContext.Provider value={contextValue}>{props.children}</CustomersContext.Provider>
};

export default CustomersContext;

