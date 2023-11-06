import React from "react";
import classes from "./MyButtonChange.module.css";

export const MyButtonChange = ( props ) => {
    return (
        <button className={classes.myButtonChange} onClick={props.onClick} >Change</button>
    );
};