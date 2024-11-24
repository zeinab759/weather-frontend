async function getWeather() {
    const cityInput = document.getElementById("city");
    const resultElement = document.getElementById("result");

    if (!cityInput.value.trim()) {
        resultElement.innerHTML = `<p>Please enter a city name.</p>`;
        return;
    }

    try {
        const city = cityInput.value.trim();
        const response = await fetch(`http://127.0.0.1:5000/get_weather?city=${encodeURIComponent(city)}`);

        if (!response.ok) {
            const errorResult = await response.json().catch(() => ({}));
            resultElement.innerHTML = `<p>Error: ${errorResult.error || 'Unable to fetch weather data.'}</p>`;
            return;
        }

        const result = await response.json();
        resultElement.innerHTML = `
            <h3>Weather in ${result.city}</h3>
            <p>Temperature: ${result.temperature} °C</p>
            <p>Description: ${result.description}</p>
        `;
    } catch (error) {
        resultElement.innerHTML = `<p>Something went wrong: ${error.message}</p>`;
    }
}
