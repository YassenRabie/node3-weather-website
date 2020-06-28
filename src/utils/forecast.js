const request = require('request')

const forecast = (longitude, latitude, callback) => {
    const url = 'https://api.openweathermap.org/data/2.5/onecall?lat=' + latitude + '&lon=' + longitude + '&units=metric&exclude=hourly,daily&appid=acab20c54df52f149ac7ecd06aa05349'

    request({ url, json: true }, (error, { body }) => {

        if (error) {
            callback('Unable to connect to weather services!', undefined)
        } else if (body.cod) {
            callback('Unable to find location!', undefined)
        } else {
            callback(undefined, body.current.weather[0].description + 'It is currently ' + body.current.temp)
        }
    })
}

module.exports = forecast