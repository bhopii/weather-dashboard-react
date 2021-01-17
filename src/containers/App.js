import "./App.css";
import { useState, useEffect } from "react";
import Header from "../components/Header";
import SearchBox from "../components/SearchBox";
import CurrentWeather from "../components/CurrentWeather";
import WeatherForecast from "../components/WeatherForecast";
import CityList from "../components/CityList";
import API from "../utils/API";

function App() {
  const [cityName, setCityName] = useState("Atlanta");
  const [cityList, setCityList] = useState([]);
  const [currentWeather, setCurrentWeather] = useState({});
  const [forecast, setForecast] = useState([]);

  const handleCityChange = (event) => {
    setCityName(event.target.value);
  };

  const searchWeatherData = async (city) => {
    console.log("Searching for city", city);
    let { latt, longt } = (await API.getGeoLocation(city)).data;
    searchDataForGeoLocation(latt, longt);
  };

  const searchDataForGeoLocation = async (latt, longt, cityName) => {
    if (latt !== "0.00000" && longt !== "0.00000") {
      let { current, daily } = (await API.getWeatherData(latt, longt)).data;
      setCurrentWeather(current);
      setForecast(daily);
      setCityList(cityList.concat(cityName));
    }
  };

  useEffect(() => {
    if (localStorage.getItem("cities")) {
      setCityList(localStorage.getItem("cities"));
    } else {
      setCityList([]);
    }
  }, []);

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
        <CityList cityList={cityList} />
      </div>
      <div className="right-sections">
        <CurrentWeather current={currentWeather} />
        <WeatherForecast forecasts={forecast} />
      </div>
    </div>
  );
}

export default App;
