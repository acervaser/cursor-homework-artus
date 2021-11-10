const baseUrl = "https://swapi.dev/api";
const listOfCharacters = document.getElementById("list-of-characters");
const getCharacterBtn = document.getElementById("character");
const input = document.getElementById('input');
const listOfPlanets = document.getElementById("list-of-planets")
const getPlanetsBtn = document.getElementById("planet");
const getnextBtn = document.getElementById("next");
const getprevBtn = document.getElementById("prev");
const page = document.getElementById("page")
let currentPage = 1;
const btnTranslateIntoWookiee = document.getElementById("wookiee");
const btnTranslateIntoEnglish = document.getElementById("english");
let formatWookie = false
const TranslateIntoWookiee = () => formatWookie = true;
const TranslateIntoEnglish = () => formatWookie = false;
btnTranslateIntoWookiee.addEventListener('click', TranslateIntoWookiee);
btnTranslateIntoEnglish.addEventListener('click', TranslateIntoEnglish);



const getPeople = () => {
    if (input.value >= 1 && input.value <= 6) {
        listOfCharacters.innerHTML = "in the galaxy far far away...";
    } else {
        listOfCharacters.innerHTML = "The failures is the best teacher our ...";
        return
    }
    axios
        .get(`${baseUrl}/films/${input.value}/`)
        .then((response) => {
            const listElems = response.data.characters;
            listOfCharacters.innerHTML = ''
            listElems.map((person) => {
                if (!formatWookie) {
                    getInfo(person)
                } else {
                    getInfoWookie(person)
                }

            })
                .catch((err) => {
                    console.log("Error:", err);
                    listOfCharacters.innerHTML = "Error occured :" + err.message;
                });
        });
};
function getInfo(person) {
    axios
        .get(person)
        .then((response) => {
            const info = `
                    <div class="information-character">
                    <h3>${response.data.name}</h3>
                    <p>Birth year: ${response.data.birth_year}</p>
                    <p>Gender: ${response.data.rrwowhwaworc}</p>
                    </div>`
            listOfCharacters.innerHTML += info
        })
        .catch((err) => {
            console.log("Error:", err);
            listOfCharacters.innerHTML = "Error occured :" + err.message;
        });
}
function getInfoWookie(person) {
    axios
        .get(`${person}?format=wookiee`)
        .then((response) => {
            const info = `
                    <div class="information-character">
                    <h3>${response.data.whrascwo}</h3>
                    <p>rRhahrcaoac roworarc: ${response.data.rhahrcaoac_roworarc}</p>
                    <p>Rrwowhwaworc: ${response.data.rrwowhwaworc}</p>
                    </div>`
            listOfCharacters.innerHTML += info
        })
        .catch((err) => {
            console.log("Error:", err);
            listOfCharacters.innerHTML = "Error occured :" + err.message;
        });
};
const getPlanets =() => {
    if (!formatWookie) {
        getPlanetsEnglish()
    } else {
        getPlanetsWookie()
    }
}

const getPlanetsEnglish = () => {
    listOfPlanets.innerHTML = "in the galaxy far far away...";
    page.innerHTML = currentPage;
    axios
        .get(`${baseUrl}/planets?page=${currentPage}`)
        .then((response) => {
            const listElems = response.data.results;
            console.log(listElems)
            listOfPlanets.innerHTML = ""
            listElems.map((planet) => {
                const planetInfo = `
              <div class="planet">
              <h3>${planet.name}</h3>
              <p>Planet population: ${planet.population}</p>
              <div/>`
                listOfPlanets.innerHTML += planetInfo
            })
        })
        .catch((err) => {
            console.log("Error:", err);
            listOfCharacters.innerHTML = "Error occured :" + err.message;
        });

};
const getPlanetsWookie = () => {
    listOfPlanets.innerHTML = "in the galaxy far far away...";
    page.innerHTML = currentPage;
    axios
        .get(`${baseUrl}/planets?page=${currentPage}&format=wookiee`)
        .then((response) => {
            const listElems = response.data.rcwochuanaoc;
            console.log(listElems);
            listOfPlanets.innerHTML = ""
            listElems.map((planet) => {
                const planetInfo = `
                <div class="planet">
                <h3>Whrascwo: ${planet.whrascwo}</h3>
                <p>Akooakhuanraaoahoowh: ${planet.akooakhuanraaoahoowh}</p>
                <div/>`
                  listOfPlanets.innerHTML += planetInfo
            });

        })
        .catch((err) => {
            console.log("Error:", err);
            listOfCharacters.innerHTML = "Error occured :" + err.message;
        });

}



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
getCharacterBtn.addEventListener('click', getPeople);
getPlanetsBtn.addEventListener('click', getPlanets);