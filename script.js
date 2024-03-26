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
