import React, { useState } from 'react'
import "./Header.css"
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import OfflineBoltIcon from '@material-ui/icons/OfflineBolt';
import ForumIcon from '@material-ui/icons/Forum';
import PeopleIcon from '@material-ui/icons/People';
import { IconButton } from '@material-ui/core';
const Header = () => {


    return (
        <div className="header">
            <div className="header__left">
                <IconButton>
                    <AccountCircleIcon fontSize="large" className="header__icon" />
                </IconButton>
                <IconButton>
                    <OfflineBoltIcon fontSize="large" className="header__icon" />
                </IconButton>
            </div>
            <div className="header__center" >
                <img
                    className="header__logo"
                    src="https://seeklogo.com/images/T/tinder-logo-FAAE852EC0-seeklogo.com.png"
                    alt=""
                />
            </div>
            <div className="header__right">
                <IconButton>
                    <ForumIcon fontSize="large" className="header__icon" />
                </IconButton>
                <IconButton>
                    <PeopleIcon fontSize="large" className="header__icon" />
                </IconButton>
            </div>
        </div>
    )
}

export default Header;
