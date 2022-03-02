import React from 'react';
import styles from './Footer.module.css'

function Footer() {
    return (
        <footer className={styles.footer}>
            <h3 className={styles.footerTitle}>Individual Project of Henry's Bootcamp by Thiago D'Alessandro</h3>
            {/* <h4 className={styles.footerSubTitle}></h4> */}
        </footer>
    );
};

export default Footer;