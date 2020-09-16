const searchParams = new URLSearchParams(window.location.search)
const search = searchParams.get('search');
console.log("JavaScript loaded");

const baseURL = "http://localhost:3000"
let dogsURL = `${baseURL}/dogs`


if (search) {
  dogsURL = `${dogsURL}?search=${search}`
}




const dogsSection = document.querySelector("section");

fetch(dogsURL)
  .then(parseJSON)
  .then(displayDogs);

  function displayDogs(dogs) {
    if (dogs.length > 0){
      dogs.forEach(showDog)
    }
    else {
      const noDogs = document.createElement('p')
      noDogs.textContent = 'no dogs match your criteria!
      document.body.append(noDogs
    }
    }
  }

function displayDogs(dogs) {
  dogs.forEach(showDog);
}

function showDog(dog) {
  const dogCard = document.createElement("div");
  
  const name = document.createElement("h2");
  name.textContent = dog.name; 
  
  const age = document.createElement("p");
  age.textContent = `${dog.age} years old`;

  dogCard.append(name, age);
  dogsSection.append(dogCard);
}

function parseJSON(response) {
  return response.json();
}