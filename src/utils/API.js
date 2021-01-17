import axios from "axios";

const API = {
    getGeoLocation: async function(cityName) {
        return axios.get(`https://geocode.xyz/${cityName}?json=1&auth=610405802004470916946x35671`);
    },

    getWeatherData: async function(latitude, longitude) {
        return axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=minutely,hourly,alerts&appid=d8cebcf8331bd9f62eee21d496dc4a09&units=imperial`);
    },

    getFormattedDate: function(epochDate) {
        let date = new Date(epochDate * 1000);
        return date.getMonth() + 1 + "/" + date.getDate() + "/" + date.getFullYear();
    }
};

export default API;