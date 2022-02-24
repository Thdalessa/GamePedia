import React from 'react';
import { Link } from "react-router-dom";
import styles from './ToHomeButton.module.css';



function ToHomeButton() {

    return (
        // <button className='homeButton' onClick={routeChange()}>Press Start</button>
        <Link to='/home' className={styles.homeButton}><h3 className={styles.linkToHome}>Press Start</h3></Link>
    );
};

export default ToHomeButton;