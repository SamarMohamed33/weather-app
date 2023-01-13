import dateFormat from "dateformat";
function Days({ forecast }) {
  return (
    <>
      {forecast
        ? forecast.forecastday.map((day) => (
            <div className="w-fit-content p-0" key={day.date}>
              <p>{dateFormat(day.date, "dddd").slice(0, 3)}</p>
              <p className="fs-6 h-25 m-0">{day.day.condition.text}</p>
              <img src={day.day.condition.icon} alt="" className="h-25" />
              <p className="fs-5 pt-2">
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
