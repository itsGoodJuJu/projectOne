// Fetch for Actors API

// Actors Function
function getActors(){
    fetch("https://freetestapi.com/api/v1/actors")
    .then((response) => response.json())
    .then((data) => {
        
        // removing actors who have died with property death_year
        for(i = 0; i < data.length; i++){
            if(data[i].death_year > 0) {
                data.splice(i, 1);
                i--;
            }
        }
        // creating cards for Actors
        console.log(data);
        for(j = 0; j < data.length; j++){
            // Creating a div container
            let actorContainer = document.getElementById("pfActor");
            actorContainer.classList.add("card");

            // Creating an image element for the actors
            let actorImage = document.createElement("img");

            // Creating p tags for each property
            let nameTag = document.createElement("p");
            let ageTag = document.createElement("p");
            let nationalityTag = document.createElement("p");
            let moviesTag = document.createElement("p");

            // creating a current year variable in order to calculate age
            let today = new Date();
            let currentYear = today.getFullYear();

            // linking image to src tag
            actorImage.src = data[j].image;

            // Adding the value paths to the inner text of tags
            nameTag.innerText = data[j].name;
            ageTag.innerText = "Age: " + (currentYear - data[j].birth_year);
            nationalityTag.innerText = "Nationality: " + data[j].nationality;
            moviesTag.innerText = "Starred in: " + data[j].known_for;

            /// Appending each p tag to actressContainer
            actorContainer.appendChild(actorImage);
            actorContainer.appendChild(nameTag);
            actorContainer.appendChild(ageTag);
            actorContainer.appendChild(nationalityTag);
            actorContainer.appendChild(moviesTag);
            
            // Appending container to the body
            document.body.appendChild(actorContainer);

        }
    })
}
// Actor function call
getActors();


// Actress Function
function getActresses(){
    fetch("https://freetestapi.com/api/v1/actresses")
    .then(response => response.json())
    .then((data) => {

        // removing actresses who have died with property death_year
        for(i = 0; i < data.length; i++){
            if(data[i].death_year > 0) {
                data.splice(i, 1);
                i--;
            }
        }
        // creating cards for Actresses
        console.log(data);
        for(j = 0; j < data.length; j++){
            // Creating a div container
            let actressContainer = document.getElementById("pfActress");
            actressContainer.classList.add("card");

            // Creating an image element for the actresses
            let actressImage = document.createElement("img");

            // Creating p tags for each property
            let nameTag = document.createElement("p");
            let ageTag = document.createElement("p");
            let nationalityTag = document.createElement("p");
            let moviesTag = document.createElement("p");

            // creating a current year variable in order to calculate age
            let today = new Date();
            let currentYear = today.getFullYear();

            // linking image to src tag
            actressImage.src = data[j].image;

            // Adding the value paths to the inner text of tags
            nameTag.innerText = data[j].name;
            ageTag.innerText = "Age: " + (currentYear - data[j].birth_year);
            nationalityTag.innerText = "Nationality: " + data[j].nationality;
            moviesTag.innerText = "Starred in: " + data[j].most_famous_movies;

            // Appending each p tag to actressContainer
            actressContainer.appendChild(actressImage);
            actressContainer.appendChild(nameTag);
            actressContainer.appendChild(ageTag);
            actressContainer.appendChild(nationalityTag);
            actressContainer.appendChild(moviesTag);

            // Appending container to the body
            document.body.appendChild(actressContainer);

        }
    })
}
// Actress function call
getActresses();




// Hero Character API
// This API Url didn't fetch without Key and Host coded in
const myHeaders = new Headers();
myHeaders.append(
  "X-RapidAPI-Key",
  "c5c4430e76msh1879a9b94f0249ap19c967jsn5c0244c8d607"
);
myHeaders.append("X-RapidAPI-Host", "superhero-api.p.rapidapi.com");

const requestOptions = {
  method: "GET",
  headers: myHeaders,
  redirect: "follow",
};

fetch("https://superhero-api.p.rapidapi.com", requestOptions)
  .then((response) => response.json())
  .then((result) => {
    for (let i = 0; i < result.heros.length; i++) {
      // Container
      let detailedHero = document.createElement("div");
      detailedHero.classList.add("card");

      // Create an hero image element
      let heroImage = document.createElement("img");

      // Tags
      let heroNameTag = document.createElement("p");
      let genderTag = document.createElement("p");
      let placeTag = document.createElement("p");
      let intelTag = document.createElement("p");
      let strengthTag = document.createElement("p");
      let speedTag = document.createElement("p");
      let durabilityTag = document.createElement("p");
      let powerTag = document.createElement("p");
      let combatTag = document.createElement("p");

      // Values
      heroNameTag.innerText = "Name:" + result.heros[i].data.name;
      genderTag.innerText = "Gender:" + result.heros[i].data.appearance.gender;
      placeTag.innerText =
        "Place-of-birth:" + result.heros[i].data.biography["place-of-birth"];
      intelTag.innerText =
        "Intelligence: " + result.heros[i].data.powerstats.intelligence;
      strengthTag.innerText =
        "Strength: " + result.heros[i].data.powerstats.strength;
      speedTag.innerText = "Speed: " + result.heros[i].data.powerstats.speed;
      durabilityTag.innerText =
        "Durability: " + result.heros[i].data.powerstats.durability;
      powerTag.innerText = "Power: " + result.heros[i].data.powerstats.power;
      combatTag.innerText = "Combat: " + result.heros[i].data.powerstats.combat;

      // Link image to src
      heroImage.src = result.heros[i].data.image.url;

      // appenchild
      detailedHero.appendChild(heroImage);
      detailedHero.appendChild(heroNameTag);
      detailedHero.appendChild(genderTag);
      detailedHero.appendChild(placeTag);
      detailedHero.appendChild(intelTag);
      detailedHero.appendChild(strengthTag);
      detailedHero.appendChild(speedTag);
      detailedHero.appendChild(durabilityTag);
      detailedHero.appendChild(powerTag);
      detailedHero.appendChild(combatTag);

      document.body.appendChild(detailedHero);
    }
  });


// Cast Building Function
function buildCast() {
    let castContainer = document.getElementById("castContainer");
    

}

function addRow() {
    document.addEventListener("DOMContentLoaded", function () {
        let addRowContainer = document.getElementById("addOne");
        let addButton = document.getElementById("addRowButton");
    
        function cloneElement() {
            const elementToClone = document.querySelector(".anotherOne");
            const clonedElement = elementToClone.cloneNode(true);
            addRowContainer.appendChild(clonedElement);
        }
        addButton.addEventListener("click", cloneElement);
    });
}

addRow();



