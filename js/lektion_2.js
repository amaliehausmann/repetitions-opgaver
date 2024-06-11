let L2_1 = document.querySelector("#L2_1");
let L2_2 = document.querySelector("#L2_2");
let L2_3 = document.querySelector("#L2_3");
let L2_4 = document.querySelector("#L2_4");
let L2_5 = document.querySelector("#L2_5");

// Opgave 1
function checkType(inputId, displayId1, displayId2){
    const input = document.getElementById(inputId);
    const displayOne = document.getElementById(displayId1);
    const displayTwo = document.getElementById(displayId2);

    input.addEventListener('input', function() {
        const value = input.value;
        displayOne.innerText = value;
        if (!isNaN(value)) {
            displayTwo.innerText = 'Number';
        } else {
            displayTwo.innerText = 'String';
        }
    });
}

// Opgave 2
function checkEmail (inputId, displayId){
    const emailRegex = new RegExp(/^[\w.-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)
    const emailAddress = document.getElementById(inputId);
    const display = document.getElementById(displayId);

    emailAddress.addEventListener('input', function() {
        if(emailRegex.test(emailAddress.value)){
            display.innerText = '';
        } else{
            display.innerText = 'IKKE';
        }
    });
}

// Opgave 3

function checkStringLength(inputId, displayId){
    const stringField = document.getElementById(inputId);
    const result = document.getElementById(displayId);

    stringField.addEventListener('input', function(){
        const stringLength = stringField.value.length;
        if (stringLength < 2){
            result.innerText = 'IKKE længere end';
        } else if (stringLength == 2){
            result.innerText = 'Lig med';
        } else{
            result.innerText = 'Længere end';
        }
    });
}

// Opgave 4
function randomNumberGenerator(inputIdOne, inputIdTwo,buttonId,result){
    const inputOne = document.getElementById(inputIdOne);
    const inputTwo = document.getElementById(inputIdTwo);
    const button = document.getElementById(buttonId);
    const randomResult = document.getElementById(result);

    button.addEventListener('click', function(){
        const firstNumber = parseInt(inputOne.value);
        const secondNumber = parseInt(inputTwo.value);

        if(!isNaN(firstNumber) && !isNaN(secondNumber)){
            const randomNumber = Math.floor(Math.random() * (secondNumber - firstNumber + 1)) + firstNumber;
            randomResult.innerText = randomNumber;
        } else{
            randomResult.innerText = 'Ugyldigt input!'
        }
    });
}

function coloredElement(buttonId) {
    const colorButton = document.getElementById(buttonId);
    const element = document.createElement('div');
    element.classList.add = 'elementLek2';
    L2_5.appendChild(element);

    colorButton.addEventListener('click', function() {
        const red = Math.floor(Math.random() * 256);
        const green = Math.floor(Math.random() * 256);
        const blue = Math.floor(Math.random() * 256);
        const RGBValue = `rgb(${red}, ${green}, ${blue})`;

        element.style.backgroundColor = RGBValue;
    });
    
}




// function Calls
checkType('typeCheck', 'input', 'type');

checkEmail('email', 'not');

checkStringLength('length', 'result');

randomNumberGenerator('randomGeneratorOne', 'randomGeneratorTwo','generator', 'randomNumber');

coloredElement('colorGenerator');