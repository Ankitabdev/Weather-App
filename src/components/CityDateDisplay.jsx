import React from "react";

function CityDateDisplay({ data }) {
  // Convert the current date to a more readable format
  const date = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="container">
      <div>
        <p className="location">{data.name}</p> {/* Display city name */}
        <p className="SecondaryText">{date}</p> {/* Display formatted date */}
      </div>
    </div>
  );
}

export default CityDateDisplay;