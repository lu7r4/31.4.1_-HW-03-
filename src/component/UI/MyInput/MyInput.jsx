import React from "react";
import classes from "./MuInput.module.css";

export const MyInput = ( props ) => {
    return (
        <div className={classes.myInput}>
            <input 
                onInput={props.onInput}
                onKeyDown={props.onKeyDown}
                autoFocus={props.autoFocus}
                type="text" />
        </div>
    );
};