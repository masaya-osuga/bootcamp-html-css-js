const secondButton = document.querySelector("#second");
const number = document.querySelector("h1");
const resetButton = document.querySelector("#reset");

let count = 0;

const updateCount = () => {
    count++;
    number.innerText = count;
};

const resetCount = () => {
    count = 0;
    number.innerText = count;
};

secondButton.addEventListener('click', () => {
    setTimeout(updateCount, 1000);
});

resetButton.addEventListener('click', resetCount);