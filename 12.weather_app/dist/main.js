/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"newWeather\": () => (/* binding */ newWeather)\n/* harmony export */ });\n/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./render */ \"./src/render.js\");\n\n\nclass Weather {\n    constructor(localisation, forecastDate, forecastHour, temperature, minTemp, maxTemp, feelsLike, weatherCode /*skyDescription*/, humidity) {\n        this.localisation = localisation,\n            this.forecastDate = forecastDate,\n            this.forecastHour = forecastHour,\n            this.temperature = temperature,\n            this.minTemp = minTemp,\n            this.maxTemp = maxTemp,\n            this.feelsLike = feelsLike,\n            this.weatherCode = weatherCode\n            // this.skyDescription = skyDescription,\n            this.humidity = humidity;\n    }\n};\n\nlet newWeather;\nlet forecast = [];\n// let weatherElements;\nasync function getWeather(loc){\n    document.getElementById('weatherOfTheDay').innerText = \"Loading, pls wait...\";\n    try{\n        let weather = await fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${loc}&APPID=8c007e215e766e43067cdb5b9684353d&units=metric&lang=FR`, {mode: 'cors'});\n        let currentWeather = await weather.json();\n        for(let x = 0; x < currentWeather.list.length; x++){\n            newWeather = new Weather(\n                currentWeather.city.name,\n                currentWeather.list[x].dt_txt.slice(0,10),\n                currentWeather.list[x].dt_txt.slice(11,19),\n                currentWeather.list[x].main.temp,\n                currentWeather.list[x].main.temp_min,\n                currentWeather.list[x].main.temp_max,\n                currentWeather.list[x].main.feels_like,\n                currentWeather.list[x].weather[0].id,\n                // currentWeather.list[x].weather[0].description,\n                currentWeather.list[x].main.humidity,\n                );\n            forecast.push(newWeather);\n            if(x == 0){\n                (0,_render__WEBPACK_IMPORTED_MODULE_0__.displayMainWeather)(x)\n            } else{\n                (0,_render__WEBPACK_IMPORTED_MODULE_0__.displayWeather)(x);\n            }\n        }\n        // weatherElements = document.querySelectorAll('#mainWeather > div');\n        document.getElementById('citySelected').innerText = '   ' + newWeather.localisation;\n        document.getElementById('nextDays').style.visibility = 'visible';\n        document.getElementById('interTitle').innerText = \"Pour les 5 prochains jours\";\n    }\n    catch (error){\n        document.getElementById('citySelected').innerText = \"\"\n        document.getElementById('nextDays').style.visibility = 'hidden';\n        document.getElementById('weatherOfTheDay').innerText = \"Something went very wrong. Please get in touch with your space monkey to know what happened here.\"\n        console.error('oops, something went very wrong')\n    }\n};\n\nlet selectedCity;\nconst form = document.getElementById('changeLocalisation');\nconst searchQuery = document.getElementById('searchLoc');\nform.addEventListener('submit', () => {\n    event.preventDefault();\n    selectedCity = searchQuery.value;\n    getWeather(selectedCity);\n    searchQuery.value = \"\";\n    document.getElementById('citySelected').innerText = \" \"\n    document.getElementById('weatherOfTheDay').innerText = \"Loading, pls wait...\";\n    document.getElementById('nextDays').style.visibility = 'hidden';\n    document.getElementById('weatherForecast').innerHTML = \"\";\n});\ngetWeather('Paris');\n\n\n\n//# sourceURL=webpack://weather_app/./src/index.js?");

/***/ }),

/***/ "./src/render.js":
/*!***********************!*\
  !*** ./src/render.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"displayMainWeather\": () => (/* binding */ displayMainWeather),\n/* harmony export */   \"displayWeather\": () => (/* binding */ displayWeather)\n/* harmony export */ });\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ \"./src/index.js\");\n\n\n\nlet weatherForecast = document.getElementById('weatherForecast');\nfunction displayMainWeather(x){\n\n\n    document.getElementById('weatherOfTheDay').innerText = \"\";\n    let weatherContainer = document.createElement('div');\n    weatherContainer.setAttribute('id', `day${_index__WEBPACK_IMPORTED_MODULE_0__.newWeather.forecastDate}`);\n    document.getElementById('weatherOfTheDay').appendChild(weatherContainer);\n\n    let timeZone = document.createElement('h3');\n    timeZone.setAttribute('id', 'forecastDate');\n    timeZone.innerText = 'Aujourd\\'hui le ' + _index__WEBPACK_IMPORTED_MODULE_0__.newWeather.forecastDate;\n    document.getElementById(`day${_index__WEBPACK_IMPORTED_MODULE_0__.newWeather.forecastDate}`).appendChild(timeZone);\n\n    let threeHrsForecast = document.createElement('div');\n    threeHrsForecast.setAttribute('id', `threeHrsForecast${x}` );\n    document.getElementById(`day${_index__WEBPACK_IMPORTED_MODULE_0__.newWeather.forecastDate}`).appendChild(threeHrsForecast);\n\n    let hourlyForecast = document.createElement('p');\n    hourlyForecast.setAttribute('id', `hourZone${x}`);\n    hourlyForecast.innerText = \"En ce moment\";\n    document.getElementById(`threeHrsForecast${x}`).appendChild(hourlyForecast);\n\n\n    temperaturesDescription(x);\n    athmosphereDescription(x);\n}\n\nfunction displayWeather(x){\n\n    if(document.getElementById(`day${_index__WEBPACK_IMPORTED_MODULE_0__.newWeather.forecastDate}`) === null){\n        let weatherContainer = document.createElement('div');\n        weatherContainer.setAttribute('id', `day${_index__WEBPACK_IMPORTED_MODULE_0__.newWeather.forecastDate}`);\n        weatherForecast.appendChild(weatherContainer);\n        let timeZone = document.createElement('h3');\n    timeZone.setAttribute('id', 'forecastDate');\n    timeZone.innerText = _index__WEBPACK_IMPORTED_MODULE_0__.newWeather.forecastDate + \" (cacher ?)\";\n\n    document.getElementById(`day${_index__WEBPACK_IMPORTED_MODULE_0__.newWeather.forecastDate}`).appendChild(timeZone);\n    }\n\n    let threeHrsForecast = document.createElement('div');\n    threeHrsForecast.setAttribute('id', `threeHrsForecast${x}` );\n    document.getElementById(`day${_index__WEBPACK_IMPORTED_MODULE_0__.newWeather.forecastDate}`).appendChild(threeHrsForecast);\n\n    let hourlyForecast = document.createElement('p');\n    hourlyForecast.setAttribute('id', `hourZone${x}`);\n    hourlyForecast.innerText = _index__WEBPACK_IMPORTED_MODULE_0__.newWeather.forecastHour;\n    document.getElementById(`threeHrsForecast${x}`).appendChild(hourlyForecast);\n\n    temperaturesDescription(x);\n    athmosphereDescription(x);\n};\n\nfunction temperaturesDescription(x){\n    let tempZone = document.createElement('div');\n    tempZone.setAttribute('id', 'tempZone');\n    document.getElementById(`threeHrsForecast${x}`).appendChild(tempZone);\n\n    let currentTemp = document.createElement('div');\n    currentTemp.setAttribute('id', 'currentTemp');\n    currentTemp.innerText = 'Température prévue : ' + _index__WEBPACK_IMPORTED_MODULE_0__.newWeather.temperature + `°C`;\n    tempZone.appendChild(currentTemp);\n\n    let feelsLike = document.createElement('div');\n    feelsLike.setAttribute('id', 'feelsLike');\n    feelsLike.innerText = 'Température ressentie : ' + _index__WEBPACK_IMPORTED_MODULE_0__.newWeather.feelsLike + `°C`;\n    tempZone.appendChild(feelsLike);\n\n    let minimalTemp = document.createElement('div');\n    minimalTemp.setAttribute('id', 'minimalTemp');\n    minimalTemp.innerText = 'Température minimale : ' + _index__WEBPACK_IMPORTED_MODULE_0__.newWeather.minTemp + `°C`;\n    tempZone.appendChild(minimalTemp);\n\n    let maximalTemp = document.createElement('div');\n    maximalTemp.setAttribute('id', 'maximalTemp');\n    maximalTemp.innerText = 'Température maximale : ' + _index__WEBPACK_IMPORTED_MODULE_0__.newWeather.maxTemp + `°C`;\n    tempZone.appendChild(maximalTemp);\n}\n\nfunction athmosphereDescription(x){\n    let skyZone = document.createElement('div');\n    skyZone.setAttribute('id', 'skyZone');\n    document.getElementById(`threeHrsForecast${x}`).appendChild(skyZone);\n\n    let skyDescription = document.createElement('img');\n    skyDescription.setAttribute('id', `skyDescription${x}`);\n    // skyDescription.innerText = newWeather.skyDescription[0].toUpperCase() + newWeather.skyDescription.substring(1);\n    skyZone.appendChild(skyDescription);\n    setWeatherIco(x)\n\n    let humidityPercentage = document.createElement('div');\n    humidityPercentage.setAttribute('id', 'humidityPercentage');\n    humidityPercentage.innerText = _index__WEBPACK_IMPORTED_MODULE_0__.newWeather.humidity + \"% d'humité\"\n    skyZone.appendChild(humidityPercentage);\n}\n\nfunction setWeatherIco(x){\n    switch(true){\n        case(_index__WEBPACK_IMPORTED_MODULE_0__.newWeather.weatherCode == 500):\n            document.getElementById(`skyDescription${x}`).src =\"../icons/500-fine_pluie.png\",\n            document.getElementById(`skyDescription${x}`).alt =\"Légère pluie\",\n            document.getElementById(`skyDescription${x}`).title=\"Légère pluie\"\n            break\n        case(_index__WEBPACK_IMPORTED_MODULE_0__.newWeather.weatherCode == 800):\n            if(document.getElementById(`hourZone${x}`).textContent == \"00:00:00\" ||\n            document.getElementById(`hourZone${x}`).textContent == \"03:00:00\"){\n                document.getElementById(`skyDescription${x}`).src =\"../icons/800-nuit_claire.png\",\n                document.getElementById(`skyDescription${x}`).alt =\"Nuit claire\",\n                document.getElementById(`skyDescription${x}`).title=\"Nuit claire\"\n            }else{\n            document.getElementById(`skyDescription${x}`).src =\"../icons/800-ensoleillé.png\",\n            document.getElementById(`skyDescription${x}`).alt =\"Ensoleillé\",\n            document.getElementById(`skyDescription${x}`).title=\"Ensoleillé\"\n            }\n            break\n        case(_index__WEBPACK_IMPORTED_MODULE_0__.newWeather.weatherCode == 801):\n            if(document.getElementById(`hourZone${x}`).textContent == \"00:00:00\" ||\n            document.getElementById(`hourZone${x}`).textContent == \"03:00:00\"){\n                document.getElementById(`skyDescription${x}`).src =\"../icons/801-qq_nuagesNIGHTMODE.png\",\n                document.getElementById(`skyDescription${x}`).alt =\"Quelques nuages\",\n                document.getElementById(`skyDescription${x}`).title=\"Quelques nuages\"\n            }else{\n            document.getElementById(`skyDescription${x}`).src =\"../icons/801-qq_nuages.png\",\n            document.getElementById(`skyDescription${x}`).alt =\"Quelques nuages\",\n            document.getElementById(`skyDescription${x}`).title=\"Quelques nuages\"\n            }\n            break\n        case(_index__WEBPACK_IMPORTED_MODULE_0__.newWeather.weatherCode == 802 || _index__WEBPACK_IMPORTED_MODULE_0__.newWeather.weatherCode == 803 || _index__WEBPACK_IMPORTED_MODULE_0__.newWeather.weatherCode == 804):\n            document.getElementById(`skyDescription${x}`).src =\"../icons/802-nuageux.png\",\n            document.getElementById(`skyDescription${x}`).alt =\"Nuageux\",\n            document.getElementById(`skyDescription${x}`).title=\"Nuageux\"\n            break\n    }\n}\n\nlet chevronsButtons = document.getElementById('chevronsBtn');\nchevronsButtons.addEventListener('click', unrollForecast);\ndocument.getElementById('interTitle').addEventListener('click', unrollForecast);\n\nfunction unrollForecast(){\n    switch(true){\n        case(chevronsButtons.title == \"Dérouler les prévisions ?\"):\n            weatherForecast.style.visibility = 'visible';\n            weatherForecast.style.height = 'auto';\n            chevronsButtons.src = \"../icons/black_up_chevron.png\";\n            chevronsButtons.alt = \"Cacher les prévisions ?\";\n            chevronsButtons.title = \"Cacher les prévisions ?\";\n            break;\n        case(chevronsButtons.title == \"Cacher les prévisions ?\"):\n            weatherForecast.removeAttribute('style');\n            chevronsButtons.src = \"../icons/black_down_chevron.png\";\n            chevronsButtons.alt = \"Dérouler les prévisions ?\";\n            chevronsButtons.title = \"Dérouler les prévisions ?\";\n            break;\n    }\n};\n\n\n\n//# sourceURL=webpack://weather_app/./src/render.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;