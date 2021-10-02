const API_KEY = 'e8e541d84912d8c6b48df9b0c072f2b9';
const URL = 'https://api.openweathermap.org/data/2.5';
const current = document.querySelector('.weather');

const showWeather = function ({ coords }) {
  const { latitude, longitude } = coords;
  const getWeatherData = async () => {
    const response = await fetch(
      `${URL}/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`
    );
    const { main, weather, name } = await response.json();

    const currentWeather = weather[0].main;
    const currentTemp = Math.round(main.temp);
    const currentLocation = name;

    current.innerText = `${currentWeather} ${currentTemp}/${currentLocation}`;
  };
  getWeatherData();
};

navigator.geolocation.getCurrentPosition(showWeather, error =>
  alert(error.message)
);
