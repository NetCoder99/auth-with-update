import React, {useState} from 'react';

const LoginContext = React.createContext({
    token: '',
    message: '',
    isLoggedIn: false
});

export const LoginContextProvider = (props) => {
    console.log("LoginContextProvider");
    const initToken = localStorage.getItem('token');
    const [token,   setToken]    = useState(initToken);
    const [message, setMessage]  = useState('');
    const [userName, setUserName]  = useState('');

    const userLoggedIn = !!token;

    const setUserNameHandler  = (userName) => {
        console.log("LoginContextProvider.setuserNameHandler:"+userName);
        setUserName(userName);
    };
    
    const setMessageHandler  = (message) => {
        console.log("LoginContextProvider.setMessageHandler:"+message);
        setMessage(message);
    };

    const setTokenHandler = (token) => {
        console.log("LoginContextProvider.setTokenHandler:"+token);
        if (!token) {
            localStorage.removeItem("token");
            setToken(null);
        }
        else {
            localStorage.setItem("token", token);
            setToken(token);
        }
    };
    const contextValue = {
        token: token,
        userName: userName,
        message: message,
        isLoggedIn: userLoggedIn, 
        setToken: setTokenHandler,
        setMessage: setMessageHandler,
        setUserName: setUserNameHandler
    };
    return <LoginContext.Provider value={contextValue}>{props.children}</LoginContext.Provider>
};

export default LoginContext;

