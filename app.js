
const lugar = require('./lugar/lugar');
const clima = require('./clima/clima')

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Direccion de la ciudad para obtener el clima',
        demand: true
    }
}).argv;

//console.log(argv.direccion);
/* lugar.getLugarLatLng(argv.direccion)
                    .then(resp => console.log(resp))
                    .catch(error => console.log(error)); */
/* 
clima.getClima(-1.16017132420716, 1.16017132420716)
                .then(res => console.log(res))
                .catch(err => console.log(err)) */


const getInfo = async (direccion) => {

    try {
        const coords = await lugar.getLugarLatLng(direccion);
        const temp = await clima.getClima(coords.latitud, coords.longitud)
        return `El clima de ${coords.direccion} es de ${temp}.`;        
    } catch (e) {
        return `No se pudo determinar el clima de ${direccion}`;
    }
}    
    

getInfo(argv.direccion)
    .then(console.log)
    .catch(console.log)