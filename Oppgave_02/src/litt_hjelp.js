import { users } from './util.js';
console.log("Start")

// console.log(users)
// const users = [
//   { id: 0, name: "Trude", age: 77 },
//   { id: 1, name: "Simen", age: 85 },
//   { id: 2, name: "Lars", age: 99 },
//   { id: 3, name: "Ali", age: 34 },
//   { id: 4, name: "Finn", age: 60 },
//   { id: 5, name: "Kåre", age: 70 },
//   { id: 6, name: "Hanne", age: 20 },
//   { id: 7, name: "Åse", age: 21 },
//   { id: 8, name: "Anne", age: 6 },
//   { id: 9, name: "Amanda", age: 31 },
//   { id: 10, name: "Morgan", age: 87 }
// ];

// TODO: Hent HTML #id med getElementById
const searchInput = document.getElementById("name")
const filterInput = document.getElementById("age");
const filterButton = document.getElementById("filter");
const userUl = document.getElementById("users");

console.log(searchInput.value)

const createTableUI = (users) => {
  userUl.innerHTML = null;
  userUl.innerHTML += `<li><span>Id</span><span>Navn</span><span>Alder</span></li>`;
  // TODO: bruk for-of eller vanlig for-løkke og tempelate literals `` 
  // til å skrive ut listen med brukere
  console.log(users)
  for (const user of users){
    userUl.innerHTML += `<li><span>${user.id}</span><span>${user.name}</span><span>${user.age}</span></li>`;  
  }
}
// let testFind = users.name.find("Trude")
// console.log(testFind)
  

const handleSearch = () => {
  // TODO: Hent ut verdien fra søke input feltet
  const searchName = searchInput.value;
  console.log(searchName)
  // TODO: Sjekk om searchName ekisterer
  if (searchName){
    // TODO: Bruk .find for å finne navnet til den brukeren som matcher søkeordet
    const searchResult = users.find(function (searchResult){
      if (searchResult.name === searchName){
          return searchResult
      }
    });
    
    // TODO: Sjekk som resultatet eksisterer
    
    if (searchResult) {
      // console.log(searchResult)
      console.log("Fant")
      // TODO: Oppdatere grensesnittet med createTableUI og resultatet av søket
      console.log(searchResult)
      createTableUI(searchResult)
    } else {
      // TODO: Oppdatere grensesnittet med userUl.innerHTML og en passende tekst når vi ikke finner noe
      userUl.innerHTML = "<p>Fant ikke personen i listen</p>"
    }
  }
      else {
      // TODO: Hvis ingen søkeord vis default liste med brukere via createTableUI
      createTableUI(users)
    }
}

const handleFilter = () => {
  // TODO: Hent ut verdien fra filter input feltet
  const filterValue = filterInput.value;
  if (filterValue && Number(filterValue)) {
    // TODO: Bruk .filter for å hente ut de brukeren  som har en alder høyere en filterverdien
    const filterResult = users.filter(function (filterResult) {
      if (filterResult.age >= filterValue) {
          return filterResult;
      }
    });
    console.log(filterResult)
    if (filterResult && filterResult.length > 0) {
      // TODO: Oppdatere grensesnittet med createTableUI og resultatet av filteret
      createTableUI(filterResult)
    } else {
      userUl.innerHTML = "<p>Ingen Resultat</p>"
      // TODO: Oppdatere grensesnittet med userUl.innerHTML og en passende tekst når vi ikke finner noe
    }
  } else {
    // TODO: Hvis ingen filter eller filteret ikke er et tall vis default liste med brukere via createTableUI
    createTableUI(users)
  }
};

const main = () => {
  createTableUI(users);
};

main();

// TODO: Lytt til tastatur klikk på søkefeltet, den skal trigge søkefunksjonen (handleSearch)
// TODO: Lytt til klikk på filter-knappen, den skal trigge filterfunksjonen (handleFilter)
searchInput.addEventListener('keyup', handleSearch);
filterButton.addEventListener('click', handleFilter);