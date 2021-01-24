import axios from "axios";

const API = {
  getCities: function () {
    return axios.get("http://localhost:8080/api/cities");
  },

  addCity: function (city) {
    return axios.put(`http://localhost:8080/api/cities/${city}`);
  },

  getWeatherData: function (cityName) {
    return axios.get(`http://localhost:8080/api/weather/${cityName}`);
  },

  getFormattedDate: function (epochDate) {
    let date = new Date(epochDate * 1000);
    return (
      date.getMonth() + 1 + "/" + date.getDate() + "/" + date.getFullYear()
    );
  },
};

export default API;
