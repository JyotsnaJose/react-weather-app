import React from "react";
import "./Description.css";

export default function Description(props) {
  return (
    <div className="Description">
      <h6 id="description">{props.value}</h6>
    </div>
  );
}
