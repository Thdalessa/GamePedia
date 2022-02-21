const {Videogame, Genre} = require('../db');
const axios = require('axios');
const db = require('../db');
const {REACT_APP_API_KEY} = process.env;
const {getGenreByNames} = require('../routesFunctions/genreRoutes');
const { get } = require('express/lib/response');

const mainPage = `https://api.rawg.io/api/games?key=${REACT_APP_API_KEY}`;

async function getAllVideogames( req, res, next){
    const {name} = req.query;

    try {
        let apiCall = undefined;
        let dbGames = undefined;
        async function awaitGames (){
            if(name){
                apiCall = await axios.get(`https://api.rawg.io/api/games?page=1&key=${REACT_APP_API_KEY}&search=${name}`);
                dbGames = await Videogame.findAll({
                    include: {
                        model: Genre
                    },
                    where: {
                        name: {[Op.substring]: name}
                    },
                    
                });
            } else {
                apiCall = await axios.get(`https://api.rawg.io/api/games?page=1&key=${REACT_APP_API_KEY}`)
                dbGames = await Videogame.findAll({
                    include: {
                        model: Genre
                    }
                });
                console.log('else path');
            }
        }

        await awaitGames();
        const apiGames = apiCall.data.results;

        let cleanedGames = apiGames.map((game) => {
            let newGame = {
                id: game.id,
                name: game.name,
                description: game.description,
                released: game.released,
                rating: game.rating,
                genres: game.genres,
                // platforms: game.platforms,
                image: game.background_image,
            }
            return newGame
        });
        const allGames = [...dbGames,...cleanedGames].slice(0,15);
        if(allGames.length < 1){
            res.status(404).send(`There is no game that starts with ${name}`);
        } else {
            res.status(201).send(allGames);
        }
        
        
    } catch (error) {
        next(error); //next() is use here because it will send the error to the next middleware
                     // and that middleware is the one that handles errors
    } 
}


async function createVideogame (req, res, next) {
    const {name, description, released, rating, platforms, genres, image} = req.body;
    try {
        let newVideogame = await Videogame.create({name, description, released, rating, platforms, image});
        let searchedGenres = await getGenreByNames(genres);
        searchedGenres.map((genre) => {newVideogame.addGenre(genre[0].dataValues.id)})
        res.status(201).send(newVideogame)
    } catch (error) {
        next(error);
    }
}

async function getVidegameById (req, res, next) {
    const id = req.params.id;
    try {
        if(id.length < 7){
            apiCall = await axios.get(`https://api.rawg.io/api/games/${id}?key=${REACT_APP_API_KEY}`);
            if(apiCall.data.id == id){
                let newGame = {
                    id: apiCall.data.id,
                    name: apiCall.data.name,
                    description: apiCall.data.description,
                    released: apiCall.data.released,
                    rating: apiCall.data.rating,
                    genres: apiCall.data.genres,
                    // platforms: apiCall.data.platforms,
                    image: apiCall.data.background_image,
                }
                return res.status(201).send(newGame);
            } else {
                res.status(404).send('There is no game that matches the id')
            }
        } else {
            dbGame = await Videogame.findByPk(id, {
                include: {
                    model: Genre
                }
            }); 
            if(dbGame.dataValues.id === id) {
                return res.status(201).send(dbGame.dataValues)
            } else {
                res.status(404).send('There is no game that matches the id')
            }
        } 
    } catch (error) {
        next(error);
    }
}


module.exports = {
    getAllVideogames,
    createVideogame,
    getVidegameById
}



// server.put('/transfer', async (req, res) => {
//     const { idPlayer, codeTeam } = req.body;
//     const player = await Player.findByPk(idPlayer);
//     res.json(await player.addTeam(codeTeam));
//   });
  
//   server.put('/multipletransfer', async (req, res) => {
//     const { override } = req.query;
//     const { idPlayer, codeTeams } = req.body;
//     const player = await Player.findByPk(idPlayer);
//     if(override) return res.json(await player.setTeams(codeTeams))
//     res.json(await player.addTeams(codeTeams));
//   });





