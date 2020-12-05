const numbers = document.querySelectorAll('.number');
const lines = document.querySelectorAll('.top');
const buttonsContainer = document.querySelector('.buttons');
const nextButton = document.querySelector('#next');
const previousButton = document.querySelector('#previous');

var count = 1; // equals number of numbers active

buttonsContainer.addEventListener('click', e => {

  /* next button clicked */
  if (e.target.id == 'next') {
    console.log('next button clicked');
    console.log('current count: ' + count);

    if (count > 1 && count < 3) {
      console.log('this number active, draw line, increase count');
      numbers[count].classList.add('active');
      lines[count-1].classList.add('active');
      ++count;
    }
    else if (count == 1) {
      console.log('previous button toggled, this number active, draw line, increase count');
      togglePreviousButton();
      numbers[count].classList.add('active');
      lines[count-1].classList.add('active');
      ++count;
    }
    else if (count == 3) {
      console.log('this number active, draw line, increase count');
      numbers[count].classList.add('active');
      lines[count-1].classList.add('active');
      ++count;

      console.log('next button toggled')
      toggleNextButton();

    } else if (count == 4) {
      console.log('action disabled')
    }
    console.log('current count: ' + count)
  }

  /* previous button clicked */
  else {
    console.log('previous button clicked');
    console.log('current count: ' + count);
    if (count > 2 && count < 4) {
      console.log('decrease count, this number inactive');
      --count;
      numbers[count].classList.remove('active');
      lines[count-1].classList.remove('active');
    }
    else if (count == 2) {
      console.log('decrease count, this number inactive, line cleared, previous button toggled');
      --count;
      numbers[count].classList.remove('active');
      lines[count-1].classList.remove('active');
      togglePreviousButton();
    }
    else if (count == 1) {
      console.log('action disabled');
    }
    else if (count == 4) {
      console.log('next button toggled, decrease count, this number inactive')
      toggleNextButton();
      --count;
      numbers[count].classList.remove('active');
      lines[count-1].classList.remove('active');

    }
  }
})

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