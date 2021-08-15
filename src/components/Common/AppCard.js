import React from 'react';
import classes from './AppCard.module.css'

const AppCard = (props) => {
    return (
        <div className={classes.AppCard }>
            {props.children}
        </div>
    )
};

export default AppCard;