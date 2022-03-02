import React from 'react';
import styles from './CardInDetail.module.css';
import {useEffect} from 'react';
import {useDispatch, useSelector} from  'react-redux';
import { useLocation } from 'react-router-dom';
import { getGameById } from '../../../Redux/actions';
import parse from 'html-react-parser'

export default function CardInDetail (){
    const location = useLocation();
    let gameId = location.id;
    let videogame = useSelector((state)=> state.detailedVideogame)
    let dispatch = useDispatch()
    useEffect(() => {
        dispatch(getGameById(gameId))
    },[])
    console.log(typeof videogame.description === 'string' || videogame.description === undefined)


    return (
        <div key={videogame.id} className={styles.cardContainer} onClick={styles.wtf}>
            <div className={styles.imageContainer}>
                <img src={videogame.background_image || videogame.image} alt='game_image' className={styles.gameImage}/>
            </div>
                <h1 className={styles.name}>{videogame.name}</h1>
                <div className={styles.description}>{videogame.description && parse(videogame.description)}</div>
                <h4 className={styles.released}>Date of Release: {videogame.released}</h4>
                <h4 className={styles.rating}>Rating: {videogame.rating}</h4>

                <p className={styles.platforms}>
                    Plataformas: {videogame.platforms?.join(' - ')}
                </p>
                <p className={styles.genres}>
                    Generos: {videogame.genres?.map((genre) => { return genre.name }).join(' - ')}
                </p>
        </div>
        
        
    )
}
{/* <p className={styles.description}>Description: {videogame.description} </p> */}
//