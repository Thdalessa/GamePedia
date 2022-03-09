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
    function onClick (e) {
        e.preventDefault();
      }

    function BackHome (e) {
        e.preventDefault();
    }
    return (
        <nav className={styles}>
            <SearchBar/>
            <Link to='/home/videogameCreation'></Link>
            <Order/>
            <FilterByGame/>
            <FilterByGenre/>
            <Button icon={<IoIosAddCircleOutline/>} onClick={onClick} estilo={estilos} where={'/home/videogameCreation'}/>
            <Button icon={<AiFillHome/>} onClick={BackHome} estilo={estilosHome} where={'/home'}/>
        </nav>
    );
};

export default Nav;