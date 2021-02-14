import React from 'react';

import classes from './ColorCard.module.css';

import Selected from '../../../../../img/Selected.svg';

const colorCard = (props) => {

    return(
        <label className={classes.AuxInput} onChange={props.change}>  
            <input type="radio" value={props.color.label} name="colorRadio"></input>
            <div className={classes.AuxButton}>
                <div className={classes.ColorCard}>
                    <div className={classes[props.color.classe]}>&nbsp;</div>
                    <p>{props.color.label}</p>
                    <i><img src={Selected} alt="Selected icon" /></i>
                </div>
            </div>
        </label>
        
    );
}

export default colorCard;