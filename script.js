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
            let actorContainer = document.getElementById("actorsContainer");
            let actorCard = document.createElement("div");
            actorCard.classList.add("card");

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
            actorCard.appendChild(actorImage);
            actorCard.appendChild(nameTag);
            actorCard.appendChild(ageTag);
            actorCard.appendChild(nationalityTag);
            actorCard.appendChild(moviesTag);

            // Appending container to the body
            actorContainer.appendChild(actorCard);
        }
        console.log()
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
            let actressContainer = document.getElementById("actressContainer");
            let actressCard = document.createElement("div");
            actressCard.classList.add("card");

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

            // Appending each p tag to actressCard
            actressCard.appendChild(actressImage);
            actressCard.appendChild(nameTag);
            actressCard.appendChild(ageTag);
            actressCard.appendChild(nationalityTag);
            actressCard.appendChild(moviesTag);

            // Appending container to the body
            actressContainer.appendChild(actressCard);
        }
    })
}
// Actress function call
getActresses();


// dropdown selection function
function dropFunction() {
  // actor dropdown
  fetch("https://freetestapi.com/api/v1/actors")
  .then((response) => response.json())
  .then((data) => {
      for(i = 0; i < data.length; i++){
          // dropdown
          let actorDropdown = document.getElementById("dropdownMenu");
          // let actorItems = document.createElement("ul");
          let nameChoice = document.createElement("option");
          nameChoice.innerText = data[i].name;
          // actorItems.appendChild(nameChoice);
          actorDropdown.appendChild(nameChoice);
      }
  });

  // actress dropdown
  fetch("https://freetestapi.com/api/v1/actresses")
  .then(response => response.json())
  .then((data) => {
    for(j = 0; j < data.length; j++){
      // dropdown
      let actressDropdown = document.getElementById("dropdownMenu");
      // let actorItems = document.createElement("ul");
      let nameChoice = document.createElement("option");
      nameChoice.innerText = data[j].name;
      // actorItems.appendChild(nameChoice);
      actressDropdown.appendChild(nameChoice);
  }
  });
}
dropFunction();


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
      let heroContainer = document.getElementById("characterContainer")
      let heroCard = document.createElement("div");
      heroCard.classList.add("card");

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
      heroNameTag.innerText = "Name: " + result.heros[i].data.name;
      genderTag.innerText = "Gender: " + result.heros[i].data.appearance.gender;
      placeTag.innerText =
        "Place-of-birth: " + result.heros[i].data.biography["place-of-birth"];
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
      heroCard.appendChild(heroImage);
      heroCard.appendChild(heroNameTag);
      heroCard.appendChild(genderTag);
      heroCard.appendChild(placeTag);
      heroCard.appendChild(intelTag);
      heroCard.appendChild(strengthTag);
      heroCard.appendChild(speedTag);
      heroCard.appendChild(durabilityTag);
      heroCard.appendChild(powerTag);
      heroCard.appendChild(combatTag);

      heroContainer.appendChild(heroCard);
    }
  });

  // hero dropdown button
  function heroSelect(){
    fetch("https://superhero-api.p.rapidapi.com", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        for(i = 0; i < result.heros.length; i++){
          // dropdown
          let heroDropdown = document.getElementById("heroOptions");
          let heroChoice = document.createElement("option");
          heroChoice.innerText = result.heros[i].data.name;
          heroDropdown.appendChild(heroChoice);
      }
      });
}
heroSelect();


// function to add additional selection rows
function addRow() {
    document.addEventListener("DOMContentLoaded", function () {
        let addRowContainer = document.getElementById("addOne");
        let addButton = document.getElementById("addRowButton");
    
        function copyElement() {
            const elementToClone = document.querySelector(".anotherOne");
            const clonedElement = elementToClone.cloneNode(true);
            addRowContainer.appendChild(clonedElement);
        }
        addButton.addEventListener("click", copyElement);
    });
}
addRow();


// submit function
function getCast() {
    // popup window
    let castPopup = document.getElementById('finalPopup');
    castPopup.style.display = "block";

    let outputName = document.querySelector('.form-control'); 
    // Get the value of the input field 
    let userInput = outputName.value; 
    document.querySelector('.outputName').innerText = userInput;
          

    // hero selection shown in popup
    let selectHero = document.querySelector('.heroOptions');
    let outputHero = selectHero.options[selectHero.selectedIndex].value;
    document.querySelector('.outputHero').innerText = outputHero;

    // actor selection shown in popup
    let selectActor = document.querySelector('.dropdownMenu');
    let outputActor = selectActor.options[selectActor.selectedIndex].value;
    document.querySelector('.outputActor').innerText = outputActor;

}

function closeOut() {
  let closePopup = document.getElementById('finalPopup');
  closePopup.style.display = "none";
}

// JQuery UI Animation 
$(document).click(function() {
  $("#welcomeContainer").effect("bounce", "slow");
});





