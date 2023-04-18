import React from 'react';
// import classes from '../css/Container.module.css'
import Profile from '../../Profile/js/Profile';
import Posts from '../../Posts/js/Posts';

const Container = (props) => {
    return (
        <div>
            <Profile />
            <Posts post={props.post} />

        </div>
    )
}

export default Container