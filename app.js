const lugar = require('./lugar/lugar.js');
const clima = require('./clima/clima.js');

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        descripcion: 'Direccion de la ciudad para obtner el clima',
        demand: true
    }
}).argv;


//Una funcion async regresa una promesa,
/*
lugar.getLugarLatLng(argv.direccion)
    .then(resultado => { console.log(resultado); }).catch(error => console.log(error));

clima.getClima(40.750000, -74.000000)
    .then(resultado => {
        console.log(resultado);
    }).catch(error => console.log(error));*/


const getInfo = async(direccion) => {

    try {
        const place = await lugar.getLugarLatLng(direccion);
        const weather = await clima.getClima(place.lat, place.long);
        return `El clima de (${place.direccion}, lat ${place.lat} long ${place.long}) es ${weather}`
    } catch (e) {
        return `No se pudo determinar el clima de ${direccion}`;
    }
}


getInfo(argv.direccion)
    .then(resultado => {
        console.log(resultado);
    })
    .catch(error => console.log(error));