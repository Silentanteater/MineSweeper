function populateTheBoard() {
  let buttonArray = []
  let boardSize = 64;
  let boardSideLength = 8;
  const board = document.querySelector('.gameBoard')
  for (let i = 0; i < boardSize; i++) {
    buttonArray[i] = document.createElement('button');
    buttonArray[i].classList.add('boardButton');

    if (i + 1 <= boardSideLength) {
      buttonArray[i].classList.add('topEdge');
    }
    if (i + 1 >= boardSize - boardSideLength) {
      buttonArray[i].classList.add('bottomEdge');
    }
    if ((i + 1) % boardSideLength == 0) {
      buttonArray[i].classList.add('rightEdge');
    }
    if ((i + 1) % boardSideLength == 1) {
      buttonArray[i].classList.add('leftEdge');
    }

    buttonArray[i].setAttribute('id', i + 1);
    board.appendChild(buttonArray[i])
  }
}

function generateMines(numOfMines, sizeOfBoard) {
  let mineArray = [];
  let temp
  for (let i = 0; i < numOfMines; i++) {
    do {
      temp = Math.floor(Math.random() * 64) + 1;
    } while (mineArray.includes(temp))
    mineArray[i] = temp;
  }
  return mineArray
}

function addListeners() {
  let buttons = document.querySelectorAll("button");
  buttons.forEach(button => {
    button.addEventListener('mousedown', function(event) {
      if (event.which == 1) {
        Sweep(event.target)
      } else {
        event.preventDefault();
        Flag(event.target);
      }
    });
    button.addEventListener('contextmenu', (event) => {
      event.preventDefault();
    })
  })
}

function Sweep(target) {
  let classList = target.classList;
  if (target.classList.contains("flagged")) {
    target.classList.toggle("flagged");
    return;
  }
  if (mineArray.includes(Number(target.id))) {
    target.classList.add('exploded');
    gameOver();
    return;
  }
  let mineNeighbors = 0
  if (!classList.contains("topEdge")) {
    if (mineArray.includes(Number(target.id) - 8)) {
      mineNeighbors++;
    }
  }
  if (!classList.contains("leftEdge")) {
    if (mineArray.includes(Number(target.id) - 1)) {
      mineNeighbors++;
    }
  }
  if (!classList.contains("topEdge") && !classList.contains("leftEdge")) {
    if (!mineArray.includes(Number(target.id) - 9)) {
      mineNeighbors++;
    }
  }
  if (!classList.contains("bottomEdge")) {
    if (mineArray.includes(Number(target.id) + 8)) {
      mineNeighbors++;
    }
  }
  if (!classList.contains("rightEdge")) {
    if (mineArray.includes(Number(target.id) + 1)) {
      mineNeighbors++;
    }
  }
  if (!classList.contains("bottomEdge") && !classList.contains("rightEdge")) {
    if (!mineArray.includes(Number(target.id) + 9)) {
      mineNeighbors++;
    }
  }
  if (!classList.contains("bottomEdge") && !classList.contains("leftEdge")) {
    if (!mineArray.includes(Number(target.id) + 7)) {
      mineNeighbors++;
    }
  }
  if (!classList.contains("topEdge") && !classList.contains("rightEdge")) {
    if (!mineArray.includes(Number(target.id) - 7)) {
      mineNeighbors++;
    }
  }
  target.textContent = mineNeighbors
  target.disabled = true

}

function Flag(target) {
  target.classList.add('flagged');
}

function gameOver() {
  let buttons = document.querySelectorAll("button");
  buttons.forEach(button => {
    button.disabled = true
  })
}

populateTheBoard();
const mineArray = generateMines(10, 64);
addListeners();
