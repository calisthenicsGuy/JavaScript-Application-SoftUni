const url = () => {
  let cityName = cityNameElement.value;
  const apiKey = '847816465a720b0983cd258b2f2966a2';
  return `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`;
}

btnSeacrhElement.addEventListener('click', (e) => {
  let weatherLoadingElement = document.createElement('div');


  fetch(url())
  .then(response => response)
  .then(resolve => resolve.json())
  .then(cityObject => {
    nameText.textContent = `Weather in ${cityObject.name}`;
    let temperatueInCelsius = (Number(cityObject.main.temp) - 273.15).toFixed(2);
    tempText.textContent = `${String(temperatueInCelsius)}°C`;
    descriptionText.textContent = cityObject.weather[0].description;
    tempText.appendChild(descriptionText);
    humidityText.textContent = `${cityObject.main.humidity}%`;
    windText.textContent = `Wind speed: ${Number(cityObject.wind.speed)} km/h`

    console.log(weatherLoadingElement);

    weatherLoadingElement.appendChild(nameText);
    weatherLoadingElement.appendChild(tempText);
    weatherLoadingElement.appendChild(humidityText);
    weatherLoadingElement.appendChild(windText);
    cardElement.appendChild(weatherLoadingElement);
});

// cityObject.main.humidity
// cityObject.wind.speed
});
