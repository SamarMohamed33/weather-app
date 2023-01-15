import dateFormat from "dateformat";
import "../index.css";
function Days({ forecast }) {
  return (
    <>
      {forecast
        ? forecast.forecastday.map((day) => (
            <div
              className="day d-flex flex-row flex-sm-column align-items-center justify-content-around"
              key={day.date}
            >
              <p>{dateFormat(day.date, "dddd").slice(0, 3)}</p>
              <p className="fs-6 m-0 d-none d-sm-block">
                {day.day.condition.text}
              </p>
              <img src={day.day.condition.icon} alt="" />
              <p className="pt-2">
                <span>{Math.round(day.day.mintemp_c)}°/</span>
                <span>{Math.round(day.day.maxtemp_c)}°</span>
              </p>
            </div>
          ))
        : ""}
    </>
  );
}
export default Days;
