import DailyForecast from "./DailyForecast";

const WeatherForecast = ({ forecasts }) => {
  return (
    <div>
      {forecasts.map((dayForecast) => {
        return <DailyForecast 
            date = {dayForecast.date}
            icon = {dayForecast.icon}
            temp = {dayForecast.temp}
            humidity = {dayForecast.humidity}
        />;
      })}
    </div>
  );
};

export default WeatherForecast;
