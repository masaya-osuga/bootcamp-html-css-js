const input = document.querySelector("#input");
const number = document.querySelector("#counter");
const resetButton = document.querySelector("#reset");

let count = 0;

const updateCounter = () => {
    number.innerText = count;
}

const wordCounter = () => {
    const text = input.value;
    count = text.length;
    updateCounter();
}

const reset = () => {
    count = 0;
    input.value = '';
    updateCounter();
}



input.addEventListener('input', wordCounter);
resetButton.addEventListener('click', reset);