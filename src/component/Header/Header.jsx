import React from "react";
import classes from "./Header.module.css";
import { Profile } from "./Profile/Profile";

export const Header = () => {
    return (
        <header className={classes.header}>
            <div className={classes.header__wrapper}>
                <h2>Awesome Kanban Board</h2>
                <Profile />
            </div>
        </header>
    );
};