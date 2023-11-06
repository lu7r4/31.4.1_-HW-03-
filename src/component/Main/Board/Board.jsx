import React from "react";
import { TaskColumn } from "./TaskColumn/TaskColumn";
import { useTasks } from "../../../hooks/tasks/use-tasks";

export const Board = () => {
    const {taskColumnStates} = useTasks();

    return (
        <>
            {taskColumnStates.map( (state) => 
                <TaskColumn key={state.id} name={state.name} state={state.state}/>
            )}
        </>
    );
};