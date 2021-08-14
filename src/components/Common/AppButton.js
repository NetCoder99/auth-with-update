import classes from './AppButton.module.css';

const AppButton = (props) => {
    console.log("AppButton");
    return (
        <button 
            className={classes.AppButton} 
            onClick={props.onClick}
            disabled={props.disabled}
        >
            {props.children}
        </button>
    );
};

export default AppButton;
