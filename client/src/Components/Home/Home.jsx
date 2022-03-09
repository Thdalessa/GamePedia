import styles from './Home.module.css';


//Techs Imports
import React from "react";
import { Route, Switch } from 'react-router-dom'
import { useSelector } from 'react-redux';


//Components Imports
import Nav from './Nav/Nav'
import Cards from '../Cards/Cards';
import Footer from './Footer';
import CardInDetail from './VideogameDetail/CardInDetail'
import AddVideogame from './VideogameCreation/AddVideogame';


export default function Home() {
    let videogames = useSelector((state) => state.filteredVideogames)
    

    return (
        <div className={styles.home}>
            <Nav/>
            <Switch>
                <Route exact path='/home'>   
                    <Cards gamesFromApi={videogames}/>
                </Route>
                <Route path='/home/videogameDetail/'>     
                    <CardInDetail/>
                </Route>
                <Route path='/home/videogameCreation'>   
                    <AddVideogame/>
                </Route>
            </Switch>
            <Footer/>
        </div>
    )
}