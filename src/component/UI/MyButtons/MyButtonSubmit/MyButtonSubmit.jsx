import React from "react";
import classes from "./MyButtonSubmit.module.css";

export const MyButtonSubmit = ( props ) => {
    return (
        <button className={classes.myButtonSubmit} onClick={props.onClick}>Submit</button>
    );
};