//Get date
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


//Random curiosities
function getRandomItem(arr) {
    return Math.floor(Math.random() * arr.length);
}

const topics = [
	"79 letter word",
	"130 million people speak German as their Mother tongue or as a second language",
	"German words have three genders",
	"Time is counted with reference to the upcoming hour",
	"English and German share 60% of their vocabulary",
	"Words that exist only in German",
	"All nouns are capitalised",
	"German has a unique letter",
	"The Gutenberg Bible"
	
];

const subjects = [
	"German is famous for its excessively long words with the longest word being made up of 79 letters! Donaudampfschiffahrtselektrizitätenhauptbetriebswerkbauunterbeamtengesellschaft means “association of subordinate officials of the head office management of the Danube steamboat electrical services” (the name of a pre-war club in Vienna).",
	"Approximately 130 million people speak German as their mother language, or as a second language. German is the most widely spoken mother language in the EU and is an official language in 7 countries.",
	"In many Romance languages, nouns are either masculine or feminine, which has historically caused headaches for some language learners. German is even more complicated as it has a third gender known as neuter for words that are neither masculine nor feminine.",
	"In German if someone tells you that it is halb drei (“half three”), you might assume that it's 3:30. However, this is wrong because in German you report time by counting the minutes to the next hour, so “half three” means that it's half an hour until three: in other words, it's 2:30.",
	"Due to their close relation, German and English share more than half of their vocabulary! In comparison, English and French share just 27% of their vocabulary.",
	"Some German words don't have an equivalent in other languages. For example, “fremdschämen” refers to shame felt on another person's behalf. And “Fernweh” (having the travel bug, lusting after adventure) is the opposite of “Heimweh (homesickness).",
	"In English, only proper nouns like people's names and the names of countries and cities are capitalised. In German, every single noun is capitalised.",
	"The German alphabet contains an extra consonant, ß, called “Eszett” representing the double-S. ß is unique among German consonants in that it is never found at the beginning of a word and it is not always interchangeable with the SS, for example, the German word masse and maße mean two different words (weight and size).",
	"The Gutenberg Bible was the first-ever printed book by movable type and it was written in German by Johannes Gutenberg in 1454."
];

function showRandomCuriosity() {
	const randomTopic = getRandomItem(topics);

	document.querySelector("#curiosity-title").innerHTML = `<h4>${topics[randomTopic]}</h4>`;
    document.querySelector("#curiosity").innerHTML = `<p>${subjects[randomTopic]}</p>`;

}


document.addEventListener("DOMContentLoaded", showRandomCuriosity);
document.querySelector("#curiosity-btn").addEventListener("click", showRandomCuriosity);

// get the number of visitors
const visitsDisplay = document.querySelector(".visits");

if (visitsDisplay) {
    let numVisits = Number(window.localStorage.getItem("numVisits-ls")) || 0;

    if (numVisits !== 0) {
        visitsDisplay.textContent = `You are our visitor number ${numVisits + 1}. 🥳 Thank you!`;;
    } else {
        visitsDisplay.innerHTML = `<p>You are our first visitor. 🥳 Welcome!</p>`;
    }
    numVisits++;
    localStorage.setItem("numVisits-ls", numVisits);
}