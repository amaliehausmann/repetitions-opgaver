let L3_1 = document.querySelector("#L3_1");
let L3_2 = document.querySelector("#L3_2");
let L3_3 = document.querySelector("#L3_3");
let L3_4 = document.querySelector("#L3_4");
let L3_5 = document.querySelector("#L3_5");

// ElementCreator
function addElementWithTexts(appendElement, newElement, elementText){
    const addNewElement = document.createElement(newElement);
    addNewElement.innerText = `${elementText}`;
    appendElement.appendChild(addNewElement);
  }

// Opgave 1

function tilføjElev(nyElev){
    this.elever.push(nyElev);
}

let Klasse = {
    holdnr: "H1We010124",
    lokale: "P025",
    elever: ["Mathias", "Christian", "Elena", "Makka", "Alikhan", "Loveleen", "Omid", "Rolf", "Michael", "Peter", "Evelina", "Jack"],
}

// Opgave 2
function addStudent(inputId,buttonId, appendElementId){
    const appendElement = appendElementId;
    const addNewStudent = document.getElementById(inputId);
    const addButton = document.getElementById(buttonId);

    const newStudent = document.createElement('p');
    appendElement.appendChild(newStudent);

    const classList = document.createElement('p');
    appendElement.appendChild(classList);
    
    function updateStudentList() {
        classList.innerText = Klasse.elever.join(', ');
    }

    updateStudentList();

    addButton.addEventListener('click', function() {
        const studentValue = addNewStudent.value;
        if(Klasse.elever.includes(studentValue)){
            newStudent.innerText = `${studentValue} er allerede på listen`;
        } else{
            Klasse.tilføjElev(`${studentValue}`)
            updateStudentList();
        }
    })
}

// Opgave 3

function appendObject(objectNavn, værdi1, værdi2, værdi3, appendElementId) {
    const appendElement = appendElementId;
    const Hold = objectNavn[værdi1];
    const Rum = objectNavn[værdi2];
    const Elever = objectNavn[værdi3];
    
    addElementWithTexts(appendElement, 'h2', `${Hold}`);
    addElementWithTexts(appendElement, 'h3', `${Rum}`);
    addElementWithTexts(appendElement, 'p', `${Elever.join(', ')}`);
}

// Opgave 4
const numberArray = [2, 45, 36, 89, 43, 69, 420, 10, 38, 21];

function sumNumbers(array, appendElementId) {
    const appendElement = document.getElementById(appendElementId);
    let sum = 0;
    for (let index = 0; index < array.length; index++) {
        sum += array[index];
    }
    const result = document.createElement('p');
    result.innerText = `Summen af tallene er: ${sum}`;
    appendElement.appendChild(result);
}

// Opgave 5
function displayObjectValues(Objekt, appendElementId) {
    const appendElement = document.getElementById(appendElementId);

    Object.entries(Objekt).forEach(([key, value]) => {
        const valueElement = document.createElement('p');
        valueElement.innerText = value;
        appendElement.appendChild(valueElement);
    });
}


// function calls
addStudent('studentAdd', 'addToList', L3_1);
appendObject(Klasse, 'holdnr', 'lokale', 'elever', L3_3);
sumNumbers(numberArray, 'L3_4')
displayObjectValues(Klasse, 'L3_5');
