// Oppgave 1

//Henter knappen
const btnRemove = document.querySelector("#remove-btn");
//Ved click:
btnRemove.addEventListener("click", removeClick);

const removeElement = document.getElementById("remove");

function removeClick(){
    removeElement.remove();
}


// Oppgave 2

const btnChange = document.querySelector("#change-btn");

btnChange.addEventListener("click", changeClick);

const changeElement = document.getElementById("change");

function changeClick(){
    changeElement.innerHTML = "Hello world";
}

// Oppgave 3

const inputbox = document.querySelector("#input");

inputbox.addEventListener("keypress", inputText);
const textBox = document.getElementById("input-text");

function inputText(){
    let newText = inputbox.value;
    textBox.innerHTML = newText;
}

// Prøver å gjøre det samme med en arrow function, men det fungerer ikke????
// const inputText = () => {
//     let newText = inputbox.value;
//     textBox.innerHTML = newText;
// }

// Oppgave 4
const myList = ['item one', 'item two', 'item three'];

const btnMyList = document.querySelector("#write-list");
btnMyList.addEventListener("click", printMyList);

function printMyList(){
    for (let i = 0; i < myList.length; i++){
        console.log(myList[i]);
    }
}

// Oppgave 5
const btnCreate = document.querySelector("#create");
btnCreate.addEventListener("click", addElement);

const textFormPlaceholder = document.getElementById("text");

function addElement(){
    const nedTrekkElement = document.querySelector("select").value;
    console.log(nedTrekkElement);

    textFormPlaceholder.placeholder = nedTrekkElement;
}

// Oppgave 6
const btnRemoveLi = document.querySelector("#remove-li");
btnRemoveLi.addEventListener("click", removeLi);
const listToRemove  = document.querySelector("#list");


function removeLi (){
    listToRemove.removeChild(listToRemove.lastElementChild);
}

// Oppgave 7
const textBox7 = document.querySelector("#name");
textBox7.addEventListener("keydown", checkLength);

const btnOrder = document.querySelector("#order");



function checkLength(){
    if (textBox7.value.length!=3){
        btnOrder.style.border =" 2px solid red";
    }
    else{
        btnOrder.style.border ="none";
    }
}

// Oppgave 8
const btnColor = document.querySelector("#color");
btnColor.addEventListener("click", giveChildrenBorder);
const listToColor = document.querySelector(".children");


// listToColor.childNodes[1].style.border =" 2px solid red";

// console.log(listToColor.children.length);

function isEven(value){
    return !(value % 2);
}

function giveChildrenBorder(){
    for (let i = 0; i < listToColor.children.length; i++){
        console.log("hey");

        listToColor.childNodes[i].style.border =" 2px solid red";
    }
}
