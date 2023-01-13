import dateFormat from "dateformat";
import "../index.css";
function CurrentDay({ current, location, forecast }) {
  return (
    <>
      <div>
        <div className="display-6">
          <i className="bi bi-geo-alt-fill"></i>
          {location ? " " + location.name + ", " : ""}
          {location ? location.country : ""}
        </div>
        <div className="mt-2 mb-2">
          {forecast
            ? dateFormat(forecast.forecastday[0].date, "dddd, mmmm dS, yyyy")
            : ""}
        </div>
        <div>
          <img src={current ? current.condition.icon : ""} alt="" />
        </div>
        <div>{current ? current.condition.text : ""}</div>
      </div>
      <div className="temp">{current ? current.temp_c + "°" : ""}</div>
      <div className="d-flex flex-row justify-content-around flex-lg-column">
        <div>
          <i className="bi bi-thermometer-half me-2"></i>
          <p className="p-0 m-0 d-block d-lg-inline">
            Feels Like {current ? current.feelslike_c + "°" : ""}
          </p>
        </div>
        <div>
          <i className="bi bi-moisture me-2"></i>
          <p className="p-0 m-0 d-block text-center d-lg-inline">
            Humidity {current ? current.humidity : ""}
          </p>
        </div>
        <div>
          <i className="bi bi-wind me-2"></i>
          <p className="p-0 m-0 d-block d-lg-inline">
            Wind {current ? current.wind_kph + " Km/h" : ""}
          </p>
        </div>
      </div>
    </>
  );
}
export default CurrentDay;
