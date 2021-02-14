import React from 'react';

import classes from './Menu.module.css';

const menu = () => (
    <div className={classes.Menu}>
        <ul>
            <li><a href="#">laptop</a></li>
            <li><a href="#">accessories</a></li>
            <li><a href="#">compare products</a></li>
            <li><a href="#">contact</a></li>
        </ul>
    </div>
);

export default menu;