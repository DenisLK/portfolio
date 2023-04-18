import React from 'react';
import classes from '../css/NavBar.module.css'
import {NavLink} from 'react-router-dom';

const NavBar = () => {
    return (
        <nav className={classes.navBar}>
            <ul>
                <li><NavLink to="/Container" className={({isActive}) =>
                    [classes.link, isActive ? classes.active : ''].filter(Boolean).join(' ')}>Profile</NavLink></li>
                <li><NavLink to="/Dialogs" className={({isActive}) =>
                    [classes.link, isActive ? classes.active : ''].filter(Boolean).join(' ')}> Messages</NavLink></li>
                <li><NavLink to="/News" className={({isActive}) =>
                    [classes.link, isActive ? classes.active : '',].filter(Boolean).join(' ')}>News</NavLink></li>
                <li><NavLink to="/Music" className={({isActive}) =>
                    [classes.link, isActive ? classes.active : ''].filter(Boolean).join(' ')}>Music</NavLink></li>
                <li><NavLink to="/Settings" className={({isActive}) =>
                    [classes.link, isActive ? classes.active : ''].filter(Boolean).join(' ')}>Settings</NavLink></li>
            </ul>
        </nav>
    )
}

export default NavBar