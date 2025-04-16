//Get date
const year = document.querySelector("#currentyear");
const today = new Date();

year.innerHTML = `<p>&copy; <span id="currentyear">${today.getFullYear()}</span> 🦔 Ana Laura Toledo 🦔 Mexico </p>`;
const full = document.querySelector("#lastModified");

if (full) {
    full.innerHTML = `Last Modification: <span class="highlight">${document.lastModified}</span>`;
}

//Options to select
const subjects = [
    {
      name: "Complaints about spam or other users"
    },
    {
      name: "Linguistic or spelling errors in texts/translations"
    },
    {
      name: "Technical comment (programming errors, page problems)"
    },
    {
      name: "Content feedback (improvements or criticisms)"
    },
    {
      name: "Financial support (I'd like to support the project)"
    },
    {
        name:"Joining the team (as a translator, dictionaryr, or similar)"
    },
    {
        name:"Other topic"
    }
  ];


const selectElement = document.querySelector("#topics");

if (selectElement) {
subjects.forEach(topicos => {
    const option = document.createElement("option");
    option.textContent = topicos.name;
    option.value = topicos.id;
  
    selectElement.appendChild(option);
});
} else {
    console.error("❌ No se encontró el elemento con id #topics");
}

//Hamburger menu
const hamButton = document.querySelector("#menu");
const navigation = document.querySelector("nav");

hamButton.addEventListener("click", () => {
	navigation.classList.toggle("open");
	hamButton.classList.toggle("open");
});