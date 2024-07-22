const boxes = document.querySelectorAll(".cell"),
  resetBtn = document.querySelector(".reset"),
  gameBox = document.querySelector(".game-box"),
  result = document.querySelector(".result");
let turn0 = true;
let count = 0;
const winPatterns = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 4, 8],
  [2, 4, 6],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
];
boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turn0) {
      box.innerText = "O";
      turn0 = false;
    } else {
      box.innerText = "X";
      turn0 = true;
    }
    count++;
    box.disabled = true;
    checkWinner();
  });
});
const disableboxes = () => {
  for (let box of boxes) {
    box.disabled = true;
  }
};
const showWinner = (winner) => {
  result.innerText = `🚀🚀Congratulations, winner is ${winner}`;
  result.style.display = "block";
  result.style.padding = "20px";
  resetBtn.innerText = "New Game";
  gameBox.classList.add("hide");
  disableboxes();
};
const checkWinner = () => {
  for (let pattern of winPatterns) {
    let pos1 = boxes[pattern[0]].innerText;
    let pos2 = boxes[pattern[1]].innerText;
    let pos3 = boxes[pattern[2]].innerText;
    if (pos1 !== "" && pos1 === pos2 && pos2 === pos3) {
      console.log("congarats " + pos1);
      showWinner(pos1);
      return;
    }
  }
  if (count === 9) {
    result.innerText = `Game has been drawn`;
    result.style.display = "block";
    resetBtn.innerText = "New Game";
    disableboxes();
    gameBox.classList.add("hide");
  }
};
const enableboxes = () => {
  for (let box of boxes) {
    box.disabled = false;
  }
};
const resetGame = () => {
  turn0 = true;
  for (let box of boxes) {
    box.innerText = "";
  }
  result.style.display = "none";
  count = 0;
  resetBtn.innerText = "Reset";
  gameBox.classList.remove("hide");
  enableboxes();
};

resetBtn.addEventListener("click", resetGame);
