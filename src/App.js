import React, { useState, useEffect } from "react";
import axios from "axios";
import CurrentDay from "./Components/CurrentDay";
import "./index.css";
import Days from "./Components/Days";

function App() {
  const [data, setData] = useState("");
  const [location, setLocation] = useState("cairo");
  const url = `https://api.weatherapi.com/v1/forecast.json?key=896ecf7b23954f45b7e140923231101&q=${location}&days=5&aqi=no&alerts=no
  `;
  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        console.log(response.data);
        setData(response.data);
        setLocation("");
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);
  function Search() {
    axios.get(url).then((response) => {
      setData(response.data);
      setLocation("");
    });
  }
  return (
    <div className="App vh-100 d-flex align-items-center justify-content-center">
      <div className="container d-grid rounded-2">
        <div className="row ">
          <div className="w-100 mx-auto align-self-center  text-center">
            <input
              type="text"
              className="rounded-2 w-75 form-control d-inline"
              value={location}
              onChange={(e) => {
                setLocation(e.target.value);
              }}
              placeholder="Enter Location"
            />
            <button
              type="button"
              className="btn btn-dark ms-3 mb-1"
              onClick={Search}
            >
              <i className="bi bi-search"></i>
            </button>
          </div>
        </div>
        <div className="row  row-col-1 row-cols-lg-3 text-center align-items-center border-bottom mb-3">
          <CurrentDay {...data} />
        </div>

        <div className="row row-cols-5 description text-center fs-4">
          <Days {...data} />
        </div>
      </div>
    </div>
  );
}

export default App;
