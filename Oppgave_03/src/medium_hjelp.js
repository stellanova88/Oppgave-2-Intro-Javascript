// import './styles.css';
console.log("Start")

let wordCounter = 0;
let positionCounter = 0;
let wrongCounter = 0;

const words = ["hey", "javascript", "sandbox", "telle", "list", "quis", "oppgave"];


const word = document.querySelector("#word");
const wrongs = document.querySelector("#wrongs");
const letter = document.querySelector("#letter")
const button = document.querySelector("button");

console.log(words[positionCounter])
// console.log(words[positionCounter].)



const setWord = () => {
  // TODO: Skriv ut ordet som brukeren skal skrive eller en medling om at det ikke er flere ord igjen
  word.innerHTML = words[positionCounter];
   
  
};

const changeWord = () => {
  console.log("Change word")
  positionCounter = 0
  wordCounter++
  setWord();
};

// TODO: Sjekk vi har skrevet riktig bokstav. Må ta hensyn til plassen i ordet vi skal skrive
const checkPosition = (word, position, letter) => {
  if (letter === word.position)
  return true;
};

// TODO: Sjekk om posisjonen vi er på er lik lengden på ordet vi skal skrive. Det betyr at vi er ferdig med ordet og kan bytte ord
const wordIsCorrect = (word, position) => {
  if (word.lenght === position)
  console.log("word.lengt = " + word.lenght + " posisjon = " + posisjon)
  console.log("WordIsCorrect")
  return true;
};

const handleKeyUp = ({ key }) => {
  // TODO: Hent ut ordet vi skal skrive
  const word = words[positionCounter];
  if (checkPosition(word, positionCounter, key)) {
    positionCounter++
    }
    if (wordIsCorrect(word, positionCounter)) {
      console.log("Correct word")
      changeWord()
    }
    else {
      console.log("wrong: " + wrongCounter)
    wrongCounter++
  }
  updateUI(key);
};

const updateUI = (key) => {
  // TODO: Sjekk om det er flere ord igjen
  if (words[wordCounter]) {
    // TODO: Oppdater HTML for
    // - stylingen på ordet basert på hvilken posisjon vi er på (hvilken bokstav vi skal skrive)
    wrongs.innerHTML = "WrongCounter: " + wrongCounter;
    letter.innerHTML = key;
    word.innerHTML = `<span class="green">${words[wordCounter].slice(
      0,
      positionCounter
    )}</span>${words[wordCounter].slice(positionCounter)}`
  }
};

// TODO: Lytt til keyup på window
window.addEventListener('keyup', handleKeyUp);
button.addEventListener('click', () => {
  button.disabled = true;
  setWord();
});
