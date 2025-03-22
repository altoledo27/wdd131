// Get the current year dynamically
const year = document.querySelector("#currentyear");
const today = new Date();

year.innerHTML = `<p>&copy; <span id="currentyear">${today.getFullYear()}</span> 🦔 Ana Laura Toledo 🦔 Mexico </p>`;
const full = document.querySelector("#lastModified");

if (full) {
    full.innerHTML = `Last Modification: <span class="highlight">${document.lastModified}</span>`;
}

// Wild Chill

const temperatureC = 13; 
const windSpeedKmh = 4.8; 


function calculateWindChill(temp, windSpeed) {
    return (13.12 + 0.6215 * temp -11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temp * Math.pow(windSpeed, 0.16)).toFixed(2);
}

function displayWindChill() {
    let windChillText = "N/A";

    if (temperatureC <= 10 && windSpeedKmh > 4.8) {
        windChillText = `${calculateWindChill(temperatureC, windSpeedKmh)} °C`;
    }

    document.querySelector(".weather li:nth-child(4)").innerHTML = `<strong>Wind Chill: </strong> ${windChillText}`;
}

document.addEventListener("DOMContentLoaded", displayWindChill);