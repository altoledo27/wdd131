// Get the current year dynamically
const year = document.querySelector("#currentyear");
const today = new Date();

year.innerHTML = `<p>&copy; <span id="currentyear">${today.getFullYear()}</span> 🦔 Ana Laura Toledo 🦔 Mexico </p>`;
const full = document.querySelector("#lastModified");

if (full) {
    full.innerHTML = `Last Modification: <span class="highlight">${document.lastModified}</span>`;
}