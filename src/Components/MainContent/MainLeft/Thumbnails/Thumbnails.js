import React from 'react';

import Thumbnail from '../../../../img/image2.png';

import classes from './Thumbnail.module.css';

const thumbnails = () => {
    return(
        <div className={classes.Thumbnail}>
            <a href="#"><img src={Thumbnail} alt="thumbnail" /></a>
            <a href="#"><img src={Thumbnail} alt="thumbnail" /></a>
            <a href="#"><img src={Thumbnail} alt="thumbnail" /></a>
        </div>
    );
}

export default thumbnails;