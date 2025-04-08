// Get the current year dynamically
const year = document.querySelector("#currentyear");
const today = new Date();

year.innerHTML = `<p>&copy; <span id="currentyear">${today.getFullYear()}</span> 🦔 Ana Laura Toledo 🦔 Mexico </p>`;
const full = document.querySelector("#lastModified");

if (full) {
    full.innerHTML = `Last Modification: <span class="highlight">${document.lastModified}</span>`;
}

//Hamburger menu
const hamButton = document.querySelector("#menu");
const navigation = document.querySelector("nav");

hamButton.addEventListener("click", () => {
	navigation.classList.toggle("open");
	hamButton.classList.toggle("open");
});

//Dinamic temples

const temples = [
	{
	  templeName: "Aba Nigeria",
	  location: "Aba, Nigeria",
	  dedicated: "2005, August, 7",
	  area: 11500,
	  imageUrl:
	  "https://churchofjesuschristtemples.org/assets/img/temples/aba-nigeria-temple/aba-nigeria-temple-5087-main.jpg"
	},
	{
	  templeName: "Manti Utah",
	  location: "Manti, Utah, United States",
	  dedicated: "1888, May, 21",
	  area: 74792,
	  imageUrl:
	  "https://churchofjesuschristtemples.org/assets/img/temples/manti-utah-temple/manti-utah-temple-40551-main.jpg"
	},
	{
	  templeName: "Payson Utah",
	  location: "Payson, Utah, United States",
	  dedicated: "2015, June, 7",
	  area: 96630,
	  imageUrl:
	  "https://churchofjesuschristtemples.org/assets/img/temples/payson-utah-temple/payson-utah-temple-38451-main.jpg"
	},
	{
	  templeName: "Yigo Guam",
	  location: "Yigo, Guam",
	  dedicated: "2020, May, 2",
	  area: 6861,
	  imageUrl:
	  "https://churchofjesuschristtemples.org/assets/img/temples/yigo-guam-temple/yigo-guam-temple-26495-main.jpg"
	},
	{
	  templeName: "Washington D.C.",
	  location: "Kensington, Maryland, United States",
	  dedicated: "1974, November, 19",
	  area: 156558,
	  imageUrl:
	  "https://churchofjesuschristtemples.org/assets/img/temples/washington-d.c.-temple/washington-d.c.-temple-14992-main.jpg"
	},
	{
	  templeName: "Lima Perú",
	  location: "Lima, Perú",
	  dedicated: "1986, January, 10",
	  area: 9600,
	  imageUrl:
	  "https://churchofjesuschristtemples.org/assets/img/temples/lima-peru-temple/lima-peru-temple-12721-main.jpg"
	},
	{
	  templeName: "Mexico City Mexico",
	  location: "Mexico City, Mexico",
	  dedicated: "1983, December, 2",
	  area: 116642,
	  imageUrl:
	  "https://churchofjesuschristtemples.org/assets/img/temples/mexico-city-mexico-temple/mexico-city-mexico-temple-4060-main.jpg"
	},
	// Add more temple objects here...
	{
		templeName:"Saporo Japan",
		location: "Saporo, Japan",
		dedicated: "2016, August 21",
		area:48480,
		imageUrl:
		"https://churchofjesuschristtemples.org/assets/img/temples/sapporo-japan-temple/sapporo-japan-temple-3374-main.jpg"
	},
	{
		templeName: "Frankfurt Germany",
		location:"Frankfurt, Germany",
		dedicated: "2019, October 20",
		area: 32895,
		imageUrl: 
		"https://churchofjesuschristtemples.org/assets/img/temples/frankfurt-germany-temple/frankfurt-germany-temple-38924-main.jpg"

	},
	{
		templeName:"Hong Kong China",
		location: "Hong Kong, China",
		dedicated: "2022, June 19",
		area: 51921,
		imageUrl:
		"https://churchofjesuschristtemples.org/assets/img/temples/hong-kong-china-temple/hong-kong-china-temple-28125-main.jpg"
	},
  ];

  createTempleCard(temples);
//Temples before 1900
	const oldTemples = document.querySelector("#oldTemple");
	oldTemples.addEventListener("click", () => {
		
		createTempleCard(temples.filter(temple => {
			const year = parseInt(temple.dedicated.split(",")[0]);
			return year <1900; 
		}));
	});
//Temples after 2000
	const newTemples = document.querySelector("#newTemple");
	newTemples.addEventListener("click", () => {
		createTempleCard(temples.filter(temple =>{
			const year = parseInt(temple.dedicated.split(",")[0]);
			return year > 2000;
		}));
	});
//Temples larger than 90,000 square feet
	const largeTemples= document.querySelector("#largeTemple");
	largeTemples.addEventListener("click", () => {
		createTempleCard(temples.filter(temple => temple.area > 90000));
	});

	//Temples smaller than 10,000 square feet
	const smallTemples= document.querySelector("#smallTemple");
	smallTemples.addEventListener("click", () => {
		createTempleCard(temples.filter(temple => temple.area < 10000));
	});
//All temples
	const allTemples = document.querySelector("#allTemples");
	allTemples.addEventListener("click", () => {
		createTempleCard(temples);
	});


	function createTempleCard(filteredTemples){
		document.querySelector("#temple-box").innerHTML = "";
		filteredTemples.forEach(temple => {
			let card = document.createElement("section");
			let name = document.createElement("h3");
			let location = document.createElement("p");
			let dedication = document.createElement("p");
			let area = document.createElement("p");
			let img = document.createElement("img");
	
			name.textContent = temple.templeName;
			location.innerHTML = `<span class="label">Location: </span>${temple.location}`;
			dedication.innerHTML = `<span class="label">Dedicated: </span>${temple.dedicated}`;
			area.innerHTML = `<span class="label">Size: </span>${temple.area} sq ft`;
			img.setAttribute("src", temple.imageUrl);
			img.setAttribute("alt", `${temple.templeName} Temple`); 
			img.setAttribute("loading", "lazy"); 
	
			card.appendChild(name);
			card.appendChild(location);
			card.appendChild(dedication);
			card.appendChild(area);
			card.appendChild(img);
	
			document.querySelector("#temple-box").appendChild(card);
	
	
		}); 
	
	  }
