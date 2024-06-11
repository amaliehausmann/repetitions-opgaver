let L1_1 = document.querySelector("#L1_1");
let L1_2 = document.querySelector("#L1_2");
let L1_3 = document.querySelector("#L1_3");
let L1_4 = document.querySelector("#L1_4");
let L1_5 = document.querySelector("#L1_5");
let L1_6 = document.querySelector("#L1_6");

// buttons
let toggleOne = document.getElementById('toggle1');
let toggleTwo = document.getElementById('toggle2');

// other
let msg = document.getElementById('msg');

// Opgave 1
function fullName(firstName, lastName) {
  let greeting = "Welcome " + firstName + " " + lastName;
  let newH3 = document.createElement("h3");
  newH3.innerText = greeting;
  L1_1.appendChild(newH3);
}

// Opgave 2
function toggleVisibility(element, className) {
  element.classList.toggle(className);
}

// Opgave 3
function colorElement(element, className) {
  element.classList.toggle(className)
  if(element.classList.contains(className)){
    msg.style.display = 'block';
  } else{
    msg.style.display = 'none';
  }
}

// Opgave 4
function clickCounter(buttonId, displayId){
  const button = document.getElementById(buttonId);
  const display = document.getElementById(displayId);

  let count = 0;

  button.addEventListener('click', function() {
    count++;
    display.innerText = count;
  });
}

// Opgave 5
function wordLengthDisplay (inputId, displayId){
  const displayer = document.getElementById(displayId);
  const input = document.getElementById(inputId);

  input.addEventListener('input', function(){
    const inputValue = input.value.trim().length;
    displayer.innerText = inputValue;
  });
}

// Opgave 6

function removeVowels(lettersToRemove, inputId, displayId){
  const Resultdisplay = document.getElementById(displayId);
  const input = document.getElementById(inputId);
  const regex = new RegExp (`[${lettersToRemove}]`, 'gi');

  input.addEventListener('input', function() {
    const newString = input.value.replace(regex, '');
    Resultdisplay.innerText = newString;

  })
}


// Function Calls
fullName("Amalie", "Hausmann");

toggleOne.addEventListener('click', function() {
  toggleVisibility(L1_2, 'hidden');
});

toggleTwo.addEventListener('click', function(){
  colorElement(L1_3, 'background');
});

clickCounter('counts', 'clickCounter');

wordLengthDisplay('word', 'displayLength');

removeVowels('aeiouyæøå', 'vowels', 'resultDisplay');

