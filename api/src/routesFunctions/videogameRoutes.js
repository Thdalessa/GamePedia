const {Videogame, Genre, VideoGenre} = require('../db');
const axios = require('axios');

const {Op} = require('sequelize')
const {REACT_APP_API_KEY} = process.env;
const {getGenres} = require('../routesFunctions/genreRoutes');

const mainPage = `https://api.rawg.io/api/games?key=${REACT_APP_API_KEY}`;

async function getAllVideogames( req, res, next){
    const {name} = req.query;

    try {
        let apiCall = [];
        let dbGames = undefined;
        async function awaitGames (){
            if(name){
                apiCall = await axios.get(`https://api.rawg.io/api/games?key=${REACT_APP_API_KEY}&search=${name}`);
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
                for(let i=2; i<7;i++){
                    let rawdata = await axios.get(`https://api.rawg.io/api/games?page=${i}&key=${REACT_APP_API_KEY}`)
                    rawdata.data.results.map((game) => {
                        apiCall.data.results.push(game)
                    })
                }
                dbGames = await Videogame.findAll({
                    include: {
                        model: Genre
                    }
                });
                console.log('no name path');
            }
        }

        await awaitGames();
        if(dbGames.length > 0){
            dbGames.map((game) => {
                apiCall.data.results.unshift(game)
            })
        }
        // console.log(apiCall.data.results);
        console.log(apiCall.data.results.length)
        if(apiCall.data.results.length < 1){
            res.status(404).send(`There is no game that starts with ${name}`);
        } else {
            res.status(201).send(apiCall.data);
        }
        
        
    } catch (error) {
        next(error); //next() is use here because it will send the error to the next middleware
                     // and that middleware is the one that handles errors
    } 
}


async function createVideogame (req, res, next) {
    const {name, description, background_image, released, rating, platforms, generos} = req.body;
    try {
        let newVideogame = await Videogame.create({name, description, released, rating, platforms, background_image});

        let generoooos = await Genre.findAll();
        let genresFromGame = generos.map((g) => {
            for(let i=0;i<generoooos.length;i++){
                if(generoooos[i].name === g){
                    return generoooos[i]
                }
            }
        })
        
        // genresFromGame.map((genre) => {
        //     console.log(genre.id)
        //    await newVideogame.addGenre(genre.id)
        // })
        for(let i=0; i<genresFromGame.length;i++){
            await newVideogame.addGenre(genresFromGame[i].id)
        }
        
        // console.log( await newVideogame.addGenre(4))
        let test = await Videogame.findAll({
            include: {
                model: Genre
            },
            where: {
                name: name
            }
        });
        console.log(test)
        res.status(201).send(test)
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
                let plataformas = apiCall.data.platforms.map((platform) => platform.platform.name)
                console.log(plataformas)
                let newGame = {
                    id: apiCall.data.id,
                    name: apiCall.data.name,
                    description: apiCall.data.description,
                    released: apiCall.data.released,
                    rating: apiCall.data.rating,
                    genres: apiCall.data.genres,
                    platforms: plataformas,
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





