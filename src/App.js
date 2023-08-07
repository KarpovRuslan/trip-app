import React, { useEffect, useState } from "react";

import Modal from "./components/Modal";
import InputField from "./components/InputField";
import TripList from "./components/TripList";
import RightSideBar from "./components/RightSideBar";
import { SelectedCityProvider } from "./hooks/SelectedCityContext";
import WeatherForecast from "./components/WeatherForecast";

function App() {
  const [filter, setFilter] = useState("");
  const [tours, setTours] = useState(
    !localStorage.getItem("tours")
      ? [
          {
            id: "id1",
            selectedCity: "London",
            start: "01.09.2023",
            end: "11.09.2023",
          },
          {
            id: "id2",
            selectedCity: "Madrid",
            start: "11.08.2023",
            end: "22.08.2023",
          },
        ]
      : JSON.parse(localStorage.getItem("tours"))
  );

  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const toursStorage = JSON.parse(localStorage.getItem("tours"));
    if (toursStorage) {
      setTours(toursStorage);
    }
  }, []);

  useEffect(() => {
    if (tours?.length) {
      localStorage.setItem("tours", JSON.stringify(tours));
    }
  }, [tours]);

  const handleDone = () => {
    setShowModal(false);
  };
  const handleCancel = () => {
    setShowModal(false);
  };

  const changeFilter = (event) => {
    setFilter(event.currentTarget.value);
  };

  const addTours = (data) => {
    setTours([data, ...tours]);
  };

  const getVisibleTours = () => {
    const filterNormalized = filter.toLowerCase();
    return tours.filter((tour) =>
      tour.selectedCity.toLowerCase().includes(filterNormalized)
    );
  };

  return (
    <SelectedCityProvider>
      <div className="container">
        <section
          style={{
            marginLeft: "30px",
            marginTop: "30px",
            flex: "65%",
          }}
        >
          <header className="header">
            <p style={{ fontSize: "28px" }}>
              Weather
              <span style={{ fontWeight: 700, fontSize: "28px" }}>
                {" "}
                Forecast
              </span>
            </p>
          </header>
          <InputField filter={filter} changeFilter={changeFilter} />
          <TripList trips={getVisibleTours()} showModal={setShowModal} />
          <div style={{ marginBottom: "30px" }}>
            <Modal
              showModal={showModal}
              handleDone={handleDone}
              handleCancel={handleCancel}
              onSubmit={addTours}
            />
          </div>

          <WeatherForecast />
        </section>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            flex: "25%",
          }}
        >
          <RightSideBar />
        </div>
      </div>
    </SelectedCityProvider>
  );
}

export default App;
