import React, { useState, useEffect } from "react";

const CountdownTimer = ({ startDate }) => {
  const [daysLeft, setDaysLeft] = useState("");
  const [hoursLeft, setHoursLeft] = useState("");
  const [minutesLeft, setMinutesLeft] = useState("");
  const [secondsLeft, setSecondsLeft] = useState("");
  const [tripStarted, setTripStarted] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const start = new Date(startDate).getTime();
      const timeRemaining = start - now;

      if (timeRemaining > 0) {
        const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor(
          (timeRemaining % (1000 * 60 * 60)) / (1000 * 60)
        );
        const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

        setDaysLeft(`${days}`);
        setHoursLeft(`${hours}`);
        setMinutesLeft(`${minutes}`);
        setSecondsLeft(`${seconds}`);
        setLoading(false);
      } else {
        setTripStarted(true);
        setLoading(false);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [startDate]);

  return (
    <>
      {loading ? (
        <p className="loading__timer">Loading data...</p>
      ) : !tripStarted ? (
        <div className="side_bar--countdown">
          <p>
            {daysLeft} <span>days</span>
          </p>
          <p>
            {hoursLeft} <span>hours</span>
          </p>
          <p>
            {minutesLeft} <span>minutes</span>
          </p>
          <p>
            {secondsLeft} <span>seconds</span>
          </p>
        </div>
      ) : (
        <p className="side_bar--end">Trip has started!</p>
      )}
    </>
  );
};

export default CountdownTimer;
