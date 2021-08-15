import React from 'react';
import './AppCard.css';


const AppCard = (props) => {
    //console.log("AppCard.props:"+props.className);
    const classTemp = `${props.className}`;
    console.log("AppCard.classTemp:"+classTemp);

    return (
        //className={`AddUserCard ${props.className}`
        <div className={`${props.className}`} >
            {props.children}
        </div>
    )
};

export default AppCard;