import "./App.css";
import { useState } from "react";
import Header from "../components/Header";
import SearchBox from "../components/SearchBox";
import CurrentWeather from "../components/CurrentWeather";
import WeatherForecast from "../components/WeatherForecast";
import CityList from "../components/CityList";
import API from "../utils/API";
import { forecasts } from "../dummy/forecasts";
import { current } from "../dummy/current";
import { cities } from "../dummy/cities";

function App() {
  const [cityName, setCityName] = useState("");
  const [cityList, setCityList] = useState([]);
  const [currentWeather, setCurrentWeather] = useState({isPresent:false});
  const [forecast, setForecast] = useState([]);

  const handleCityChange = (event) => {
    setCityName(event.target.value);
  };

  const searchWeatherData = async (city) => {
    console.log("Searching for city", city);
    let geoLocationRes = await API.getGeoLocation(city);
    console.log(geoLocationRes)
    let weatherData = await API.getWeatherData(
      geoLocationRes.data.latt,
      geoLocationRes.data.longt
    );
    console.log(weatherData);
    setCurrentWeather({
      currentCityName: city,
      currentDate: API.getFormattedDate(weatherData.data.current.dt),
      currentImage: weatherData.data.current.weather[0].icon,
      currentTemp: weatherData.data.current.temp,
      currentHumidity: weatherData.data.current.humidity,
      currentWindSpeed: weatherData.data.current.wind_speed,
      uvIndex: weatherData.data.current.uvi,
      currentDesc: weatherData.data.current.weather[0].description,
      isPresent:true
    });
  };

  const handleCitySearch = (event) => {
    searchWeatherData(cityName);
  };

  return (
    <div>
      <Header />
      <div className="left-sections">
        <SearchBox
          cityName={cityName}
          handleChange={handleCityChange}
          handleSearch={handleCitySearch}
        />
        <CityList cityList={cities} />
      </div>
      <div className="right-sections">
        <CurrentWeather currentWeather={currentWeather} />

        <WeatherForecast forecasts={forecast} />
      </div>
    </div>
  );
}

export default App;
