import React from 'react';

import classes from './SpecificationCard.module.css';

import Selected from '../../../../../img/Selected.svg';


const specificationCard = (props) => {

    return(
        <label className={classes.AuxInput} onChange={props.change}>
            <input 
                type="radio" 
                value={`
                    ${props.screenSize}" ${props.diskSize} | ${props.processorSpeed} ${props.processorType} | ${props.RAM} ${props.diskSize} ${props.diskType} | 2 years warranty
                `} 
                name="specificationRadio">
            </input>
            <div className={classes.AuxButton}>
                <div className={classes.row1}>
                    <span>{`${props.screenSize}" ${props.diskSize}`}</span>
                    <i><img src={Selected} alt="selected icon" /></i>
                </div>
                <p className={classes.row2}>
                    <span>{props.processorSpeed}</span><span>{props.processorType}</span>
                </p>
                <p className={classes.row3}>
                    <span>{props.RAM} RAM</span> <span>{`${props.diskSize} ${props.diskType}`}</span>
                </p>
            </div>
        </label>
    );
}

export default specificationCard;