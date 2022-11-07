// declaring arrays

const num = [0,1,2,3,4,5,6,7,8,9];
const countryCodes = ['lk', 'us', 'ro', 'fr', 'es', 'in', 'ml', 'sg', 'za', 'jp'];
const countryNames = ['Sri Lanka', 'United States', 'Romania', 'France', 'Spain', 'India', 'Mali', 'Singapore', 'South Africa', 'Japan'];

// setting values for necessary variables

function getNewNum() {
    let newNum =  Math.floor(Math.random() * countryCodes.length);
    return newNum;
}
function getCountryCode() {
    let countryCode = countryCodes[currentNum];
    return countryCode;
}
function getCountryName() {
    let countryName = countryNames[currentNum];
    return countryName;
}
function generateRandomIntegerInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// initializations (global variables)

let currentNum = getNewNum();
let currentCountryName = getCountryName();
let correctAnswerNumber;

// for testing:

console.log(currentNum);
console.log(typeof(currentNum));
console.log(currentCountryName);
console.log(getCountryCode());

// change text of correct option

function changeCorrectOptionText(correctAnswerNumber) {
    document.getElementById(String(correctAnswerNumber)).innerHTML = getCountryName();
}

// getting text of other option

function getOtherOptionText() {
    let otherOptionText;
    do {
        otherOptionText = countryNames[Math.floor(Math.random() * countryNames.length)];
    } while (otherOptionText === currentCountryName);
    return otherOptionText;
}

// changing text of other options

function changeTextOfOtherOptions() {
    for (let i = 1; i <= 4; i++) {
        if (i !== correctAnswerNumber) {
            document.getElementById(String(i)).innerHTML = getOtherOptionText();
        }
    }
}

function test() {
    let option1Text = document.getElementById('1').innerHTML;
    let option2Text = document.getElementById('2').innerHTML;
    let option3Text = document.getElementById('3').innerHTML;
    let option4Text = document.getElementById('4').innerHTML;
    for (let i = 1; i <= 4; i++) {
        do {
            if (i !== correctAnswerNumber) {
                document.getElementById(String(i)).innerHTML = getOtherOptionText();
            }
        } while (document.getElementById(String(i)).innerHTML === option1Text || document.getElementById(String(i)).innerHTML === option2Text || document.getElementById(String(i)).innerHTML === option3Text || document.getElementById(String(i)).innerHTML === option4Text);
    }
}

// checking whether answer is correct or not

function checkAnswer(buttonID) {
    console.log(buttonID);
    console.log(typeof(buttonID));
    if (Number(buttonID) === correctAnswerNumber) {
        correct();
    } else {
        incorrect();
    }
}

// program starts, question is asked

function question() {

    // get new correct answer number
    correctAnswerNumber = generateRandomIntegerInRange(1, 4);

    // change button text of correct answer to correct country name
    changeCorrectOptionText(correctAnswerNumber);

    // change button text of other answers to random country names
    changeTextOfOtherOptions();

    // change heading
    document.getElementById('headingText').innerHTML = "WHAT'S THE COUNTRY?";

    // remove description
    document.getElementById('description').style.display = 'none';

    // display flag
    document.querySelector('.flag').style.display = 'flex';
    let URLcomp1 = 'https://flagcdn.com/';
    let flagURL = URLcomp1.concat(getCountryCode(),'.svg');
    console.log(flagURL);
    // document.querySelector('.flag').style.backgroundImage = 'url("https://flagcdn.com/ru.svg")';
    document.querySelector('.flag').style.cssText+= `background-image: url(${flagURL})`;
    // document.querySelector('.flag').style.backgroundImage = 'url(' + flagURL + ')';
    document.querySelector('.flag').style.backgroundSize = 'contain';
    document.querySelector('.flag').style.backgroundRepeat = 'no-repeat';
    document.querySelector('.flag').style.backgroundPositionX = 'center';

    // display options
    document.querySelector('.options').style.display = 'block';

    // remove globe
    document.querySelector('.background').style.display = 'none';

    // remove start button
    document.querySelector('.start').style.display = 'none';
}

// correct answer is received

function correct() {

    // change heading
    document.getElementById('headingText').innerHTML = "CORRECT!";

    // leave flag

    // display country name and description
    document.querySelector('.countryDescription').style.display = 'block';
    document.getElementById('countryName').innerHTML = currentCountryName;

    // remove options
    document.querySelector('.options').style.display = 'none';

    // show next flag button
    document.querySelector('.next').style.display = 'block';
}

// incorrect answer is received

function incorrect() {
    
    // change heading
    document.getElementById('headingText').innerHTML = "INCORRECT!";
    
    // leave flag

    // display country name and description
    document.querySelector('.countryDescription').style.display = 'block';
    document.getElementById('countryName').innerHTML = currentCountryName;

    // remove options
    document.querySelector('.options').style.display = 'none';

    // show next flag button
    document.querySelector('.next').style.display = 'block';
}

// "Next Flag" button is clicked

function next() {

    // reset variables
    currentNum = getNewNum();
    currentCountryName = getCountryName();

    // remove country description
    document.querySelector('.countryDescription').style.display = 'none';

    // remove next flag button
    document.querySelector('.next').style.display = 'none';

    question();
}