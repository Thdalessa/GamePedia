import React from 'react';
import styles from './Nav.module.css';
import { Link, useHistory } from "react-router-dom";


import SearchBar from './SearchBar';
import Order from './Order';
import FilterByGame from './FilterByGame'
import FilterByGenre from './FilterByGenre'
import Button from './Button';

import estilos from './ButtonAddVideogame.module.css'
import { IoIosAddCircleOutline } from "react-icons/io";

import {AiFillHome} from 'react-icons/ai'
import estilosHome from '../VideogameDetail/ButtonBackHome.module.css'

function Nav() {
    const history = useHistory()
    function onClick (e) {
        e.preventDefault();
        history.push('/home/videogameCreation')
      }

    function BackHome (e) {
        e.preventDefault();
        history.push('/home')
    }
    return (
        <nav className={styles}>
            <SearchBar/>
            <Link to='/home/videogameCreation'></Link>
            <Order/>
            <FilterByGame/>
            <FilterByGenre/>
            <Button icon={<IoIosAddCircleOutline/>} onClick={onClick} estilo={estilos} />
            <Button icon={<AiFillHome/>} onClick={BackHome} estilo={estilosHome}/>
        </nav>
    );
};

export default Nav;