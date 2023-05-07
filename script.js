const startBtn = document.querySelector(".start-btn");
const startScreen = document.querySelector(".start-screen");
const rangeText = document.querySelector(".game-screen p");
const guessBtn = document.querySelector(".guess-btn");
const guessInput = document.querySelector(".guess-input");
const gameScreen = document.querySelector(".game-screen");
const triesCount = document.querySelector(".tries-count");
const subHeading = document.querySelector(".game-screen p");
const heading = document.querySelector(".game-screen h1");
const endScreen = document.querySelector(".end-screen");
const correctNumber = document.querySelector(".end-screen .correct-number");
const triesText = document.querySelector(".end-screen .tries-text");
const playAgainBtn = document.querySelector(".play-again-btn");

let maxValue;
let randomNumber;
let tries;

const init = () => {
  tries = 0;
  guessInput.value = "1";
  triesCount.innerHTML = "0 Tries";
  heading.innerHTML = "Guess My Number";
  startScreen.classList.add("active");
  gameScreen.style.background = "var(--green-color)";
};

init();

// Start Game

const startGame = () => {
  let difficulty = document.querySelector(
    "input[name='difficulty']:checked"
  ).id;
  startScreen.classList.remove("active");

  if (difficulty == "easy") {
    maxValue = 30;
  }

  if (difficulty == "difficult") {
    maxValue = 100;
  }

  rangeText.innerHTML = `between 1 and ${maxValue}`;
  randomNumber = Math.floor(Math.random() * maxValue + 1);

  console.log("Random Number: ", randomNumber);
};

// End Screen

const endGame = () => {
  endScreen.classList.add("active");
  correctNumber.innerHTML = randomNumber;

  if (tries == 1) {
    triesText.innerHTML = `${tries} try`;
  } else {
    triesText.innerHTML = `${tries} tries`;
  }
};

// Check Number

const checkNumber = () => {
  let userNumber = parseInt(guessInput.value);
  tries++;

  if (userNumber == randomNumber) {
    endGame();
  } else {
    gameScreen.style.background = "var(--red-color)";
    triesCount.innerHTML = `${tries} Tries`;
    heading.innerHTML = "Try Again!";
    if (randomNumber < userNumber) {
      subHeading.innerHTML = `The number is smaller than ${userNumber}`;
    } else {
      subHeading.innerHTML = `The number is larger than ${userNumber}`;
    }
  }
};

const playAgain = () => {
  init();
  endScreen.classList.remove("active");
};

startBtn.addEventListener("click", startGame);
guessBtn.addEventListener("click", checkNumber);
playAgainBtn.addEventListener("click", playAgain);
