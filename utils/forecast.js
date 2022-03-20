const request = require("postman-request");

require('dotenv').config();

const forecast = (latitude, longitude, callback) => {
    const url = `http://api.weatherstack.com/current?access_key=${process.env.FORECAST_KEY}&query=${latitude},${longitude}`;

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback("Can't reach the weather service!", undefined);
        } else if (body.error) {
            callback("Couldn't find the searched location", undefined);
        } else {
            callback(
                undefined,
                `${body.current.weather_descriptions[0]}. Current temperature is ${body.current.temperature}. It feels like ${body.current.feelslike}`
            );
        }
    });
};

module.exports = forecast;
