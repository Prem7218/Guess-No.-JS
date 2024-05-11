let random = parseInt(Math.random() * 100 + 1);
const userInput = document.querySelector('#guessField');
const submit = document.querySelector('#subt');
const guessSlot = document.querySelector('.guesses');
const remaning = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');
let prevGuess = [];
let numGuess = 1;
let playGame = true;

if (playGame) {
  submit.addEventListener('click', function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    validGuess(guess);
  });
}

function validGuess(guess) {
  if (isNaN(guess)) {
    alert('Please Enter Valid Number');
  } else if (guess > 100) {
    alert('Please Enter Number Less Than 100.');
  } else if (guess < 1) {
    alert('Please Enter Number Bigger Than 1.');
  } else {
    prevGuess.push(guess);
    if (numGuess === 11) {
      displayGuess(guess);
      displayMessage(`Game Over. Random No. Was ${random}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  if (guess === random) {
    displayMessage(`Your Guess Is Correct`);
  } else if (guess < random) {
    displayMessage(`Your Guess Is Too Low`);
  } else if (guess > random) {
    displayMessage(`Your Guess Is Too High`);
  }
}

function displayGuess(guess) {
  userInput.value = '';
  guessSlot.innerHTML += `${guess} `;
  numGuess++;
  if(numGuess <= 11)
  {
    remaning.innerHTML = `${11 - numGuess} `;
  }
  else {
    endGame()
  }
}

function displayMessage(message) {
  lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function gameStart() {
  const gamestart = document.querySelector('#newGame');
  gamestart.addEventListener('click', (e) => {

    random = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    numGuess = 1;
    guessSlot.innerHTML = '';
    remaning.innerHTML = `${11 - numGuess} `;
    userInput.removeAttribute('disabled');
    startOver.removeChild(p);
    playGame = true;
  });
}

function endGame() {
  userInput.value = ' ';
  userInput.setAttribute('disabled', '');
  p.classList.add('button');
  p.innerHTML = `<h2 id="newGame">Start New Game</h2>`;
  startOver.appendChild(p);
  playGame = false;
  gameStart();
}
