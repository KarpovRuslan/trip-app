import { useState, useEffect } from "react";
import axios from "axios";
import CountdownTimer from "./CountdownTimer";
import { useSelectedCity } from "../hooks/SelectedCityContext";
const getWeatherIconUrl = require("../helpers/weatherIcons");

const RightSideBar = () => {
  const [loaded, setLoaded] = useState(false);
  const [weatherData, setWeatherData] = useState({});
  const { selectedCity, tripStartDate } = useSelectedCity();
  const image = getWeatherIconUrl(weatherData.icon);

  useEffect(() => {
    if (selectedCity) {
      const API_KEY = "8VTR6X7MUQRCK6S5XXF6CPJTD";
      const API_URL = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${selectedCity}/today?unitGroup=metric&include=days&key=${API_KEY}&contentType=json`;

      axios.get(API_URL).then((response) => {
        setWeatherData({
          temperature: response.data.days[0].temp,
          icon: response.data.days[0].icon,
        });

        setLoaded(true);
      });
    }
  }, [selectedCity]);

  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  if (!selectedCity) {
    return <h2 className="loading"> </h2>;
  }

  if (loaded) {
    const [day, month, year] = tripStartDate.split(".");
    const dateObject = new Date(year, month - 1, day);
    const timestampMs = dateObject.getTime();
    return (
      <div className="side_bar">
        <h2>{daysOfWeek[new Date().getDay()]}</h2>
        <h1>
          <img className="side_bar-icon" src={image} alt={weatherData.icon} />
          {Math.round(weatherData.temperature)}
          <span>°C</span>
        </h1>
        <h4>{selectedCity}</h4>
        <CountdownTimer startDate={timestampMs} />
      </div>
    );
  }
  return <h2 className="loading">Loading...</h2>;
};
export default RightSideBar;
