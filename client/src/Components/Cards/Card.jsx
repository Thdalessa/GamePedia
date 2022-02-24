import React from 'react';
// import styles from './Card.module.css';

export default function Card (id, name, description, released, rating, genres, image){
    return (
        <div key={id}>
            <img src={image}/>
            <div>
                <h1>{name}</h1>
                <p>{description}</p>
                <h4>{released}</h4>
                <h4>{rating}</h4>
                <ul>
                    {genres.map((genre)=> <li>{genre}</li>)}
                </ul>
            </div>
        </div>
    )
}
