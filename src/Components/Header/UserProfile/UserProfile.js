import React from 'react';
import classes from './UserProfile.module.css';

const userProfile = (props) => (
    <div className={classes.UserProfile}>
        <div className={classes.NameBar}>
            <p>Good Day!</p>
            <p><strong><span>{props.firstName} </span><span>{props.lastName}</span></strong></p>
        </div>
        <img src={props.profilePicture} alt="user's face"/>
    </div>
);

export default userProfile;