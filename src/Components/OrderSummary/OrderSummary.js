import React from 'react';

import classes from './OrderSummary.module.css';

const orderSummary = (props) => {
    return (
        <div className={classes.OrderSummary}>
            <div className={classes.Title}><p>Order Summary</p></div>
            <div className={classes.Description}>
                <div className={classes.col1}>
                    <h3>Laptop Pro early 2019 with TouchBar</h3>
                    <p><span>{props.colorDesc}</span><span> | </span><span>{props.specDesc}</span></p>
                </div>
                <div className={classes.col2}>
                    <p>$2350.00</p>
                    <button>Add to Cart</button>
                </div>
            </div>
        </div>
    );
}

export default orderSummary;