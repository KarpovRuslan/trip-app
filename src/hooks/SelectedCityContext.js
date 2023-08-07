import React, { createContext, useContext, useState } from "react";

const SelectedCityContext = createContext();

export const SelectedCityProvider = ({ children }) => {
  const [selectedCity, setSelectedCity] = useState(null);
  const [tripStartDate, setTripStartDate] = useState("10.08.2023");
  const [tripEndDate, setTripEndDate] = useState("10.08.2023");

  return (
    <SelectedCityContext.Provider
      value={{
        selectedCity,
        setSelectedCity,
        tripStartDate,
        setTripStartDate,
        tripEndDate,
        setTripEndDate,
      }}
    >
      {children}
    </SelectedCityContext.Provider>
  );
};

export const useSelectedCity = () => {
  return useContext(SelectedCityContext);
};
