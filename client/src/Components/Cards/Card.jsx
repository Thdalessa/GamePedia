import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Card.module.css';

export default function Card (props){
    
    return (
        
        <Link to={{pathname:`/home/videogameDetail/${props.props.id}`, id:props.props.id}} className={styles.divLink} >
            <div key={props.props.id} className={styles.cardContainer} >
                <div className={styles.imageContainer}>
                <img src={props.props.background_image} alt='game_image' className={styles.gameImage}/>
                </div>
                <div className={styles.infoContainer}>
                    <h1 className={styles.name}>{props.props.name}</h1>
                    <ul className={styles.genres}>
                        {props.props.genres?.map((genre)=> {
                            return <li key={props.props.genres.id} className={styles.genre}>{genre.name}</li>
                        })}
                    </ul>
                </div>
            </div>
        </Link>
    )
}