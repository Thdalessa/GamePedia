import React, { useState } from "react";
import styles from './SearchBar.module.css'

export default function SearchBar({onSearch}) {

    const handleSubmit = (e) => {
        e.preventDefault();
       
    }
    
    const handleInputChange = function(){

    }

  return (
    <form onSubmit={handleSubmit} >
      <input
        type="text"
        name="search"
        className={styles.searchBar}
        placeholder="Buscar..."
        // value={search}
        onChange={(e) => handleInputChange(e)}
      />
      <input type="submit" value="Buscar"/>
    </form>
  );
}