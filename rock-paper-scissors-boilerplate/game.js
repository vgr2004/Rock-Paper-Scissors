let rockImgUser = document.getElementById('stone-1');
let paperImgUser = document.getElementById('paper-1');
let scissorsImgUser = document.getElementById('scissor-1');

let rockImgAI = document.getElementById('stone-2');
let paperImgAI = document.getElementById('paper-2');
let scissorsImgAI = document.getElementById('scissor-2');

let rockButton = document.getElementById('stone-btn');
let paperButton = document.getElementById('paper-btn');
let scissorsButton = document.getElementById('shears-btn');

let playerOneScore = document.getElementById('player-one-score');
let playerTwoScore = document.getElementById('player-two-score');
let resetButton = document.getElementById('play-again');
let userScore = 0;
let AIScore = 0;

function randomNumberGenerator() {
  result = Math.floor(Math.random() * 3) + 1;
  return result;
}

function autoPlay() {
  output = randomNumberGenerator();
  switch (output) {
    case 1:
      rockImgAI.style.display = 'block';
      paperImgAI.style.display = 'none';
      scissorsImgAI.style.display = 'none';
      break;
    case 2:
      rockImgAI.style.display = 'none';
      paperImgAI.style.display = 'block';
      scissorsImgAI.style.display = 'none';
      break;
    case 3:
      rockImgAI.style.display = 'none';
      paperImgAI.style.display = 'none';
      scissorsImgAI.style.display = 'block';
      break;
    default:
      break;
  }
  gameOver();
}

rockButton.onclick = () => {
  autoPlay();
  rockImgUser.style.display = 'block';
  scissorsImgUser.style.display = 'none';
  paperImgUser.style.display = 'none';

  if (output == 2) {
    AIScore += 1;
  } else if (output == 3) {
    userScore += 1;
  }

  playerOneScore.innerHTML = userScore;
  playerTwoScore.innerHTML = AIScore;
  gameOver();
};

scissorsButton.onclick = () => {
  autoPlay();
  scissorsImgUser.style.display = 'block';
  rockImgUser.style.display = 'none';
  paperImgUser.style.display = 'none';

  if (output == 1) {
    AIScore += 1;
  } else if (output == 2) {
    userScore += 1;
  }

  playerOneScore.innerHTML = userScore;
  playerTwoScore.innerHTML = AIScore;
  gameOver();
};

paperButton.onclick = () => {
  autoPlay();
  paperImgUser.style.display = 'block';
  scissorsImgUser.style.display = 'none';
  rockImgUser.style.display = 'none';

  if (output == 3) {
    AIScore += 1;
  } else if (output == 1) {
    userScore += 1;
  }

  playerOneScore.innerHTML = userScore;
  playerTwoScore.innerHTML = AIScore;
  gameOver();
};

function gameOver() {
  if (userScore === 10) {
    alert("You won the Game!");
    gameOverReload();
  } else if (AIScore === 10) {
    alert("You lost the Game!");
    gameOverReload();
  }
};

resetButton.onclick = () => {
  location.reload();
};

function gameOverReload() {
  setTimeout(() => {
    location.reload();
  }, 1500)
}
