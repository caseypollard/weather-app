function handleSearchForm(event) {
    event.preventDefault();
    let searchInput = document.querySelector("#search-form-input");
    let cityElement = document.querySelector("h1");
    cityElement.innerHTML = searchInput.value;
    console.log(searchInput.value)
}

let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", handleSearchForm);
