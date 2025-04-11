const number = document.querySelector('h1');
const plusButton = document.querySelector('.puls');
const resetButton = document.querySelector('.reset');


let count = 0;

const updateNumber = () => {
  number.innerText = count;
}

const increment = () => {
  count++;
  updateNumber();
}

const reset = () => {
  count = 0;
  updateNumber();
}

plusButton.addEventListener('click', increment);
resetButton.addEventListener('click', reset);


