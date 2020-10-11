const axios = require('axios');


const getLugarLatLng = async (dir) => {

    
    const encodeUrl = encodeURI(dir);
    //console.log(encodeUrl);
    
    //peticion rest con AXIOS
    const instance = axios.create({
        baseURL: `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeUrl}.json`,
        params: {'access_token': 'pk.eyJ1IjoiZXN0dWFyZG9tYXlvcmdhIiwiYSI6ImNrZzVsY2dnejBxY2Qycm1mZ25mMjRxdjEifQ.y3klwW8epQpbes32lV8XwA'},
    })
    
    const resp =  await instance.get();

    if(resp.data.features == 0){
        throw new Error(`No hay resultados para ${dir}`);
    }

    const data = resp.data.features[0];
    const direccion = data.place_name
    const latitud = data.center[1];
    const longitud = data.center[0];

    return {
        direccion,
        latitud,
        longitud
    }

}

module.exports = {
    getLugarLatLng
}