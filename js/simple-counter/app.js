const number = document.querySelector('h1');
const plusButton = document.querySelector('.puls');
const resetButton = document.querySelector('.reset');


let count = 0;

function updateNumber() {
  number.innerText = count;
}
function increment() {
  count++;
  updateNumber();
}

function reset(){
  count = 0;
  updateNumber();
}

plusButton.addEventListener('click', increment);
resetButton.addEventListener('click', reset);


