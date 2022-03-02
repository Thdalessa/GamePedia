const {Videogame, Genre} = require('../db');
const axios = require('axios');
const db = require('../db');
const {REACT_APP_API_KEY} = process.env;

const mainPage = `https://api.rawg.io/api/games?key=${REACT_APP_API_KEY}`;

async function createGenresFromApi () {
    const apiCall = await axios.get(`https://api.rawg.io/api/genres?key=${REACT_APP_API_KEY}`)
    const apiGenres = apiCall.data.results;
    try {
        let generos =[];
        for(let i=0; i< apiGenres.length; i++){
            // console.log('generos:' + apiGenres)
            let genre = apiGenres[i];
            // console.log('genero: '+ genre)
            let newGenre = await Genre.create({
                id: genre.id,
                name: genre.name, 
            })
            generos.push(newGenre);
        }
        // console.log(generos)
        return (generos);
    } catch(error) {
        console.log(error);
    }
}

async function getGenres (req, res, next) {
    function reconditioningGenres (genres){
        genres.map((genre) => {
            return genre.dataValues
        })
    }
    try {
        let genres = await Genre.findAll();
        if(genres.length <=1){
            genres = await createGenresFromApi();
            reconditioningGenres(genres)
            res.send(genres);
        } else {
            reconditioningGenres(genres)
            res.send(genres);
        }
        console.log(genres)
    } catch(error) {
        next(error);
    }
}

// async function getGenreByNames (names) {
//     try {
//         results = [];
//         for(let i=0; i < names.length;i++){
//             result = await Genre.findAll({
//                 where: {
//                     name: names[i]
//                 }
//             })
//             results.push(result);
//         }
//         return results;
//     } catch(error) {
//         console.log(error);
//     }
// }

// async function postGenresFromApi (req, res, next) {
//     const apiCall = await axios.get(`https://api.rawg.io/api/genres?key=${REACT_APP_API_KEY}`)
//     const apiGenres = apiCall.data.results;

//     try {
//         let generos =[];
//         for(let i=0; i< apiGenres.length; i++){
//             // console.log('generos:' + apiGenres)
//             let genre = apiGenres[i];
//             // console.log('genero: '+ genre)
//             let newGenre = await Genre.create({
//                 id: genre.id,
//                 name: genre.name, 
//             })
//             generos.push(newGenre);
//         }
//         res.send(generos);
//     } catch(error) {
//         next(error);
//     }
// }


module.exports = {
    // postGenresFromApi,
    getGenres,
    // getGenreByNames
}