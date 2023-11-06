import React from "react";
import classes from "./Footer.module.css";
import { useTasks } from "../../hooks/tasks/use-tasks";

export const Footer = () => {
    const { getActiveTaskCount, getFinishedTaskCount } = useTasks();

    return (
        <footer className={classes.footer}>
            <div className={classes.footer__wrapper}>
                <div className={classes.footer__tasksWrapper}>
                    <span className={classes.activeTasks}>Active tasks: {getActiveTaskCount()}</span>
                    <span className={classes.finishedTasks}>Finished tasks: {getFinishedTaskCount()}</span>
                </div>
                <h2>Kanban board, 2023</h2>
            </div>
        </footer>
    );
};