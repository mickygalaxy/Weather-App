# Weather-App
A simple web application built with HTML, CSS, and JavaScript, utilizing the OpenWeatherMap API. Users can enter a city name to fetch and display real-time weather data, including temperature, humidity, and wind speed. The app dynamically updates the weather icon based on the current weather condition. 

                                                            DEMONSTRATING HOW TO USE WEATHER API

This code snippet demonstrates the use of an API to fetch weather data and display it in a weather application. Here's an explanation of the API concepts for the README file:

@ The API key (apiKey) is used for authentication to access the OpenWeatherMap API.
@ The API URL (apiUrl) specifies the base URL for making requests to the weather API, including the necessary parameters such as units and the search query.
@ The fetch() function is used to send an HTTP GET request to the API, appending the city name and API key to the URL.
@ The API response is checked using response.status . If the status is 404, it means that the city was not found, and an error message is displayed.
@ If the city is found, the response is parsed using response.json(), and the weather data is extracted.
@ The extracted weather data, such as city name, temperature, humidity, and wind speed, is then displayed on the webpage by updating the corresponding HTML elements.
@ The weather icon is dynamically updated based on the weather condition obtained from the API response. The appropriate icon is selected using a switch statement and 
  displayed on the webpage.
@ The event listener is added to the search button (searchBtn), so when the button is clicked, it triggers the checkWeather function with the value entered in the search input 
  field (searchBox.value).
