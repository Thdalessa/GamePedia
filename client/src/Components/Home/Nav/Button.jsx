import React from 'react';
import { Link } from 'react-router-dom';


export default function Button({icon, onClick, estilo, where}){

    return (
        <button type="submit" value="Buscar" className={estilo && estilo.button} onClick={onClick}>
            {icon && <Link to={where?where:''} className={estilo && estilo.icon}>{icon}</Link>}
        </button>
    )
}