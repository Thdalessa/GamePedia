import React from 'react';
import styles from './LandingTitle.module.css';

function LandingTitle() {
    return (
         <div className={styles.TitleContainer} >
             <h1 className={styles.Title}>GamePedia Project</h1>
             <h3 className={styles.Subtitle}>Henry's Bootcamp Individual Project</h3>
         </div>

    );
};

export default LandingTitle;