const axios = require('axios');

const appId = 'Your API KEY here';

const getClima = async ( direccion ) => {

    let city = direccion;

    const instance = axios.create({
        baseURL: `http://api.openweathermap.org/data/2.5/`
    });

    const resp = await instance.get('/weather', {
        params: {
            q: city,
            appid: appId,
            units: 'metric'
        }
    });

    if ( resp.data.lentgh === 0 ) {
        throw new Error('No hay resultados para ', direccion);
    }

    const data = resp.data;
    
    // console.log(data);
    // data.coord => lon, lat
    // data.weather => id, main, description
    // data.main => temp, feels_like, temp_min, temp_max, pressure, humidity
    // data.wind => speed, deg
    // data.clouds
    // data.sys => id, country, sunrise, sunset

    const ciudad = data.name;
    const temp = data.main.temp;
    const sens = data.main.feels_like;

    return {
        ciudad,
        temp,
        sens
    }

}

module.exports = {
    getClima
}
