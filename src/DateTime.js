import React from "react";
import "./DateTime.css";

export default function DateTime(props) {
  return (
    <div className="DateTime">
      <h6 id="date-time">{props.value}</h6>
    </div>
  );
}
