import React from 'react';
import classes from './MyImage.module.css';

const MyImage = (props) => {
    return (props.url
            ? <div className={classes.imgContainer}>
                <img src={props.url} alt="No picture"/>
            </div>
            : <div className={classes.imgContainer}></div>
    )
};

export default MyImage;