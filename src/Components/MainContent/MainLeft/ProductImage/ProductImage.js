import React from 'react';

import ProductImage from '../../../../img/image1.png';

import classes from './ProductImage.module.css';

const productImg = () => (
    <div className={classes.ProductImage}>
        <img src={ProductImage} alt="Product Large" />
    </div>
);

export default productImg;