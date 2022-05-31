function populateTheBoard() {
  let buttonArray = []
  let boardSize = 64;
  let boardSideLength = 8;
  const board = document.querySelector('.gameBoard')
  for (let i = 0; i < boardSize; i++) {
    buttonArray[i] = document.createElement('button');
    buttonArray[i].classList.add('boardButton');
    
    if (i+1<=boardSideLength)
    {buttonArray[i].classList.add('topEdge');}
    if (i+1>=boardSize-boardSideLength)
    {buttonArray[i].classList.add('bottomEdge');}
    if ((i+1)%boardSideLength==0)
    {buttonArray[i].classList.add('rightEdge');}
    if ((i+1)%boardSideLength==1)
    {buttonArray[i].classList.add('leftEdge');}
    
    buttonArray[i].setAttribute('id', i + 1);
    board.appendChild(buttonArray[i])
  }
}
