let clickCount = 0;

const buttonElement = document.getElementById('btn');
const displayElement = document.getElementById('counterDisplay');

buttonElement && buttonElement.addEventListener('click', () => {
    clickCount++;
    if (displayElement) {
        displayElement.textContent = String(clickCount);
    } 
});