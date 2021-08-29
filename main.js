document.querySelector("form").addEventListener("submit", (e) => {
e.preventDefault();

let city = e.target.elements.city.value;

let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;


})