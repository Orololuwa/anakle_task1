import React from 'react';

import ShoppingBag  from '../../../img/ShoppingBag.svg';
import classes from './ShoppingCart.module.css';

const shoppingCart = (props) => {
    return(
        <div className={classes.ShoppingCart}>
            <p><span>$</span>{props.cartPrice}</p>
            <i><img src={ShoppingBag} alt="shopping bag icon"/></i>
        </div>
    );
}

export default shoppingCart;