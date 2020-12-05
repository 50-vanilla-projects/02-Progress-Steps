const numbers = document.querySelectorAll('.number');
const lines = document.querySelectorAll('.lines');
const buttonsContainer = document.querySelector('.buttons');
const nextButton = document.querySelector('#next');
const previousButton = document.querySelector('#previous');

var count = 0;

buttonsContainer.addEventListener('click', e => {




function toggleNextButton() {
  if (nextButton.classList.contains('disabled')) {
    nextButton.classList.remove('disabled');
  }
  else {
    nextButton.classList.add('disabled');
  }
}

function togglePreviousButton() {
  if (previousButton.classList.contains('disabled')) {
    previousButton.classList.remove('disabled');
  }
  else {
    previousButton.classList.add('disabled');
  }
}