/*!
* Start Bootstrap - Personal v1.0.1 (https://startbootstrap.com/template-overviews/personal)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-personal/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project

let countdown = 10 * 60; // 10 minutes in seconds
const timerElement = document.getElementById('timer');

function updateTimerDisplay() {
    const minutes = Math.floor(countdown / 60);
    const seconds = countdown % 60;
    timerElement.textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
}

setInterval(() => {
    if (countdown > 0) {
        countdown--;
        updateTimerDisplay();
    }
}, 1000);
function showText(index) {
    const cards = document.querySelectorAll('.card');
    const textElement = cards[index].querySelector('.card-text');
    textElement.style.display = 'block';
}

function toggleText(index) {
    const cards = document.querySelectorAll('.card');
    const textElement = cards[index].querySelector('.card-text');

    if (textElement.style.display === 'block') {
        textElement.style.display = 'none';
    } else {
        textElement.style.display = 'block';
    }
}
