import React, { useState } from "react";
import styles from './SearchBar.module.css'
import { useDispatch } from 'react-redux'
import { getGamesbyName } from "../../../Redux/actions";

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
      dispatch(getGamesbyName(e.target.value));
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
    </div>
  );
}