import React from "react";
import mockData from "../helpers/mockCitiesdata.json";

const TripItem = ({ trip, isActive, onClick }) => {
  if (trip !== []) {
    const image = mockData?.find((el) => el.name === trip.selectedCity).image;
    return (
      <div
        className={`trip-item ${isActive ? "active" : ""}`}
        onClick={onClick}
      >
        <img src={image} alt={trip.selectedCity} className="trip-item__image" />
        <div className="trip-bottom-block">
          <p className="trip-bottom-block__city">{trip.selectedCity}</p>
          <p className="trip-bottom-block__date">
            {trip.start}-{trip.end}
          </p>
        </div>
      </div>
    );
  }
};

export default TripItem;
