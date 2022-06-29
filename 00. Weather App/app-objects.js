let cityNameElement = document.querySelector('.search-bar');
let btnSeacrhElement = document.querySelector('#btn-search');
let cardElement = document.querySelector('.card');

let nameText = document.createElement('h2');
let tempText = document.createElement('h1');
let descriptionText = document.createElement('div');
let humidityText = document.createElement('div');
let windText = document.createElement('div');


// <h2 class="city">Weather in Denver</h2>
//           <h1 class="temp">51°C</h1>
//           <div class="flex">
//             <img src="https://openweathermap.org/img/wn/04n.png" alt="" class="icon" />
//             <div class="description">Cloudy</div>
//           </div>
//           <div class="humidity">Humidity: 60%</div>
//           <div class="wind">Wind speed: 6.2 km/h</div>
//         </div>