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

  const searchWeatherData = (city) => {
    console.log("Searching for city", city);
    API.getWeatherData(city).then((resp) => {
      let { current, daily } = resp.data;
      setCurrentWeather(current);
      setForecast(daily);
      API.addCity(city).then((resAdd) => {
        setCityList(cityList.append(city));
      });
    });
  };

  useEffect(() => {
    API.getCities().then((res) => {
      setCityList(res.data);
    });

    API.getWeatherData(cityName).then((resp) => {
      let { current, daily } = resp.data;
      setCurrentWeather(current);
      setForecast(daily);
    });
  }, []);

  const handleCitySearch = (event) => {
    searchWeatherData(cityName);
  };

  return (
    <div>
    {/* <Header /> */}
      <div className="main-section">
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
    </div>
  );
}

export default App;
