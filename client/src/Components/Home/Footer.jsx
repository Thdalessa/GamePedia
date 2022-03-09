import React from 'react';
import styles from './Footer.module.css'
import {AiFillLinkedin, AiFillGithub} from 'react-icons/ai'
// function Footer() {
//     return (
//         <footer className={styles.footer}>
//             <h3 className={styles.footerTitle}>Individual Project of Henry's Bootcamp by Thiago D'Alessandro</h3>
//         </footer>
//     );
// };


class Footer extends React.Component {
    render() {
    return <footer className={styles.footer}>
            <h3 className={styles.footerTitle}>Individual Project of Henry's Bootcamp by Thiago D'Alessandro</h3>
            <a className={styles.linkIcon} href='https://www.linkedin.com/in/thiagodalessandro/' target='_blank'><AiFillLinkedin/></a>
            <a className={styles.linkIcon} href='https://github.com/Thdalessa' target='_blank' ><AiFillGithub/></a>
            </footer>
    }
}

export default Footer;
