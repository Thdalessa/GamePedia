import React from 'react';


export default function Button({icon, onClick, estilo}){

    return (
        <button type="submit" value="Buscar" className={estilo && estilo.button} onClick={onClick}>
            {icon && <div className={estilo && estilo.icon}>{icon}</div>}
        </button>
    )
}