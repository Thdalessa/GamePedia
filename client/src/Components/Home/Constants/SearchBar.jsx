import React, { useState } from "react";
import styles from './SearchBar.module.css'
import { useDispatch } from 'react-redux'
import Button from "./Button";
import {GoSearch} from 'react-icons/go'
import { getGamesbyName } from "../../../Redux/actions";

import estilos from './Button.module.css';

export default function SearchBar() {
  const [search, setSearch] = useState('');
  let dispatch = useDispatch()


    function handleSubmit (e) {
      e.preventDefault();
      dispatch(getGamesbyName(search));
      // console.log('working?')
    }
    
    function handleInputChange (e){
      e.preventDefault();
      setSearch(e.target.value);
      // dispatch(getGamesbyName(search));
    }

  return (
    <div className={styles.searchContainer}>
      <input
        type="text"
        name="search"
        className={styles.searchBar}
        placeholder="Buscar..."
        value={search}
        onChange={(e) => handleInputChange(e)}
      />     
      <Button icon={<GoSearch/>} onClick={handleSubmit} estilo={estilos}/>
    </div>
  );
}