const request = require("postman-request");

const forecast = (latitude, longitude, callback) => {
    const url = `http://api.weatherstack.com/current?access_key=e36c996b692f30c75da1967a2325943d&query=${latitude},${longitude}`;

    request({ url: url, json: true }, (error, response) => {
        if (error) {
            callback("Can't reach the weather service!", undefined);
        } else if (response.body.error) {
            callback("Couldn't find the searched location", undefined);
        } else {
            callback(
                undefined,
                `${response.body.current.weather_descriptions[0]}. Current temperature is ${response.body.current.temperature}. It feels like ${response.body.current.feelslike}`
            );
        }
    });
};

module.exports = forecast;
