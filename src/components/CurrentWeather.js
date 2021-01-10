import "./CurrentWeather.css";
const CurrentWeather = ({current}) => {
  return (
    <div className="currentWeather shadow-5">
      <h2>
        {current.city} ({current.date}){" "}
        <span>
          <img
            src={"http://openweathermap.org/img/wn/" + current.icon + "@2x.png"}
            alt="icon"
          />
        </span>
      </h2>
      <br></br>
      <p>Temperature: {current.temp}</p>
      <p>Humidity: {current.humidity}</p>
      <p>Wind Speed: {current.windSpeed}</p>
      <p>UV Index: <span>{current.uv}</span></p>
    </div>
  );
};

export default CurrentWeather;
