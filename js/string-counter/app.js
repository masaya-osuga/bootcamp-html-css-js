const input = document.querySelector("#input");
const number = document.querySelector("#counter");
const resetButton = document.querySelector("#reset");

let count = 0;

function updateCounter () {
    number.innerText = count;
}

function wordCounter(){
    const text = input.value;
    count = text.length;
    updateCounter();
}

function reset(){
    count = 0;
    input.value = '';
    updateCounter();
}


input.addEventListener('input', wordCounter);
resetButton.addEventListener('click', reset);