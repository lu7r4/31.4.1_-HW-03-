import React from "react";
import classes from "./MuButtonAdd.module.css";
import { IconPlus } from "../../../icons/IconPlus";

export const MyButtonAdd = ( props ) => {
    return (
        <button { ...props } className={classes.myButtonAdd}>
            <IconPlus />
            Add card
        </button>
    );
};