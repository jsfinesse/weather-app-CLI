const request = require("postman-request");

const url =
    "http://api.weatherstack.com/current?access_key=e36c996b692f30c75da1967a2325943d&query=New%20York";

request({ url: url, json: true }, (error, response) => {
    if (error) {
        console.log("Can't reach the servers!");
    } else if (response.body.error) {
        console.log("Specified location is not in our database");
    } else {
        console.log(
            `Current temperature is ${response.body.current.temperature}. It feels like ${response.body.current.feelslike}`
        );
    }
});

const geocodeURL =
    "https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoianNmaW5lc3NlIiwiYSI6ImNsMHc2bnpvcjFlNnYzanFvZXpjemNmc3QifQ.e-59IbJarPkeqESCWTD1Nw&limit=1";

request({ url: geocodeURL, json: true }, (error, response) => {
    if (error) {
        console.log("Can't reach the servers!");
    } else if (response.body.features.length === 0) {
        console.log("Specified location is not in our database");
    } else {
        const latitude = response.body.features[0].center[1];
        const longitude = response.body.features[0].center[0];

        console.log(latitude, longitude);
    }
});
