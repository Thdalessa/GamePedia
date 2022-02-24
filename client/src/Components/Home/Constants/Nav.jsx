import React from 'react';
import styles from './Nav.module.css';
import { Link } from "react-router-dom";
import SearchBar from './SearchBar';

function Nav() {
    return (
        <nav className={styles}>
            <SearchBar/>
            <Link to='/home/videogameCreation'></Link>
            <span>Order by...</span>
            <span>Filter by...</span>
        </nav>
    );
};

export default Nav;