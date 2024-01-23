function currentCityTemp(response) {
    let temperatureElement = document.querySelector("#temperature-value");
    let temperature = response.data.temperature.current;
    let cityElement = document.querySelector("#current-city");
    let descriptionElement = document.querySelector("#description");
    let humidityElement = document.querySelector("#humidity");
    let windSpeedElement = document.querySelector("#wind-speed");
    let timeElement = document.querySelector("#current-time");
    let date = new Date(response.data.time * 1000);
    let iconElement = document.querySelector("#temperature-icon")
    temperatureElement.innerHTML = Math.round(temperature); 
    cityElement.innerHTML = response.data.city; 
    descriptionElement.innerHTML = response.data.condition.description;
    humidityElement.innerHTML = `${response.data.temperature.humidity}%`;
    windSpeedElement.innerHTML = `${response.data.wind.speed}km/h`;
    timeElement.innerHTML = formatDate(date);
    iconElement.innerHTML = `<img src="${response.data.condition.icon_url}" class="temperature-icon"/>`;
}

function formatDate(date) {
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let day = days[date.getDay()];

    if (minutes < 10) {
        minutes = `0${minutes}`;
    }

    if (hours < 10) {
        hours = `0${hours}`;
    }

    return `${day}, ${hours}:${minutes}`;
}

function searchCity(city) {
    let apiKey = "8c48ta45fbf8of4c9026e9ea057383be";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(currentCityTemp);
}

function handleSearchForm(event) {
    event.preventDefault();
    let searchInput = document.querySelector("#search-form-input");
    searchCity(searchInput.value);
}

let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", handleSearchForm);

function displayForecast() {
let forecastElement = document.querySelector("#forecast");
let days = ["Tue", "Wed", "Thu", "Fri", "Sat"];
let forecastHtml = "";

days.forEach (function (day) {
    forecastHtml =
    forecastHtml +
     `
    <div class="row">
        <div class="col-2">
            <div class="forecast-day">
              ${day}
            </div>
            <img src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/rain-day.png" width="50">
            <div class="forecast-temp">
              <span class="forecast-temp-max">32°</span> 
              <span class="forecast-temp-min">21°</span>
            </div>
        </div>
    </div>
`;
});

forecastElement.innerHTML = forecastHtml;
}

searchCity("Sydney");
