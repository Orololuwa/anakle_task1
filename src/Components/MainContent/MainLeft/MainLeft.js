import React from 'react';

import ProductImage from './ProductImage/ProductImage';
import Thumbnails from './Thumbnails/Thumbnails';

import classes from './MainLeft.module.css';

const mainLeft = () => {
    return(
        <div className={classes.MainLeft}>
            <ProductImage />
            <Thumbnails />
        </div>
    );
}

export default mainLeft;