import React from "react";
import classes from "./BigTaskCard.module.css";
import { IconClose } from "../../icons/IconClose.jsx"
import { useParams, useNavigate } from 'react-router-dom'
import { useTasks } from "../../../hooks/tasks/use-tasks";
import { useEffect, useState } from "react";
import { MyButtonChange } from "../../UI/MyButtons/MyButtonChange/MyButtonChange";
import { MyInput } from "../../UI/MyInput/MyInput";

export const BigTaskCard = () => {
    const navigate = useNavigate();
    const {getTaskById, updateTask} = useTasks();
    const {cardId} = useParams();
    const [task, setTask] = useState();
    const [inputDescription, setInputDescription] = useState("")

    useEffect(() => {
        if (cardId) {
            setTask(getTaskById(cardId))
        }
    }, [cardId])

    const navigateBack = () => {
        navigate(-1);
        updateTask(task);
    }

    const onSetTask = () => {
        if (inputDescription) {
            setTask({
                ...task,
                description: inputDescription
            })
        } else {
            setTask({
                ...task,
                description: "This task has no description"
            })
        }

        updateTask(task);
    }

    const onInputDescription = (e) => {
        setInputDescription(e.target.value);
    }

    const onPress = (e) => {
        if (e.key === "Enter") {
            onSetTask();
        }

        if (e.key === "Escape") {
            console.log("Escape press");
            navigateBack();
        }
    }

    return (
        <div className={classes.bigTaskCard}>
            {task &&
                <div className={classes.bigTaskCard__description}>
                    <h3>{task.name}</h3>
                    <p>{task.description}</p>
                    <MyInput
                        autoFocus={true}
                        onInput={onInputDescription}
                        onKeyDown={onPress}
                    />
                    
                    <MyButtonChange onClick={onSetTask}/>
                </div>
            }

            <IconClose onClick={navigateBack}/>     
        </div>
    );
};