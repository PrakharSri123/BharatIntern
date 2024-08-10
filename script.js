// script.js
document.getElementById('fetch-weather').addEventListener('click', function() {
    const city = document.getElementById('city').value;
    const apiKey = 'https://openweathermap.org/'; // Replace with your API key
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            if (data.cod === 200) {
                const weatherDetails = `
                    <h2>${data.name}, ${data.sys.country}</h2>
                    <p>Temperature: ${data.main.temp} °C</p>
                    <p>Weather: ${data.weather[0].description}</p>
                    <p>Humidity: ${data.main.humidity} %</p>
                    <p>Wind Speed: ${data.wind.speed} m/s</p>
                `;
                document.getElementById('weather-details').innerHTML = weatherDetails;
            } else {
                document.getElementById('weather-details').innerHTML = `<p>${data.message}</p>`;
            }
        })
        .catch(error => {
            document.getElementById('weather-details').innerHTML = `<p>Error fetching data.</p>`;
            console.error('Error:', error);
        });
});
