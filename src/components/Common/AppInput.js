import React from "react";
import classes from './AppInput.module.css';

const AppInput = React.forwardRef ((props, ref) => {
    return (
        <div className={classes.AppInput}>
            <label htmlFor={props.input.id}>{props.label}</label>
            <input {...props.input} ref={ref}></input>
        </div>
        
    );
});

export default AppInput;
