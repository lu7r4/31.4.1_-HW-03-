import React from "react";
import classes from "./TaskColumn.module.css";
import { useState } from "react";
import { TaskCard } from "./TaskCard/TaskCard";
import { useTasks } from "../../../../hooks/tasks/use-tasks";
import { MyInput } from "../../../UI/MyInput/MyInput";
import { MyButtonAdd } from "../../../UI/MyButtons/MyButtonApp/MyButtonAdd";
import { MyButtonSubmit } from "../../../UI/MyButtons/MyButtonSubmit/MyButtonSubmit";
import { MySelect } from "../../../UI/MySelect/MySelect";

export const TaskColumn = ( props ) => {
    const [isNewTaskInputShown, setIsNewTaskInputShown] = useState(false);
    const [inputCardName, setInputCardName] = useState();

    const [isNewTaskSelectShown, setIsNewTaskSelectShown] = useState(false);
    const [selectedTaskId, setSelectedTaskId] = useState(undefined);

    const {getTasksByState, getTasksByExcludedState, addTask, moveTask, removeTask } = useTasks();

    const tasks = getTasksByState(props.state);
    const hasTasks = tasks.length > 0;

    const optionTasks = getTasksByExcludedState(props.state);
    const hasOptionTasks = optionTasks.length === 0;

    const onInputCard = (e) => {
        setInputCardName(e.target.value);
    }

    const addNewTask = () => {
        if (props.state === 'backlog') {
            setIsNewTaskInputShown(false)
            if(inputCardName) {
                addTask(inputCardName);
            }
            setInputCardName(undefined);
        } else {
            setIsNewTaskSelectShown(false);
            moveTask(selectedTaskId, props.state);
        }
    }       

    const onEnterPress = (e) => {
        if (e.key === "Enter") {
            addNewTask();
        }
    }

    return (
        <div className={classes.column}>
            <h3>{props.name}</h3>

            <div className={classes.tasks__wrapper}>

                {hasTasks && 
                    tasks.map((task) => 
                    <TaskCard 
                        key={task.id}
                        id={task.id}
                        name={task.name}
                        onRemove={(id) => {
                            removeTask(id);
                        }}
                    />)
                }

                {isNewTaskInputShown && 
                    <MyInput
                        autoFocus={true}
                        onInput={onInputCard}
                        onKeyDown={onEnterPress}
                    />
                }

                {isNewTaskSelectShown && 
                    <MySelect 
                        onChange={(e) => setSelectedTaskId(e.target.value)}
                        optionTask={getTasksByExcludedState(props.state)}
                    />
                }

                {(!isNewTaskInputShown && !isNewTaskSelectShown) &&
                    <MyButtonAdd 
                        disabled={hasOptionTasks}
                        onClick={() => props.state === 'backlog'
                            ? setIsNewTaskInputShown(true)
                            : setIsNewTaskSelectShown(true)
                        }
                    />
                }

                {(isNewTaskInputShown || isNewTaskSelectShown) &&
                    <MyButtonSubmit onClick={addNewTask}/>
                }
            </div>
        </div>
    );
};