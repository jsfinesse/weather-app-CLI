const request = require("postman-request");

const geocode = require("./utils/geocode");
const forecast = require("./utils/forecast");

geocode("mumbai", (error, data) => {
    console.log("Error", error);
    console.log("Data", data);
});

forecast(18.9666, 72.8333, (error, data) => {
    console.log("Error", error);
    console.log("Data", data);
})