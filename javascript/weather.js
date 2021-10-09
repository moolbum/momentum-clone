const API_KEY = "0fd7a8b04e670647b023ce7cbf969c72";

function onGeoOk(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    console.log(lat, lon);
    const url =`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            const weather = document.querySelector("#weather sapn:first-child");
            const city = document.querySelector("#weather sapn:last-child");
            city.innerText = data.name;
            weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
        });
}
function onGeoError(){
    alert("can1t find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);