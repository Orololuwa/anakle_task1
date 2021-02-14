import React from 'react';

import classes from './AuxButton.module.css';

const auxButton = (props) => (
    <button className={classes.AuxButton} name={props.buttonName}>
        {props.children}
    </button>
);

export default auxButton;