// program starts, question is asked

function question() {

    // change heading
    document.getElementById('headingText').innerHTML = "WHAT'S THE COUNTRY?";

    // remove description
    document.getElementById('description').style.display = 'none';

    // display flag
    document.querySelector('.flag').style.display = 'flex';
    document.querySelector('.flag').style.backgroundImage = 'url("https://flagcdn.com/za.svg")';
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

    // remove options
    document.querySelector('.options').style.display = 'none';

    // show next flag button
    document.querySelector('.next').style.display = 'block';
}

// "Next Flag" button is clicked

function next() {

    // remove country description
    document.querySelector('.countryDescription').style.display = 'none';

    // remove next flag button
    document.querySelector('.next').style.display = 'none';

    question();
}