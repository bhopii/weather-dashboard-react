const DailyForecast = (props) => {
  return (
    <div className="tc bg-blue dib br3 pa4 ma1 grow bw2 shadow-5 white">
      <div>
        <h3>{props.date}</h3>
        <img src={"http://openweathermap.org/img/wn/" + props.icon + "@2x.png"} alt="icon"/>
        <p>Min Temp: {props.tempMin} °F</p>
        <p>Max Temp: {props.tempMAx} °F</p>
        <p>Humidity: {props.humidity} %</p>
      </div>
    </div>
  );
};

export default DailyForecast;
