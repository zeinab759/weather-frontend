// weather.js
async function getWeather() {
    const city = document.getElementById("city").value;
    const response = await fetch(`/get_weather?city=${city}`);
    const result = await response.json();

    if (response.ok) {
        document.getElementById("result").innerHTML = `
            <h3>Weather in ${result.city}</h3>
            <p>Temperature: ${result.temperature} °C</p>
            <p>Description: ${result.description}</p>
        `;
    } else {
        document.getElementById("result").innerHTML = `<p>${result.error}</p>`;
    }
}
