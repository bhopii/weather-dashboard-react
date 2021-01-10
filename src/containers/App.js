import "./App.css";
import Header from "../components/Header";
import SearchBox from "../components/SearchBox";
import CurrentWeather from "../components/CurrentWeather";
import WeatherForecast from "../components/WeatherForecast";
import CityList from "../components/CityList";
import { forecasts } from "../dummy/forecasts";
import { current } from "../dummy/current";
import { cities } from "../dummy/cities";
import { TextField, Grid } from "@material-ui/core";

function App() {
  return (
    <div>
      <Header />
      <div className="left-sections">
        <SearchBox />
        <CityList cities={cities} />
      </div>
      <div className="right-sections">
        <CurrentWeather current={current} />

        <WeatherForecast forecasts={forecasts} />
      </div>
    </div>
  );
}

export default App;
