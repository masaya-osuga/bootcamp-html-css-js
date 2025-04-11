const secondButton = document.querySelector("#second");
const number = document.querySelector("h1");
const resetButton = document.querySelector("#reset");

let count = 0;

function updateCount(){
    count++;
    number.innerText = count;
}

function incrementCount(){
    setTimeout(updateCount, 1000);
}

function resetCount(){
    count = 0;
    number.innerText = count;
}

secondButton.addEventListener('click', incrementCount);
resetButton.addEventListener('click', resetCount);