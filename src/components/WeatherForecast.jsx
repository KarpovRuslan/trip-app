import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSelectedCity } from "../hooks/SelectedCityContext";
import { nanoid } from "nanoid";
const getWeatherIconUrl = require("../helpers/weatherIcons");

const WeatherForecast = () => {
  const [forecastData, setForecastData] = useState([]);
  const { selectedCity, tripStartDate, tripEndDate } = useSelectedCity();

  function formatDate(inputDate) {
    const parts = inputDate.split(".");
    const year = parts[2];
    const month = parts[1];
    const day = parts[0];

    const outputDate = year + "-" + month + "-" + day;
    return outputDate;
  }

  const formattedDateStart = formatDate(tripStartDate);
  const formattedDateEnd = formatDate(tripEndDate);

  const fetchWeatherForecast = async () => {
    try {
      const API_KEY = "8VTR6X7MUQRCK6S5XXF6CPJTD";
      const response = await axios.get(
        `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${selectedCity}/${formattedDateStart}/${formattedDateEnd}?key=${API_KEY}&contentType=json`
      );
      setForecastData(response.data.days);
    } catch (error) {
      console.error("Error:", error.response.data);
    }
  };

  useEffect(() => {
    if (selectedCity) {
      fetchWeatherForecast(selectedCity);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedCity]);

  return (
    <>
      <p className="week-block__title">Week</p>
      <div className="week-block">
        {forecastData
          ? forecastData.map((data) => {
              const date = new Date(data.datetime);
              const dayOfWeek = [
                "Sunday",
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday",
              ][date.getDay()];

              const iconUrl = getWeatherIconUrl(data.icon);

              return (
                <div key={nanoid()} className="week-block__wrapper">
                  <p className="week-block__weekday">{dayOfWeek}</p>
                  <img src={iconUrl} alt={data.icon} />
                  <div className="week-block__temp">
                    <p className="week-block__temp--max">
                      {((data.tempmax - 32) * (5 / 9)).toFixed(0)}
                      <span>°</span>
                    </p>
                    /
                    <p className="week-block__temp--min">
                      {((data.tempmin - 32) * (5 / 9)).toFixed(0)}
                      <span>°</span>
                    </p>
                  </div>
                </div>
              );
            })
          : ""}
      </div>
    </>
  );
};

export default WeatherForecast;
