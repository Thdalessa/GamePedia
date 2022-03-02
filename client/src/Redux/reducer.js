
import {GET_GAMES,GET_GAMES_BY_NAME,SORT_GAMES,FILTER_GAMES_BY_GAMES,FILTER_GAMES_BY_GENRE,GET_GENRES, GET_GAME_BY_ID, GET_PLATFORMS, POST_GAME} from './actions'

const initialState={
    videogames:[],
    filteredVideogames:[],
    detailedVideogame:[],
    genres:[],
    platforms:[],
}



export default function reducer(state=initialState, action){
    switch(action.type){
        case GET_GAMES:
            return {
                ...state,
                videogames:action.payload.results,
                filteredVideogames: action.payload.results,
            }
        case GET_GAMES_BY_NAME:
            return {
                ...state,
                filteredVideogames:action.payload
            }
        case SORT_GAMES:
            let orderedGames =[...state.videogames];
            if(action.payload === 'A-Z'){
                orderedGames.sort((a,b) => {
                    if(a.name < b.name){
                        return -1;
                    }
                    if(a.name > b.name){
                        return 1;
                    }
                    return 0
    
                })
            } else if(action.payload === 'Z-A'){
                orderedGames.sort((a,b) => {
                    if(a.name < b.name){
                        return 1;
                    }
                    if(a.name > b.name){
                        return -1;
                    }
                    return 0
    
                })
            } else if(action.payload === '1-5'){
                orderedGames.sort((a,b) => {
                    if(a.rating < b.rating){
                        return -1;
                    }
                    if(a.rating > b.rating){
                        return 1;
                    }
                    return 0
    
                })
            } else if(action.payload === '5-1'){
                orderedGames.sort((a,b) => {
                    if(a.rating < b.rating){
                        return 1;
                    }
                    if(a.rating > b.rating){
                        return -1;
                    }
                    return 0
    
                })
            }
            return {
                ...state,
                filteredVideogames: orderedGames
            }
        case FILTER_GAMES_BY_GAMES:
            let filteredGames = [...state.videogames];
            console.log('Filtered Game: ' + filteredGames[0].id)
            if(action.payload === 'database'){
                filteredGames = filteredGames.filter(game => typeof game.id === 'string');
            } else if(action.payload === 'api'){
                filteredGames = filteredGames.filter(game => typeof game.id === 'number');
            }
            return {
                ...state,
                filteredVideogames: filteredGames
            }
        case FILTER_GAMES_BY_GENRE:
            let filteredGames2 = [...state.videogames];
            let genres = [...state.genres]
            let gamesWithTheGenre = [];
            if(action.payload !== 'default'){
                for(let i=0; i<genres.length;i++){
                    if(action.payload === genres[i].name){
                        filteredGames2 = filteredGames2.forEach((game) => {
                            for(let i=0; i<game.genres.length;i++){
                                if(game.genres[i].name === action.payload){
                                    gamesWithTheGenre.push(game);
                                }
                            }
                        })
    
                    }
                }
            } else {
                gamesWithTheGenre = state.videogames
            }
            return {
                ...state,
                filteredVideogames:gamesWithTheGenre
            }
        case GET_GENRES:
            return {
                ...state,
                genres:action.payload
            }
        case GET_GAME_BY_ID:
            return {
                ...state,
                detailedVideogame: action.payload
            }
        case GET_PLATFORMS:
            return {
                ...state,
                platforms: action.payload
            }
        case POST_GAME:
            return {
                ...state, 
                filteredVideogames: [...action.payload] + [...state.filteredVideogames],
                videogames: [...action.payload].concat([...state.videogames]),
            }
        default:
            return state;
    }
}

