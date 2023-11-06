import React from "react";
import classes from "./Main.module.css";
import { BigTaskCard } from "./BigTaskCard/BigTaskCard";
import { Board } from "./Board/Board";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Board/>
    },
    {
        path: "/tasks/:cardId",
        element: <BigTaskCard/>
    }
]);

export const Main = () => {

    return (
    <main className={classes.main}>
        <div className={classes.main__wrapper}>
            <RouterProvider router={router}/>
        </div>
    </main>
    );
};