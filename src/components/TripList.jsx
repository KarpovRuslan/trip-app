import React, { useState, useEffect, useRef } from "react";
import TripItem from "./TripItem";
import { HiPlus } from "react-icons/hi";
import { FcPrevious, FcNext } from "react-icons/fc";
import { useSelectedCity } from "../hooks/SelectedCityContext";

export const TripList = ({ trips, showModal }) => {
  const [isCarousel, setIsCarousel] = useState(false);
  const { setSelectedCity, setTripStartDate, setTripEndDate } =
    useSelectedCity();
  const [activeIndex, setActiveIndex] = useState(null);
  const [activeItem, setActiveItem] = useState(null);
  const carouselRef = useRef(null);

  useEffect(() => {
    setIsCarousel(trips.length > 3);
  }, [trips]);

  const handleTripClick = (selectedCity, tripStartDate, tripEndDate) => {
    setSelectedCity(selectedCity);
    setTripStartDate(tripStartDate);
    setTripEndDate(tripEndDate);
  };

  const handleItemClick = (index) => {
    setActiveItem(index);
  };

  const handleNextClick = () => {
    setActiveIndex((prevIndex) =>
      prevIndex + 3 >= trips.length ? prevIndex : prevIndex + 3
    );
  };

  const handlePrevClick = () => {
    setActiveIndex((prevIndex) => (prevIndex <= 0 ? prevIndex : prevIndex - 3));
  };

  return (
    <div className="trip-list__wrapper">
      <div className={`trip-list ${isCarousel ? "carousel" : ""}`}>
        <div className="carousel-container" ref={carouselRef}>
          <div className="carousel-buttons">
            <button
              className="carousel-prev"
              onClick={handlePrevClick}
              disabled={activeIndex === 0}
            >
              <FcPrevious />
            </button>
            <button
              className="carousel-next"
              onClick={handleNextClick}
              disabled={activeIndex + 3 >= trips.length}
            >
              <FcNext />
            </button>
          </div>
          <div className="carousel-track">
            {trips.slice(activeIndex, activeIndex + 3).map((trip, index) => (
              <div
                key={trip.id}
                className="carousel-item"
                onClick={() => {
                  handleTripClick(
                    trip.selectedCity,
                    trip.start,
                    trip.end,
                    trip.id
                  );
                }}
              >
                <TripItem
                  key={trip.id}
                  isActive={activeItem === index}
                  trip={trip}
                  onClick={() => {
                    handleItemClick(index);
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <button onClick={showModal} className="addTripBtn">
        <HiPlus style={{ marginBottom: "6px", marginTop: "10px" }} size={34} />
        Add trip
      </button>
    </div>
  );
};

export default TripList;
