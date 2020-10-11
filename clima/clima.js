
const axios = require('axios')


const getClima = async (lat, lon) => {

    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=9831a7354057b5c76cfed02422606668&units=metric`)

    return resp.data.main.temp
}



module.exports = {
    getClima
}