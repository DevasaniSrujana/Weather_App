// openweather api
const apiUrl = "https://api.weatherapi.com/v1/current.json?&aqi=no&units=metric&q="
const apiKey = "66a4d0611f0c4503bab80011241705"

const searchText = document.querySelector(".search")
const searchbtn = document.querySelector(".searchIcon")

async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&key=${apiKey}`);
    let data = await response.json()
    console.log(data)
    document.querySelector(".temp").innerHTML = data.current.temp_c + `<sup>o</sup>c`;
    document.querySelector(".humidityValue").innerHTML = data.current.humidity + "%";
    document.querySelector(".windValue").innerHTML = Math.round(data.current.wind_kph) + "km/h";
    document.querySelector(".city").innerHTML = data.location.name;
}

//when the search button is clicked
searchbtn.addEventListener("click", () => {
    checkWeather(searchText.value)
    searchText.value = ""
})

//when the Enter key is pressed
searchText.addEventListener("keypress", (e) => {
    if (e.key == "Enter") {
        checkWeather(searchText.value)
        searchText.value = ""
    }
})