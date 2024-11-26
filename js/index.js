var searchInput = document.getElementById("search-input");
var cardContainer = document.getElementById("cards-container");

async function getWeather(q) {
  var response = await fetch(
    `https://api.weatherapi.com/v1/forecast.json?key=1d7fc078b74548de8c6163555240210&q=${q}&days=3`
  );
  var finalResponse = await response.json();
  displayWeather(finalResponse);
}

getWeather("Cairo");
searchInput.addEventListener("keyup", function () {
  getWeather(searchInput.value);
});

navigator.geolocation.getCurrentPosition(function (position) {
  var latitude = position.coords.latitude;
  var longitude = position.coords.longitude;
  getWeather(`${latitude},${longitude}`);
});

function displayWeather(weather) {
  if (weather.error == undefined) {
    cardContainer.innerHTML = `
  <div class="col-12 col-md-4">
      <div class="details-card rounded-4 overflow-hidden">
          <div  class="card-header d-flex align-items-center justify-content-between py-3 px-5">
              <p class="day mb-0">${new Date(
                weather.forecast.forecastday[0].date
              ).toLocaleDateString("en-US", { weekday: "long" })}</p>
              <p class="date mb-0">${new Date(
                weather.forecast.forecastday[0].date
              ).toLocaleDateString("en-US", {
                day: "numeric",
                month: "long",
              })}</p>
          </div>
          <div class="card-body py-5 px-4">
              <p class="location">${weather.location.name}</p>
              <img src="${
                weather.current.condition.icon
              }" alt="icon" class="weather-icon" />
              <p class="temp1 display-1">${weather.current.temp_c} &deg;C</p>
              <p class="condition">${
                weather.forecast.forecastday[0].day.condition.text
              }</p>
              <div class="card-footer d-flex gap-3  py-3">
                  <p class="humidity"> <i class="fa-solid fa-xl fa-umbrella"></i> ${
                    weather.forecast.forecastday[0].day.avghumidity
                  }%</p>
                  <p class="wind"> <i class="fa-solid fa-xl  fa-wind"></i> ${
                    weather.forecast.forecastday[0].day.maxwind_kph
                  } km/h</p>
                  <p class="direction"> <i class="fa-regular fa-xl  fa-compass"></i> East</p>
              </div>
          </div>
          <div class="card-footer text-center py-3">
              <a href="https://wa.me/?text=Weather%20in%20${
                weather.location.name
              }%3A%20${weather.current.temp_c}%20%C2%B0C%2C%20${
      weather.forecast.forecastday[0].day.condition.text
    }" target="_blank" class="btn btn-outline-success">
                  <i class="fa-brands fa-whatsapp"></i> Share on WhatsApp
              </a>
          </div>
      </div>
  </div>
  
  <div class="col-12 col-md-4">
      <div class="details-card middle rounded-4 overflow-hidden">
          <div class="card-header d-flex align-items-center justify-content-between py-3 px-5" >
              <p class="day mb-0">${new Date(
                weather.forecast.forecastday[1].date
              ).toLocaleDateString("en-US", { weekday: "long" })}</p>
              <p class="date mb-0">${new Date(
                weather.forecast.forecastday[1].date
              ).toLocaleDateString("en-US", {
                day: "numeric",
                month: "long",
              })}</p>
          </div>
          <div class="card-body text-center py-5 px-4">
          <img src="${
            weather.forecast.forecastday[1].day.condition.icon
          }" alt="icon" class="weather-icon" />
              <p class="temp display-1 mb-0">${
                weather.forecast.forecastday[1].day.maxtemp_c
              } &deg;C</p>
              <p class="low-temp display-5">${
                weather.forecast.forecastday[1].day.mintemp_c
              } &deg;C</p>
              <p class="condition">${
                weather.forecast.forecastday[1].day.condition.text
              }</p>
          </div>
          <div class="card-footer text-center py-3">
              <a href="https://wa.me/?text=Weather%20forecast%20for%20${
                weather.location.name
              }%20on%20${new Date(
      weather.forecast.forecastday[1].date
    ).toLocaleDateString("en-US", { weekday: "long" })}%3A%20${
      weather.forecast.forecastday[1].day.maxtemp_c
    }%20%C2%B0C%20(max)%2C%20${
      weather.forecast.forecastday[1].day.mintemp_c
    }%20%C2%B0C%20(min)%2C%20${
      weather.forecast.forecastday[1].day.condition.text
    }" target="_blank" class="btn btn-outline-success">
                  <i class="fa-brands fa-whatsapp"></i> Share on WhatsApp
              </a>
          </div>
      </div>
  </div>
  
  <div class="col-12 col-md-4">
      <div class="details-card rounded-4 overflow-hidden">
          <div class="card-header d-flex align-items-center justify-content-between py-3 px-5">
              <p class="day mb-0">${new Date(
                weather.forecast.forecastday[2].date
              ).toLocaleDateString("en-US", { weekday: "long" })}</p>
              <p class="date mb-0">${new Date(
                weather.forecast.forecastday[2].date
              ).toLocaleDateString("en-US", {
                day: "numeric",
                month: "long",
              })}</p>
          </div>
          <div class="card-body text-center py-5 px-4">
          <img src="${
            weather.forecast.forecastday[2].day.condition.icon
          }" alt="icon" class="weather-icon" />
              <p class="temp display-1 mb-0">${
                weather.forecast.forecastday[2].day.maxtemp_c
              } &deg;C</p>
              <p class="low-temp display-5 ">${
                weather.forecast.forecastday[2].day.mintemp_c
              } &deg;C</p>
              <p class="condition">${
                weather.forecast.forecastday[2].day.condition.text
              }</p>
          </div>
          <div class="card-footer text-center py-3">
              <a href="https://wa.me/?text=Weather%20forecast%20for%20${
                weather.location.name
              }%20on%20${new Date(
      weather.forecast.forecastday[2].date
    ).toLocaleDateString("en-US", { weekday: "long" })}%3A%20${
      weather.forecast.forecastday[2].day.maxtemp_c
    }%20%C2%B0C%20(max)%2C%20${
      weather.forecast.forecastday[2].day.mintemp_c
    }%20%C2%B0C%20(min)%2C%20${
      weather.forecast.forecastday[2].day.condition.text
    }" target="_blank" class="btn btn-outline-success">
                  <i class="fa-brands fa-whatsapp"></i> Share on WhatsApp
              </a>
          </div>
      </div>
  </div>
  `;
  }
}



function setActive(link) {
  var links = document.querySelectorAll('.nav-link');
  links.forEach(function(item) {
      item.classList.remove('active');
  });
  link.classList.add('active');
}