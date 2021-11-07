const baseUrl = "https://swapi.dev/api/";
const list = document.getElementById("list");
const btn = document.getElementById("load");

const getPeoples = () => {
    list.innerHTML = "in the galaxy far far away...";
    //const charakterList = new Array;
    axios
        .get(`${baseUrl}films/2`)
        .then((response) => {
            console.log(response)

            const listElems = response.data.characters.map((item) => {
                axios
                    .get(item)
                    .then((response) => {
                        console.log(response)  `
                    <div class="character">
                    <h3>${response.data.name}</h3>
                    </div>`

                    })
                    .catch((err) => {
                        console.log("Error:", err);
                    });
                console.log(listElems);
                list.innerHTML = listElems;
            })
                .catch((err) => {
                    console.log("Error:", err);
                });
        });
}
btn.onclick = getPeoples