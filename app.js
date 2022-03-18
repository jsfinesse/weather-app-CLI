const request = require("postman-request");

const geocode = require("./utils/geocode");

// const url =
//     "http://api.weatherstack.com/current?access_key=e36c996b692f30c75da1967a2325943d&query=New%20York";

// request({ url: url, json: true }, (error, response) => {
//     if (error) {
//         console.log("Can't reach the servers!");
//     } else if (response.body.error) {
//         console.log("Specified location is not in our database");
//     } else {
//         console.log(
//             `Current temperature is ${response.body.current.temperature}. It feels like ${response.body.current.feelslike}`
//         );
//     }
// });

geocode("mumbai", (error, data) => {
    console.log("Error", error);
    console.log("Data", data);
});
