import React from "react";
import classes from "./TaskCard.module.css";
import { IconClose } from "../../../../icons/IconClose";
import { useNavigate } from "react-router-dom";

export const TaskCard = ( props ) => {
    const navigate = useNavigate();

    return (
        <div className={classes.tasks} onClick={() => navigate(`/tasks/${props.id}`)}>
            <p>{props.name}</p>
            <IconClose onClick={(e) => {
                    props.onRemove(props.id)
                    e.stopPropagation();
                }}
            />
        </div>
    );
};