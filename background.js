const body = document.querySelector("body");

const IMG_COUNT = 4;


function paintImage(imgNumber) {
    const image = new Image();
    image.src = `images/${imgNumber + 1}.jpg`;
    image.classList.add("bgImage");
    body.appendChild(image);
}

function getRandomNumber() {
    const number = Math.floor(Math.random() * IMG_COUNT);
    return number;
}

function init() {
    const randomNumber = getRandomNumber();
    paintImage(randomNumber);
}

init();