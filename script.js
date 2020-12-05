const numbers = document.querySelectorAll('.number');
const lines = document.querySelectorAll('.lines');
const buttonsContainer = document.querySelector('.buttons');
const nextButton = document.querySelector('#next');
const previousButton = document.querySelector('#previous');

var count = 0;

buttonsContainer.addEventListener('click', e => {

  /* next button clicked */
  if (e.target.id == 'next') {
    console.log('next button clicked');
    console.log('current count: ' + count);

    if (count > 0 && count < 3) {
      console.log('this number active, increase count');
      numbers[count].classList.add('active');
      ++count;
    }
    else if (count == 0) {
      console.log('previous button toggled, this number active, increase count');
      togglePreviousButton();
      numbers[count].classList.add('active');
      ++count;
    }
    else if (count == 3) {
      console.log('this number active, increase count');
      numbers[count].classList.add('active');
      ++count;

      console.log('next button toggled')
      toggleNextButton();

    } else if (count == 4) {
      console.log('action disabled')
    }
    console.log('current count: ' + count)
  }

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