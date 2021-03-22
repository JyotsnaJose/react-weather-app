import React from "react";
import "./Search.css";

export default function Search() {
  return (
    <div className="Search">
      <form id="search" className="mb-3">
        <div className="input-group">
          <input
            type="search"
            className="form-control"
            id="search-input"
            placeholder="Search for a city..."
            autoComplete="off"
          />
          <button
            className="btn btn-outline-secondary searchButtons"
            type="submit"
            id="search-button"
          >
            <img
              src="/images/search.png"
              alt="search"
              className="button-icon"
            />
          </button>
          <button
            className="btn btn-outline-secondary searchButtons"
            type="button"
            id="location-button"
          >
            <img
              src="/images/location.png"
              alt="location"
              className="button-icon"
            />
          </button>
        </div>
      </form>
    </div>
  );
}
