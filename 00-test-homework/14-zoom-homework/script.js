const baseUrl = "https://swapi.dev/api";
const listOfCharacters = document.getElementById("list-of-characters");
const getCharacterBtn = document.getElementById("character");
const input = document.getElementById('input');
const listOfPlanets = document.getElementById("list-of-planets")
const getPlanetsBtn = document.getElementById("planet");
const getnextBtn = document.getElementById("next");
const getprevBtn = document.getElementById("prev");
let currentPage = 1;
const translateIntoWookiee = document.getElementById("wookiee");
const translateIntoEnglish = document.getElementById("english");
const formatWookie = ""



const getPeople = () => {
    if (input.value >= 1 && input.value <= 6) {
        listOfCharacters.innerHTML = "in the galaxy far far away...";
    } else {
        listOfCharacters.innerHTML = "The failures is the best teacher our ...";
        return
    }
    axios
        .get(`${baseUrl}/films/${input.value}/${formatWookie}`)
        .then((response) => {
            const listElems = response.data.characters;
            listOfCharacters.innerHTML = ''
            listElems.map((person) => {
                getInfo(person)
            })
                .catch((err) => {
                    console.log("Error:", err);
                    listOfCharacters.innerHTML = "Error occured :" + err.message;
                });
        });
}



function getInfo(person) {
    axios
        .get(person)
        .then((response) => {
            const info = `
                    <div class="character">
                    <h3>${response.data.name}</h3>
                    <p>${response.data.birth_year}</p>
                    <p>${response.data.gender}</p>
                    </div>`
            listOfCharacters.innerHTML += info
        })
        .catch((err) => {
            console.log("Error:", err);
            listOfCharacters.innerHTML = "Error occured :" + err.message;
        });
};

const getPlanets = () => {
    axios
        .get(`${baseUrl}/planets/?page=${currentPage}`)
        .then((response) => {
            const listElems = response.data.results;
            console.log(listElems)
            listOfPlanets.innerHTML = ""
            listElems.map((planet) => {
                const planetInfo = `
<div class="character">
<h3>${planet.name}</h3>
<p>${planet.orbital_period}</p>
<p>${planet.population}</p>
</div>`
                listOfPlanets.innerHTML += planetInfo
            })


        })
        .catch((err) => {
            console.log("Error:", err);
            listOfCharacters.innerHTML = "Error occured :" + err.message;
        });

}

getCharacterBtn.addEventListener('click', getPeople);
getPlanetsBtn.addEventListener('click', getPlanets);

function getnextPage() {
    if (currentPage === 6) return;
    console.log(currentPage)
    currentPage++
    getPlanets()

}
function getprevPage() {
    if (currentPage === 1) return;
    console.log(currentPage)
    currentPage--
    getPlanets()

};

getprevBtn.addEventListener('click', getprevPage);
getnextBtn.addEventListener('click', getnextPage);