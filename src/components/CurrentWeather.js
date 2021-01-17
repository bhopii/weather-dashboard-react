import "./CurrentWeather.css";
import API from "../utils/API";

const CurrentWeather = ({ current }) => {
  if (!current && Object.keys(current).length <= 0) {
    return null;
  }
  console.log(current);
  let uvStyle;
  if (current.uvi <= 2) {
    uvStyle = { backgroundColor: "green", color: "white", width: "20px" };
  } else if ((current.uvi >= 3) & (current.uvi <= 5)) {
    uvStyle = { backgroundColor: "yellow", color: "white" };
  } else if ((current.uvi >= 6) & (current.uvi <= 7)) {
    uvStyle = { backgroundColor: "orange", color: "white" };
  } else if ((current.uvi >= 8) & (current.uvi <= 10)) {
    uvStyle = { backgroundColor: "red", color: "white" };
  } else {
    uvStyle = { backgroundColor: "violet", color: "white" };
  }

  return (
    <div
      className={
        current
          ? "show currentWeather shadow-5 container-fluid bg-white"
          : "hide"
      }
    >
      <h1>
        {current.city} ({API.getFormattedDate(current.dt)}){" "}
        <span>
          <img
            src=""
            alt="icon"
          />
        </span>
      </h1>
      <p>
        <b>Temperature:</b> {current.temp} °F
      </p>
      <p>
        <b>Humidity:</b> {current.humidity}%
      </p>
      <p>
        <b>Wind Speed:</b> {current.wind_speed} MPH
      </p>
      <p>
        <b>UV Index:</b> <span style={uvStyle}>{current.uvi}</span>
      </p>
    </div>
  );
};

export default CurrentWeather;
