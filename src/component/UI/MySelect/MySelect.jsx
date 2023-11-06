import React from "react";
import classes from "./MySelect.module.css";

export const MySelect = ( props ) => {
    const optionTask = props.optionTask;

    return (
        <div className={classes.mySelect}>
            <select onChange={props.onChange}>
                <option value=""></option>

                {optionTask.map((task) => 
                    <option key={task.id} value={task.id}>{task.name}</option>
                )}
            </select>
        </div>
    );
};