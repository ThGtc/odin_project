import { displayMainWeather, displayWeather } from "./render"

class Weather {
    constructor(localisation, forecastDate, forecastHour, temperature, minTemp, maxTemp, feelsLike, weatherCode /*skyDescription*/, humidity) {
        this.localisation = localisation,
            this.forecastDate = forecastDate,
            this.forecastHour = forecastHour,
            this.temperature = temperature,
            this.minTemp = minTemp,
            this.maxTemp = maxTemp,
            this.feelsLike = feelsLike,
            this.weatherCode = weatherCode
            // this.skyDescription = skyDescription,
            this.humidity = humidity;
    }
};

let newWeather;
let forecast = [];
// let weatherElements;
async function getWeather(loc){
    document.getElementById('weatherOfTheDay').innerText = "Loading, pls wait...";
    try{
        let weather = await fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${loc}&APPID=8c007e215e766e43067cdb5b9684353d&units=metric&lang=FR`, {mode: 'cors'});
        let currentWeather = await weather.json();
        for(let x = 0; x < currentWeather.list.length; x++){
            newWeather = new Weather(
                currentWeather.city.name,
                currentWeather.list[x].dt_txt.slice(0,10),
                currentWeather.list[x].dt_txt.slice(11,19),
                currentWeather.list[x].main.temp,
                currentWeather.list[x].main.temp_min,
                currentWeather.list[x].main.temp_max,
                currentWeather.list[x].main.feels_like,
                currentWeather.list[x].weather[0].id,
                // currentWeather.list[x].weather[0].description,
                currentWeather.list[x].main.humidity,
                );
            forecast.push(newWeather);
            if(x == 0){
                displayMainWeather(x)
            } else{
                displayWeather(x);
            }
        }
        // weatherElements = document.querySelectorAll('#mainWeather > div');
        document.getElementById('citySelected').innerText = '   ' + newWeather.localisation;
        document.getElementById('nextDays').style.visibility = 'visible';
        document.getElementById('interTitle').innerText = "Pour les 5 prochains jours";
    }
    catch (error){
        document.getElementById('citySelected').innerText = ""
        document.getElementById('nextDays').style.visibility = 'hidden';
        document.getElementById('weatherOfTheDay').innerText = "Something went very wrong. Please get in touch with your space monkey to know what happened here."
        console.error('oops, something went very wrong')
    }
};

let selectedCity;
const form = document.getElementById('changeLocalisation');
const searchQuery = document.getElementById('searchLoc');
form.addEventListener('submit', () => {
    event.preventDefault();
    selectedCity = searchQuery.value;
    getWeather(selectedCity);
    searchQuery.value = "";
    document.getElementById('citySelected').innerText = " "
    document.getElementById('weatherOfTheDay').innerText = "Loading, pls wait...";
    document.getElementById('nextDays').style.visibility = 'hidden';
    document.getElementById('weatherForecast').innerHTML = "";
});
getWeather('Paris');

export { newWeather }