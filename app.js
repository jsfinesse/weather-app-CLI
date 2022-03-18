const request = require("postman-request");

const url =
    "http://api.weatherstack.com/current?access_key=e36c996b692f30c75da1967a2325943d&query=New%20York";

request({ url: url, json: true }, (error, response) => {
    console.log(
        `Current temperature is ${response.body.current.temperature}. It feels like ${response.body.current.feelslike}`
    );
});
