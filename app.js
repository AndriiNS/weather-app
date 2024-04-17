const apiKey = "a58116b3d8bb075862f596aac9d0fbd4";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const imgWeather = document.querySelector(".img-weather");
async function checkWeather(city) {
  const res = await fetch(apiUrl + city + `&appid=${apiKey}`);
  let data = await res.json();
  if (res.status == 404) {
    document.querySelector(".error").style.display = "block";
    document.querySelector(".weather").style.display = "none";
  } else {
    document.querySelector(".error").style.display = "none";
  }
  document.querySelector(".city-name").innerHTML = data.name;
  document.querySelector(".humidity").innerHTML = `${data.main.humidity}%`;
  document.querySelector(".temp").innerHTML = `${Math.round(data.main.temp)}°C`;
  document.querySelector(".wind").innerHTML = `${Math.round(data.wind.speed)} km/h`;
  document.querySelector(".weather-type").innerHTML = data.weather[0].main;
  document.querySelector(".weather").style.display = "block";

  if (data.weather[0].main == "Clouds") {
    imgWeather.src = "./images/clouds.png";
  } else if (data.weather[0].main == "Clear") {
    imgWeather.src = "./images/clear.png";
  } else if (data.weather[0].main == "Rain") {
    imgWeather.src = "./images/rain.png";
  } else if (data.weather[0].main == "Mist") {
    imgWeather.src = "./images/mist.png";
  } else if (data.weather[0].main == "Drizzle") {
    imgWeather.src = "./images/drizzle.png";
  }
}
searchBtn.addEventListener("click", () => {
  checkWeather(searchBox.value);
});
function pressKey(event) {
  if (event.keyCode === 13) {
    checkWeather(searchBox.value);
  }
}
searchBox.addEventListener("keypress", handleKeyPress);
