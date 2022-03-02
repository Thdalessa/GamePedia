
import axios from "axios";

export const SEARCH_GAME ='SEARCH_GAME';
export const GET_GAMES = 'GET_GAMES';
export const GET_GAMES_BY_NAME = 'GET_GAMES_BY_NAME ';
export const SORT_GAMES = 'SORT_GAMES';
export const FILTER_GAMES_BY_GAMES = 'FILTER_GAMES_BY_GAMES';
export const FILTER_GAMES_BY_GENRE = 'FILTER_GAMES_BY_GENRE';
export const GET_GENRES = 'GET_GENRES';
export const GET_GAME_BY_ID = 'GET_GAME_BY_ID';
export const GET_PLATFORMS = 'GET_PLATFORMS'
export const POST_GAME = 'POST_GAME'

export function getGames(){
    return async function(dispatch){
        let data = await axios.get('http://localhost:3001/api/videogames/' )
            try {
                dispatch({
                    type:GET_GAMES,
                    payload: {
                        results: data.data.results,
                    }
                })
            } catch(error) {
                console.log(error);
            }
    }
}

export function getGamesbyName(name){
    return function(dispatch){
        axios.get('http://localhost:3001/api/videogames?name=' + name)
            .then((games) => {
                // console.log(games.data.results)
                dispatch({
                    type:GET_GAMES_BY_NAME,
                    payload:games.data.results
                })
            })
            .catch((error) => {
                console.log(name)
                console.log(error);
            })
    }
}

export function sortGames(order){
    return {
        type: SORT_GAMES,
        payload: order
    }
}

export function filterGamesbyGames(filter){
    return {
        type: FILTER_GAMES_BY_GAMES,
        payload: filter
    }
}

export function filterGamesbyGenre(filter){
    return {
        type: FILTER_GAMES_BY_GENRE,
        payload: filter
    }
}

export function getGenres(){
    return function(dispatch){
        axios.get('http://localhost:3001/api/genres/')
            .then((genres) => {
                dispatch({
                    type:GET_GENRES,
                    payload:genres.data
                })
            })
            .catch((error) => {
                console.log(error);
            })
    }
}

export function getGameById(id){
    return function(dispatch){
        axios.get('http://localhost:3001/api/videogames/' + id)
            .then((videogame) => {
                console.log('videogame in actions: ' )
                console.log(videogame)
                dispatch({
                    type:GET_GAME_BY_ID,
                    payload:videogame.data
                })
            })
            .catch((error) => {
                console.log(error);
            })
    }
}

export function getPlatforms(){
    return function(dispatch){
        axios.get('http://localhost:3001/api/platforms/')
            .then((platforms) => {
                dispatch({
                    type:GET_PLATFORMS,
                    payload:platforms.data
                })
            })
            .catch((error) => {
                console.log(error);
            })
    }
}

export function postGame(data){
    return function(dispatch){
        axios.post('http://localhost:3001/api/videogames/', data)
            .then((response) => {
                console.log(response)
                dispatch({
                    type:POST_GAME,
                    payload:response.data
                })
            })
            .catch((error) => {
                console.log(error)
            })
    }

}


