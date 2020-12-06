const clima = require('./clima/clima');

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Dirección de la ciudad para consultar clima',
        demmand: true
    }
}).argv;

// const encodedUrl = encodeURI( argv.direccion );


const getInfo = async ( direccion ) => {

    try{
        const weather = await clima.getClima( argv.direccion );
        return `El clima en ${ weather.ciudad } es de ${ weather.temp }°C con sensación térmica de ${ weather.sens }°C`;
    } catch(e) {
        return `No se pudo encontrar el clima de ${ direccion }`
    }
}

getInfo( argv.direccion )
        .then( console.log )
        .catch( console.log );