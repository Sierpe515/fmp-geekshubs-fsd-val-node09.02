
const axios = require('axios');

const TraePersonajes = async () => {

    let resultado = await axios.get("https://rickandmortyapi.com/api/character");

    return resultado;
}

TraePersonajes()
    .then (
        res => {
            res.data.results.map(
                (personaje) => console.log(personaje.name)
            )
        }
    )
    .catch (
        error => console.log(error)
    )