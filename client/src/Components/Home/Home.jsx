import styles from './Home.module.css';

//Techs Imports
import React from "react";
import { Route, } from 'react-router-dom'
import { Switch } from 'react-router-dom'

//Components Imports
import Nav from './Constants/Nav'

export default function Home() {
    return (
        <div>
        <Nav/>
        <Switch>
            <Route exact path='/home'>   
                <div>
                    Home path
                </div>
            </Route>
            <Route path='/home/videogameDetail'>   
                <div>
                    Videogame Detail path
                </div>    
            </Route>
            <Route path='/home/videogameCreation'>   
                <div>
                    Videogame Creation path
                </div>  
            </Route>
        </Switch>
        </div>
    )
}