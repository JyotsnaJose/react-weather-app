import React, { useState } from "react";
import "./Description.css";
import axios from "axios";

export default function Description(props) {
  let [description, setDescription] = useState(null);
  let city = props.city;
  let apiKey = "77284b6440cc462afb48cef654bc731c";
  let units = "metric";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;

  axios.get(apiUrl).then(displayWeather);

  function displayWeather(response) {
    setDescription(response.data.weather[0].description);
  }

  return (
    <div className="Description">
      <h6 id="description">{description}</h6>
    </div>
  );
}
