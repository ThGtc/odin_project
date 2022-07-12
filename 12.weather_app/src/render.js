import { newWeather } from "./index";


let weatherForecast = document.getElementById('weatherForecast');
function displayMainWeather(x){


    document.getElementById('weatherOfTheDay').innerText = "";
    let weatherContainer = document.createElement('div');
    weatherContainer.setAttribute('id', `day${newWeather.forecastDate}`);
    document.getElementById('weatherOfTheDay').appendChild(weatherContainer);

    let timeZone = document.createElement('h3');
    timeZone.setAttribute('id', 'forecastDate');
    timeZone.innerText = 'Aujourd\'hui le ' + newWeather.forecastDate;
    document.getElementById(`day${newWeather.forecastDate}`).appendChild(timeZone);

    let threeHrsForecast = document.createElement('div');
    threeHrsForecast.setAttribute('id', `threeHrsForecast${x}` );
    document.getElementById(`day${newWeather.forecastDate}`).appendChild(threeHrsForecast);

    let hourlyForecast = document.createElement('p');
    hourlyForecast.setAttribute('id', `hourZone${x}`);
    hourlyForecast.innerText = "En ce moment";
    document.getElementById(`threeHrsForecast${x}`).appendChild(hourlyForecast);


    temperaturesDescription(x);
    athmosphereDescription(x);
}

function displayWeather(x){

    if(document.getElementById(`day${newWeather.forecastDate}`) === null){
        let weatherContainer = document.createElement('div');
        weatherContainer.setAttribute('id', `day${newWeather.forecastDate}`);
        weatherForecast.appendChild(weatherContainer);
        let timeZone = document.createElement('h3');
    timeZone.setAttribute('id', 'forecastDate');
    timeZone.innerText = newWeather.forecastDate + " (cacher ?)";

    document.getElementById(`day${newWeather.forecastDate}`).appendChild(timeZone);
    }

    let threeHrsForecast = document.createElement('div');
    threeHrsForecast.setAttribute('id', `threeHrsForecast${x}` );
    document.getElementById(`day${newWeather.forecastDate}`).appendChild(threeHrsForecast);

    let hourlyForecast = document.createElement('p');
    hourlyForecast.setAttribute('id', `hourZone${x}`);
    hourlyForecast.innerText = newWeather.forecastHour;
    document.getElementById(`threeHrsForecast${x}`).appendChild(hourlyForecast);

    temperaturesDescription(x);
    athmosphereDescription(x);
};

function temperaturesDescription(x){
    let tempZone = document.createElement('div');
    tempZone.setAttribute('id', 'tempZone');
    document.getElementById(`threeHrsForecast${x}`).appendChild(tempZone);

    let currentTemp = document.createElement('div');
    currentTemp.setAttribute('id', 'currentTemp');
    currentTemp.innerText = 'Température prévue : ' + newWeather.temperature + `°C`;
    tempZone.appendChild(currentTemp);

    let feelsLike = document.createElement('div');
    feelsLike.setAttribute('id', 'feelsLike');
    feelsLike.innerText = 'Température ressentie : ' + newWeather.feelsLike + `°C`;
    tempZone.appendChild(feelsLike);

    let minimalTemp = document.createElement('div');
    minimalTemp.setAttribute('id', 'minimalTemp');
    minimalTemp.innerText = 'Température minimale : ' + newWeather.minTemp + `°C`;
    tempZone.appendChild(minimalTemp);

    let maximalTemp = document.createElement('div');
    maximalTemp.setAttribute('id', 'maximalTemp');
    maximalTemp.innerText = 'Température maximale : ' + newWeather.maxTemp + `°C`;
    tempZone.appendChild(maximalTemp);
}

function athmosphereDescription(x){
    let skyZone = document.createElement('div');
    skyZone.setAttribute('id', 'skyZone');
    document.getElementById(`threeHrsForecast${x}`).appendChild(skyZone);

    let skyDescription = document.createElement('img');
    skyDescription.setAttribute('id', `skyDescription${x}`);
    // skyDescription.innerText = newWeather.skyDescription[0].toUpperCase() + newWeather.skyDescription.substring(1);
    skyZone.appendChild(skyDescription);
    setWeatherIco(x)

    let humidityPercentage = document.createElement('div');
    humidityPercentage.setAttribute('id', 'humidityPercentage');
    humidityPercentage.innerText = newWeather.humidity + "% d'humité"
    skyZone.appendChild(humidityPercentage);
}

function setWeatherIco(x){
    switch(true){
        case(newWeather.weatherCode == 500):
            document.getElementById(`skyDescription${x}`).src ="../icons/500-fine_pluie.png",
            document.getElementById(`skyDescription${x}`).alt ="Légère pluie",
            document.getElementById(`skyDescription${x}`).title="Légère pluie"
            break
        case(newWeather.weatherCode == 800):
            if(document.getElementById(`hourZone${x}`).textContent == "00:00:00" ||
            document.getElementById(`hourZone${x}`).textContent == "03:00:00"){
                document.getElementById(`skyDescription${x}`).src ="../icons/800-nuit_claire.png",
                document.getElementById(`skyDescription${x}`).alt ="Nuit claire",
                document.getElementById(`skyDescription${x}`).title="Nuit claire"
            }else{
            document.getElementById(`skyDescription${x}`).src ="../icons/800-ensoleillé.png",
            document.getElementById(`skyDescription${x}`).alt ="Ensoleillé",
            document.getElementById(`skyDescription${x}`).title="Ensoleillé"
            }
            break
        case(newWeather.weatherCode == 801):
            if(document.getElementById(`hourZone${x}`).textContent == "00:00:00" ||
            document.getElementById(`hourZone${x}`).textContent == "03:00:00"){
                document.getElementById(`skyDescription${x}`).src ="../icons/801-qq_nuagesNIGHTMODE.png",
                document.getElementById(`skyDescription${x}`).alt ="Quelques nuages",
                document.getElementById(`skyDescription${x}`).title="Quelques nuages"
            }else{
            document.getElementById(`skyDescription${x}`).src ="../icons/801-qq_nuages.png",
            document.getElementById(`skyDescription${x}`).alt ="Quelques nuages",
            document.getElementById(`skyDescription${x}`).title="Quelques nuages"
            }
            break
        case(newWeather.weatherCode == 802 || newWeather.weatherCode == 803 || newWeather.weatherCode == 804):
            document.getElementById(`skyDescription${x}`).src ="../icons/802-nuageux.png",
            document.getElementById(`skyDescription${x}`).alt ="Nuageux",
            document.getElementById(`skyDescription${x}`).title="Nuageux"
            break
    }
}

let chevronsButtons = document.getElementById('chevronsBtn');
chevronsButtons.addEventListener('click', unrollForecast);
document.getElementById('interTitle').addEventListener('click', unrollForecast);

function unrollForecast(){
    switch(true){
        case(chevronsButtons.title == "Dérouler les prévisions ?"):
            weatherForecast.style.visibility = 'visible';
            weatherForecast.style.height = 'auto';
            chevronsButtons.src = "../icons/black_up_chevron.png";
            chevronsButtons.alt = "Cacher les prévisions ?";
            chevronsButtons.title = "Cacher les prévisions ?";
            break;
        case(chevronsButtons.title == "Cacher les prévisions ?"):
            weatherForecast.removeAttribute('style');
            chevronsButtons.src = "../icons/black_down_chevron.png";
            chevronsButtons.alt = "Dérouler les prévisions ?";
            chevronsButtons.title = "Dérouler les prévisions ?";
            break;
    }
};

export {displayMainWeather, displayWeather }