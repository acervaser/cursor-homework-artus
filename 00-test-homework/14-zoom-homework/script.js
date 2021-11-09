const baseUrl = "https://swapi.dev/api";
const listOfCharacters = document.getElementById("list-of-characters");
const getCharacterBtn = document.getElementById("character");
const input = document.getElementById('input');

const getPeople = () => {
    if(input.value >= 1 && input.value <= 6 ){
        listOfCharacters.innerHTML = "in the galaxy far far away...";
    }else{
        listOfCharacters.innerHTML = "The failures is the best teacher our ...";
        return
    }
    axios
    .get(`${baseUrl}/films/${input.value}/`)
    .then((response) => {
        let list = "";
        let listElems = response.data.characters;
        listElems.map(item => {
            axios
            .get(item)
            .then((response) => {
                console.log(response)
                let r =   Object.values(response)
                console.log(r)
                Object.values(response).map((status) => {
                        list += `
                        <div >  
                            <h3>Full name: ${status}</h3>
                            <p>Date of birth: ${status}</p>
                            <p>Gender: ${status}</p>
                        </div>
                        `
                    
                });
                listOfCharacters.innerHTML += list;
            })
            .catch((err) => {
                console.log("Error:", err);
                listOfCharacters.innerHTML = "Error occured :" + err.message;
            });
        });
    })
    .catch((err) => {
        console.log("Error:", err);
        listOfCharacters.innerHTML = "Error occured :" + err.message;
    });
};

getCharacterBtn.addEventListener('click', getPeople);
  //console.log(charakterList)  `
                    //<div class="character">
                   // <h3>${response2.data.name}</h3>
                    //</div>`
                    //console.log(charakterList)