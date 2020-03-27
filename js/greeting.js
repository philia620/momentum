const form = document.querySelector(".js-form");
const input = form.querySelector("input");
const greeting = document.querySelector(".js-greetings");

const USER_LS = "currentUser";
const SHOWING_CN = "showing";

function getHour() {
    const date = new Date();
    return date.getHours();
}

function saveName(text) {
    localStorage.setItem(USER_LS, text);
}

function handleSubmit(event) {
    event.preventDefault();
    const currentValue = input.value;
    paintGreeting(currentValue);
    saveName(currentValue);
}

function askForName() {
    form.classList.add(SHOWING_CN);
    form.addEventListener("submit", handleSubmit);
}

function paintGreeting(text) {
    form.classList.remove(SHOWING_CN);
    greeting.classList.add(SHOWING_CN);
    const hour = getHour();
    if (hour > 6 && hour < 11) {
        greeting.innerText = `Good Morning, ${text}`;
    } else if (hour >= 12 && hour <= 22) {
        greeting.innerText = `Good Afternoon, ${text}`;
    } else {
        greeting.innerText = `Good Night, ${text}`;
    }
}

function loadName() {
    const currentUser = localStorage.getItem(USER_LS);
    if (currentUser == null) {
        askForName();
    } else {
        paintGreeting(currentUser);
    }
}

function init() {
    loadName();
}

init();