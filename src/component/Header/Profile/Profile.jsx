import React, { useState } from "react";
import classes from "./Profile.module.css";
import { IconProfileAvatar } from "../../icons/IconProfileAvatar";
import { IconProfileArrow } from "../../icons/IconProfileArrow";

export const Profile = () => {
    const [showMenu, setShowMenu] = useState(false);

    return (
        <div onClick={() => setShowMenu(!showMenu)} className={classes.profileWrapper}>
            <div className={classes.profileIcon}>
                <IconProfileAvatar />
            </div>
            <div className={`${classes.profileArrow} ${showMenu? classes.profileArrowUp : ""}`}>
                <IconProfileArrow />
            </div>
            { showMenu && 
                <div className={classes.profileMenu}>
                    <div className={classes.profileMenu__square} />
                    <div className={classes.profileMenu__wrapper}>
                        <span>Profile</span>
                        <span>Log Out</span>
                    </div>
                </div>
            }
        </div>
    );
};