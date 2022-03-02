const db = require('../db');
const axios = require('axios');
const {REACT_APP_API_KEY} = process.env;

const mainPage = `https://api.rawg.io/api/games?key=${REACT_APP_API_KEY}`;

function getPlatforms (req,res,next){
    axios.get(`https://api.rawg.io/api/platforms/lists/parents?key=${REACT_APP_API_KEY}`)
    .then((platforms) => {
        // console.log(platforms.data.results);
        let plataformas =[];
        platforms.data.results.map((plataformaPadre)=>{
            console.log(plataformaPadre.platforms)
            plataformaPadre.platforms.map((plataformaHija)=>{
                plataformas.push({name: plataformaHija.name, id:plataformaHija.id})
            })
        })
        console.log(plataformas)
        res.status(201).send(plataformas)
    })
    .catch((error) => {
        console.log(error);
        res.status(404)
    })
}


module.exports = {
    getPlatforms,

}