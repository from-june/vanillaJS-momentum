const API_KEY = 'e8e541d84912d8c6b48df9b0c072f2b9';
const URL = 'https://api.openweathermap.org/data/2.5';

const currentInfo = document.querySelector('.current-info');
const currentInfoWeather = currentInfo.querySelector('.current-info__weather');
const currentInfoTemp = currentInfo.querySelector('.current-info__temp');
const currentInfoLocation = currentInfo.querySelector(
  '.current-info__location'
);
const weatherIcon = `<i class="fas fa-cloud-sun"></i>`;
const tempIcon = `<i class="fas fa-temperature-high"></i>`;
const locationIcon = `<i class="fas fa-map-marker-alt"></i>`;

const showWeather = function ({ coords }) {
  const { latitude, longitude } = coords;
  const getWeatherData = async () => {
    const response = await fetch(
      `${URL}/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`
    );
    const { main, weather, name } = await response.json();

    const currentWeather = weather[0].main;
    currentInfoWeather.insertAdjacentHTML(
      'afterbegin',
      `${weatherIcon} ${currentWeather}`
    );

    const celsius = document.createElement('span');
    currentInfoTemp.appendChild(celsius);
    celsius.innerText = 'C';
    const currentTemp = Math.round(main.temp);
    currentInfoTemp.insertAdjacentHTML(
      'afterbegin',
      `${tempIcon} ${currentTemp}`
    );

    const currentLocation = name;
    currentInfoLocation.insertAdjacentHTML(
      'afterbegin',
      `${locationIcon} ${currentLocation}`
    );
  };
  getWeatherData();
};

navigator.geolocation.getCurrentPosition(showWeather, error =>
  alert(error.message)
);
