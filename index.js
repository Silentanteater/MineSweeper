let buttonArray = []
const board = document.querySelector('.gameBoard')
for (let i=0; i<64; i++) {
buttonArray[i] = document.createElement('button');
buttonArray[i].classList.add('boardButton');
buttonArray[i].setAttribute('id', i);
board.appendChild(buttonArray[i])
}
