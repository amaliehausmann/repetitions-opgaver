let L4_1 = document.querySelector("#L4_1");
let L4_2 = document.querySelector("#L4_2");
let L4_3 = document.querySelector("#L4_3");
let L4_4 = document.querySelector("#L4_4");
let L4_5 = document.querySelector("#L4_5");

// Opgave 1
function displayFullName (inputId1, inputId2, buttonId, appendElementId){
    const firstNameInput = document.getElementById(inputId1);
    const lastNameInput = document.getElementById(inputId2);
    const button = document.getElementById(buttonId);
    const fullNameDisplay = document.createElement('p');
    const appendElement = document.getElementById(appendElementId);

    appendElement.appendChild(fullNameDisplay);
    
    button.addEventListener('click', ()=> {
        const firstNameValue = firstNameInput.value;
        const lastNameValue = lastNameInput.value;
        fullNameDisplay.innerText = 'Dit navn er: ' + firstNameValue + ' ' + lastNameValue;
    });
}

// Opgave 2
function delayFunction(inputId, buttonId, callback){
    const secondsInput = document.getElementById(inputId);
    const button = document.getElementById(buttonId);

    button.addEventListener('click', ()=> {
        const seconds = secondsInput.value;
        const delaySeconds = seconds * 1000; 
        setTimeout(callback, delaySeconds);
    })
}

function myMessageFunction(appendElementId){
    return function(){
    const appendElement = document.getElementById(appendElementId);
    const delayedMessage = document.createElement('p');
    delayedMessage.innerText = 'This is the delayed message!';
    appendElement.appendChild(delayedMessage);     
    }
}

// Opgave 3
let intervalId;
let seconds = 0;

function startStopwatch(startButtonId, element) {
    const button = document.getElementById(startButtonId);
    const timePassed = document.getElementById(element);

    button.addEventListener('click', () => {
        intervalId = setInterval(() => {
            seconds++;
            timePassed.innerText = seconds;
        }, 1000);
    });
}

function stopStopwatch(stopButtonId) {
    const button = document.getElementById(stopButtonId);

    button.addEventListener('click', () => {
        clearInterval(intervalId);
    });
}

function resetStopwatch (resetButtonId, element) {
    const button = document.getElementById(resetButtonId);
    const timePassed = document.getElementById(element);

    button.addEventListener('click', () => {
        clearInterval(intervalId);
        seconds = 0;
        timePassed.innerText = seconds;
    })
}

function percentageScrolled(appendElementId,){
    const appendElement = document.getElementById(appendElementId);
    const scrolledPercentage = document.createElement('p');
    appendElement.appendChild(scrolledPercentage);

    window.addEventListener('scroll', () => {
        let scrollTop = window.scrollY;
        let docHeight = document.body.offsetHeight;
        let winHeight = window.innerHeight;

        let scrollPercent = scrollTop / (docHeight - winHeight);
        let scrollPercentageRounded = Math.round(scrollPercent * 100);
        scrolledPercentage.innerText = 'Du har scrollet ' + scrollPercentageRounded + '%';
    });
}

// function calls
displayFullName('firstName', 'lastName', 'displayName', 'L4_1');
delayFunction('delay', 'delayButton', myMessageFunction('L4_2'));
startStopwatch('start', 'time');
stopStopwatch('stop');
resetStopwatch('reset', 'time');
percentageScrolled('L4_4');