// selecting dom elements

const root = document.querySelector('.root');

const locationInput = document.querySelector('#location-input');

const getWeatherButton = document.querySelector('#get-weather-btn');

const weatherInfo = document.querySelector('.weather-info');

const loading = document.querySelector('.loading');

getWeatherButton.addEventListener('click', () => {
  weatherLocation = locationInput.value;
  // console.log(weatherLocation);

  // API Call
  const promise = fetch(
    `http://api.weatherapi.com/v1/current.json?key=eaddda2268c047898bd174251250501&q=${weatherLocation}&aqi=no`
  );

  promise.then((response) => response.json()).then((data) => updataTemp(data));

  function updataTemp(data) {
    loading.style.display = 'block';
    // weatherInfo.style.display = 'none';
    weatherInfo.textContent = `Getting weather for ${weatherLocation}...`;

    // Temp Update and animation hidden
    setTimeout(() => {
      loading.style.display = 'none';
      weatherInfo.style.display = 'block';

      const temp = data.current.temp_c;
      weatherInfo.innerHTML = `Temperature of ${weatherLocation} is ${temp} Degree Celsius.`;
    }, 1500);
  }
});
