// Weather App API Integration

// API Key for OpenWeatherMap API
const apiKey = "0c5611ea71b5043fe45aa8c063b5c3b7";
// API URL for fetching weather data
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
// DOM elements
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");
// Function to check the weather for a given city
async function checkWeather(city){
    // Send API request to fetch weather data
    const response = await fetch(apiUrl + city +`&appid=${apiKey}`);
    // Check if city not found
    if(response.status == 404){
    // Display error message and hide weather information
    document.querySelector(".error").style.display = "block";
    document.querySelector(".weather").style.display = "none";
   }else{
    // City found, extract and display weather data
   var data = await response.json(); 
    // Update HTML elements with weather information
   document.querySelector(".city").innerHTML = data.name;
   document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
   document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
   document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

    // Update weather icon based on weather condition
switch (data.weather[0].main) {
    case "Clouds":
      weatherIcon.src = "weather-app-img/images/clouds.png";
      break;
    case "Clear":
      weatherIcon.src = "weather-app-img/images/clear.png";
      break;
    case "Rain":
      weatherIcon.src = "weather-app-img/images/rain.png";
      break;
    case "Drizzle":
      weatherIcon.src = "weather-app-img/images/drizzle.png";
      break;
    case "Mist":
      weatherIcon.src = "weather-app-img/images/mist.png";
      break;
    case "Snow":
      weatherIcon.src = "weather-app-img/images/snow.png";
      break;
    default:
      // Handle cases where the weather condition doesn't match any of the above
      break;
  }
    // Display weather information and hide error message
  document.querySelector(".weather").style.display = "block";
  document.querySelector(".error").style.display = "none";

}

}
// Event listener for search button click
searchBtn.addEventListener("click",()=>{
      // Trigger weather check for the city entered in the search input
    checkWeather(searchBox.value);
})
