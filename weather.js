const API_KEY = "4269652c5e1b6a66a34f9d3d16ecc098";
const DEFAULT_VALUE = "Ho Chi Minh";
const searchInput = document.getElementById("search-input");
const cityName = document.querySelector(".city-name");
const weatherState = document.querySelector(".weather-state");
const weatherIcon = document.querySelector(".weather-icon");
const temperature = document.querySelector(".temperature");
const tempMax = document.querySelector(".tempMax");
const tempMin = document.querySelector(".tempMin");
const humidity = document.querySelector(".humdity");
const windSpeed = document.querySelector(".wind-speed");

console.log(weatherState);

searchInput.addEventListener("change", (event) => {
  console.log(event.target.value);
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${event.target.value}&appid=${API_KEY}&lang=vi&units=metric`
  )
    .then((response) => response.json())
    .then((data) => {
      console.log("data", data);
      cityName.innerHTML = data.name || DEFAULT_VALUE;
      weatherState.innerHTML = data.weather[0].description || DEFAULT_VALUE;
      weatherIcon.src =
        `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png` ||
        DEFAULT_VAULE;
      temperature.innerHTML = Math.round(data.main.temp) || "31";
      windSpeed.innerHTML = data.wind.speed || DEFAULT_VALUE;
      tempMax.innerHTML = data.main.temp_max || DEFAULT_VALUE;
      tempMin.innerHTML = data.main.temp_min || DEFAULT_VALUE;
    });
});
