import React from 'react';

import ColorCard  from './ColorCard/ColorCard';

import classes from './SelectColor.module.css';

const selectColor = (props) => {
    const colors = [...props.colors];

    

    return (
        <div className={classes.SelectColor}>
            <p><strong>Select color:</strong></p>
            <div className={classes.Cards}>
                {
                    colors.map(color => (
                        <ColorCard
                            color={color}
                            key={color.label}
                            change={props.change}
                        />
                    ))
                }
            </div>
        </div>
    );
};

export default selectColor;