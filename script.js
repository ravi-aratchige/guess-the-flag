// declaring arrays

const num = [0,1,2,3,4,5,6,7,8,9];
const countryCodes = ['lk', 'us', 'ro', 'fr', 'es', 'in', 'ml', 'sg', 'za', 'jp'];
const countryNames = ['Sri Lanka', 'United States', 'Romania', 'France', 'Spain', 'India', 'Mali', 'Singapore', 'South Africa', 'Japan'];

function getNewNum() {
    let newNum =  Math.floor(Math.random() * 10);
    return newNum;
}

function getNewCountryCode() {
    let newCountryCode = countryCodes[currentNum];
    return newCountryCode;
}

function getNewCountryName() {
    let newCountryName = countryNames[currentNum];
    return newCountryName;
}

// initializations
let currentNum = 0
currentNum = getNewNum();
currentCountryName = getNewCountryName();
// for testing:
console.log(currentNum);
console.log(currentCountryName);
console.log(getNewCountryCode());

// checking whether answer is correct or not

// let correctAnswerNumber = Math.floor(Math.random() * 4);

function generateRandomIntegerInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let correctAnswerNumber = generateRandomIntegerInRange(1, 4);
console.log(correctAnswerNumber);

// change text of correct option

function changeCorrectOptionText(correctAnswerNumber) {
    // let correctOption = document.getElementById(correctAnswerNumber);
    // correctOption.innerHTML = currentCountryName;
    document.getElementById(correctAnswerNumber).innerHTML = currentCountryName;
}

changeCorrectOptionText(correctAnswerNumber);

// TODO - add if statement to check whether answer is correct or not

// program starts, question is asked

function question() {

    // change heading
    document.getElementById('headingText').innerHTML = "WHAT'S THE COUNTRY?";

    // remove description
    document.getElementById('description').style.display = 'none';

    // display flag
    document.querySelector('.flag').style.display = 'flex';
    let comp1 = 'https://flagcdn.com/';
    let flagURL = comp1.concat(getNewCountryCode(),'.svg');
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
    currentCountryName = getNewCountryName();

    // remove country description
    document.querySelector('.countryDescription').style.display = 'none';

    // remove next flag button
    document.querySelector('.next').style.display = 'none';

    question();
}