const img = document.createElement('img');
const screenshots = document.getElementById('screenshots')
const imgButtonNext = document.getElementById('img-button-next')
const imgButtonPrevious = document.getElementById('img-button-previous')
imgButtonNext.addEventListener('click', slideNext);
imgButtonPrevious.addEventListener('click', slidePrevious);
let counter = 0;

function changeImage(counter, img) {
    img.src = `assets/images/screenshot-${counter}.jpg`;
    img.style.border = '3px solid #332524';
    img.style.borderRadius = '10px';
    screenshots.appendChild(img);
}

function slideNext() {
    if (counter > 3) {
        counter = 0;
    } else {
        counter++;
    }
    changeImage(counter, img);
}

function slidePrevious() {
    if (counter == 0) {
        counter = 4;
    } else {
        counter--;
    }
    changeImage(counter, img);
}

changeImage(counter, img);

