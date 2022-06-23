const squares = document.querySelectorAll(".square");
const mole = document.querySelectorAll(".mole");
const score = document.getElementById("score");
const timeLeft = document.getElementById("time-left");
// // console.log(squares,mole,score,timeLeft);

let result = 0;
let hitPosition;
let currentTime = 60;
let timerId = null;
let timerIdCount;

function randomSquare() {
  squares.forEach((square) => {
    square.classList.remove("mole");
  });
  let randomPosition = squares[Math.floor(Math.random() * 9)];
  randomPosition.classList.add("mole");
  hitPosition = randomPosition.id;
}

squares.forEach((square) => {
  square.addEventListener("click", () => {
    if (square.id === hitPosition) {
      result++;
      score.textContent = result;
      hitPosition = null;
    }
  });
});

function moveMole() {
  timerId = setInterval(randomSquare, 1000);
}
function countDown() {
  currentTime--;
  timeLeft.textContent = currentTime;
  if (currentTime === 0) {
    clearInterval(timerIdCount);
    clearInterval(timerId);
    alert("Game over! Your score is " + result);
    score.textContent = 0;
    document.location.reload(true);
  }
}

const start = document.getElementById("start");
start.addEventListener("click", () => {
  moveMole();
  timerIdCount = setInterval(countDown, 1000);
});
