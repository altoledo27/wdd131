// Get the current year dynamically
const yearSpan = document.querySelector("#currentyear");
const today = new Date();

if (yearSpan) {
  yearSpan.textContent = today.getFullYear();
}
const full = document.querySelector("#lastModified");

if (full) {
    full.innerHTML = `Last Modification: <span class="highlight">${document.lastModified}</span>`;
}

// get the number of visitors
const visitsDisplay = document.querySelector(".visits");

if (visitsDisplay) {
    let numVisits = Number(window.localStorage.getItem("numVisits-ls")) || 0;

    if (numVisits !== 0) {
        visitsDisplay.textContent = numVisits;
    } else {
        visitsDisplay.textContent = `This is your first visit. 🥳 Welcome!`;
    }

    numVisits++;
    localStorage.setItem("numVisits-ls", numVisits);
}

//list of products

const products = [
  {
    id: "fc-1888",
    name: "flux capacitor",
    averagerating: 4.5
  },
  {
    id: "fc-2050",
    name: "power laces",
    averagerating: 4.7
  },
  {
    id: "fs-1987",
    name: "time circuits",
    averagerating: 3.5
  },
  {
    id: "ac-2000",
    name: "low voltage reactor",
    averagerating: 3.9
  },
  {
    id: "jj-1969",
    name: "warp equalizer",
    averagerating: 5.0
  }
];


const selectElement = document.querySelector("#productName");

if (selectElement) {
products.forEach(product => {
    const option = document.createElement("option");
    option.textContent = product.name;
    option.value = product.id;
  
    selectElement.appendChild(option);
});
} else {
    console.error("❌ No se encontró el elemento con id #productName");
}