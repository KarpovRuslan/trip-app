module.exports = function getWeatherIconUrl(icon) {
  switch (icon) {
    case "rain":
      return "https://raw.githubusercontent.com/visualcrossing/WeatherIcons/main/PNG/4th%20Set%20-%20Color/rain.png";
    case "clear-day":
      return "https://raw.githubusercontent.com/visualcrossing/WeatherIcons/main/PNG/3rd%20Set%20-%20Color/clear-day.png";
    case "clear-night":
      return "https://raw.githubusercontent.com/visualcrossing/WeatherIcons/main/PNG/3rd%20Set%20-%20Color/clear-night.png";
    case "cloudy":
      return "https://raw.githubusercontent.com/visualcrossing/WeatherIcons/main/PNG/3rd%20Set%20-%20Color/cloudy.png";
    case "partly-cloudy-day":
      return "https://raw.githubusercontent.com/visualcrossing/WeatherIcons/main/PNG/3rd%20Set%20-%20Color/partly-cloudy-day.png";
    case "partly-cloudy-night":
      return "https://raw.githubusercontent.com/visualcrossing/WeatherIcons/main/PNG/3rd%20Set%20-%20Color/partly-cloudy-night.png";
    case "showers-day":
      return "https://raw.githubusercontent.com/visualcrossing/WeatherIcons/main/PNG/3rd%20Set%20-%20Color/showers-day.png";
    case "showers-night":
      return "https://raw.githubusercontent.com/visualcrossing/WeatherIcons/main/PNG/3rd%20Set%20-%20Color/showers-night.png";
    case "snow":
      return "https://raw.githubusercontent.com/visualcrossing/WeatherIcons/main/PNG/3rd%20Set%20-%20Color/snow.png";
    case "thunder-rain":
      return "https://raw.githubusercontent.com/visualcrossing/WeatherIcons/main/PNG/3rd%20Set%20-%20Color/thunder-rain.png";
    case "wind":
      return "https://raw.githubusercontent.com/visualcrossing/WeatherIcons/main/PNG/4th%20Set%20-%20Color/wind.png";
    default:
      return "https://raw.githubusercontent.com/visualcrossing/WeatherIcons/main/PNG/3rd%20Set%20-%20Color/clear-day.png";
  }
};
