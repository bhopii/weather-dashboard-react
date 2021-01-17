import "./CurrentWeather.css";
const CurrentWeather = ({ currentWeather }) => {
  let uvStyle;
  if (currentWeather.uvIndex <= 2) {
    uvStyle = { backgroundColor: "green", color: "white" };
  } else if ((currentWeather.uvIndex >= 3) & (currentWeather.uvIndex <= 5)) {
    uvStyle = { backgroundColor: "yellow", color: "white" };
  } else if ((currentWeather.uvIndex >= 6) & (currentWeather.uvIndex <= 7)) {
    uvStyle = { backgroundColor: "orange", color: "white" };
  } else if ((currentWeather.uvIndex >= 8) & (currentWeather.uvIndex <= 10)) {
    uvStyle = { backgroundColor: "red", color: "white" };
  } else {
    uvStyle = { backgroundColor: "violet", color: "white" };
  }
  return (
    <div
      className={
        currentWeather.isPresent
          ? "show currentWeather shadow-5 container-fluid bg-white"
          : "hide"
      }
    >
      <h1>
        {currentWeather.currentCityName} ({currentWeather.currentDate}){" "}
        <span>
          <img
            src={
              "http://openweathermap.org/img/wn/" +
              currentWeather.currentImage +
              "@2x.png"
            }
            alt="icon"
          />
          {currentWeather.currentDesc.split(" ").map((word) => word[0].toUpperCase() + word.substring(1)).join(" ")}
        </span>
      </h1>
      <p>
        <b>Temperature:</b> {currentWeather.currentTemp} °F
      </p>
      <p>
        <b>Humidity:</b> {currentWeather.currentHumidity}%
      </p>
      <p>
        <b>Wind Speed:</b> {currentWeather.currentWindSpeed} MPH
      </p>
      <p>
        <b>UV Index:</b> <span style={uvStyle}>{currentWeather.uvIndex}</span>
      </p>
    </div>
  );
};

export default CurrentWeather;
