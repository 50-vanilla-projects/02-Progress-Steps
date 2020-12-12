// selectors needed
const numbers = document.querySelectorAll('.number');
const lines = document.querySelectorAll('.top');
const buttonsContainer = document.querySelector('.buttons');
const nextButton = document.querySelector('#next');
const previousButton = document.querySelector('#previous');

var count = 0; // initial state

// functionality
buttonsContainer.addEventListener('click', e => {

  /* next button clicked */
  if (e.target.id == 'next') {
    if (count < 0) { count == 0 }
    if (count > 3) { count == 3 }
    if (count == 0) {
      numbers[count+1].classList.add('active');
      lines[count].classList.add('active');
      togglePreviousButton();
      count++;
    }
    else if (count == 1) {
      numbers[count+1].classList.add('active');
      lines[count].classList.add('active');
      count++;
    }
    else if (count == 2) {
      numbers[count+1].classList.add('active');
      lines[count].classList.add('active');
      toggleNextButton();
      count++
    }
  } // end next button clicked
    
  /* previous button clicked */
  else {
    if (count < 0) { count == 0 }
    if (count > 3) { count == 3 }
    if (count == 1) {
      numbers[count].classList.remove('active');
      lines[count-1].classList.remove('active');
      togglePreviousButton();
      --count;
    }
    else if (count == 2) {
      numbers[count].classList.remove('active');
      lines[count-1].classList.remove('active');
      --count;
    }
    else if (count == 3) {
      numbers[count].classList.remove('active');
      lines[count-1].classList.remove('active');
      toggleNextButton();
      --count;
    }
  } // end previous button clicked
}) // listen to button clicked


// toggle functions
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
    previousButton.classList.remove('disabled')
  }
  else {
    previousButton.classList.add('disabled');
  }
}