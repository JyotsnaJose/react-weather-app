import React from "react";
import "./City.css";

export default function City(props) {
  return (
    <div className="City">
      <h1 id="cityName">{props.value}</h1>
    </div>
  );
}
