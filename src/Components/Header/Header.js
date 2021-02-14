import React from 'react';

import Logo from './Logo/Logo';
import Menu from './Menu/Menu';
import ShoppingCart from './ShoppingCart/ShoppingCart';
import UserProfile from './UserProfile/UserProfile';

import classes from './Header.module.css';

const header = (props) => (
    <div className={classes.Header}>
        <div 
            style={{display: 'flex', flexDirection: 'row'}}
        >
            <Logo />
            <Menu />
        </div>
        

        <div
            style={{display: 'flex', flexDirection: 'row'}}
        >
            <ShoppingCart 
            cartPrice={props.totalPrice}
            />
            <UserProfile 
                firstName={props.firstName}
                lastName={props.lastName}
                profilePicture={props.profilePicture}
            />
        </div>   
    </div>
);

export default header;