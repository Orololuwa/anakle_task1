import React from 'react';

import classes from './MainRight.module.css';
import SelectColor from './SelectColor/SelectColor';
import SelectSpecification from './selectSpecification/SelectSpecification';

const mainRight = (props) => {
    return(
        <div className={classes.MainRight}>
            <div className={classes.TextBox}>
                <h1 className={classes.Heading}>
                    Laptop Pro 2019
                </h1>
                <p className={classes.Paragraph}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt labore.
                </p>
            </div>
            <SelectColor 
                colors={props.laptop.pro2019.colors}
                change={props.colorChange}
            />

            <SelectSpecification
                specifications={props.laptop.pro2019.specifications}
                change={props.specChange}
            />
        </div>
    );
}

export default mainRight;