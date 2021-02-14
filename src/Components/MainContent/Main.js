import React from 'react';

import MainLeft from './MainLeft/MainLeft';
import MainRight from './MainRight/MainRight';

import classes from './Main.module.css';

const main = (props) => {
    return(
        <div className={classes.Main}>
            <MainLeft />
            <MainRight 
                laptop={props.laptop}
                colorChange={props.colorChange}
                specChange={props.specChange}
            />
        </div>
    );
}

export default main;