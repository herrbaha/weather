document.querySelector("form").addEventListener("submit", (e) => {
e.preventDefault();

let API_KEY = weatherBaha;

let city = e.target.elements.city.value;

let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric&lang=de`;

fetch(url).then((response) =>response.json())
.then(data => {
    let cityName = data.name;
    let temperature = data.main.temp;
    let humidity = data.main.humidity;
    let pressure = data.main.pressure;
    let windSpeed = data.wind.speed;

    let text = `The weather in ${cityName} is ${temperature} <sup>o</sup>C , wind speed is ${windSpeed}, pressure is ${pressure}, and humidity is ${humidity}`;
    document.querySelector("#weatherContainer").innerHTML = text;
})
.catch(error => console.error(error));
});