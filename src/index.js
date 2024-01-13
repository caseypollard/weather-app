function currentCityTemp(response) {
    let temperatureElement = document.querySelector("#temperature-value");
    let temperature = response.data.temperature.current;
    let cityElement = document.querySelector("#current-city");
    cityElement.innerHTML = response.data.city;
    temperatureElement.innerHTML = Math.round(temperature); 
    
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

searchCity("Sydney");