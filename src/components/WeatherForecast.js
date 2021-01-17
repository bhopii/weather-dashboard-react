import DailyForecast from "./DailyForecast";
import API from "../utils/API";

const WeatherForecast = ({ forecasts }) => {
  return (
    <div>
      {forecasts.slice(0,5).map((dayForecast, index) => {
        return <DailyForecast 
            date = {API.getFormattedDate(dayForecast.dt)}
            icon = {dayForecast.weather[0].icon}
            tempMax = {dayForecast.temp.max}
            tempMin = {dayForecast.temp.min}
            humidity = {dayForecast.humidity}
            key = {index}
        />;
      })}
    </div>
  );
};

export default WeatherForecast;
