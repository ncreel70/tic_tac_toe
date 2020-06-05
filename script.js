const turn = (() => {
  let count = 1  ;
  console.log(count)

  const updateTurn = () => count++;

  const marker = () => {
    
    if(count % 2 === 0 || count == 0){
      return 'x';
    } else {
      return 'o';
    }
  }
    
  return {marker, updateTurn};
})();

const boardDraw = (() => {  
  let cellArray = document.getElementsByClassName('cell');

  for (let i = 0; i < cellArray.length; i++) {

    cellArray[i].addEventListener('click', (e) => {
      turn.updateTurn();
      if(e.target.innerText === '' || e.target.innerText === 'null') {
        e.target.innerText = turn.marker();
        boardState.placeMarker(e.target.id);
        console.log(boardState.baseBoard)
        boardState.winCon();
     }
    })
  }
})();


const boardState = (() => {

  const baseBoard = {
    topLeft: 1,
    topMid: 2,
    topRight: 3,
    midLeft: 4,
    midMid: 5,
    midRight: 6,
    botLeft: 7,
    botMid: 8,
    botRight: 9
  };
  
  const placeMarker = (boardCellId) => {
    if(turn.marker() === 'x') {
      baseBoard[boardCellId] = 'x'
    } else {
      baseBoard[boardCellId] = 'o'
    }
  }

  const winCon = () => {
    if(baseBoard['topLeft'] === baseBoard['topMid'] && baseBoard['topLeft'] === baseBoard['topRight'] ||
    baseBoard['botLeft'] === baseBoard['botMid'] && baseBoard['botLeft'] === baseBoard['botRight'] ||
    baseBoard['midLeft'] === baseBoard['midMid'] && baseBoard['midLeft'] === baseBoard['midRight'] ||
    baseBoard['topLeft'] === baseBoard['midMid'] && baseBoard['topLeft'] === baseBoard['botRight'] ||
    baseBoard['topRight'] === baseBoard['midMid'] && baseBoard['topRight'] === baseBoard['botLeft'] ||
    baseBoard['topRight'] === baseBoard['midRight'] && baseBoard['topRight'] === baseBoard['botRight'] ||
    baseBoard['topMid'] === baseBoard['midMid'] && baseBoard['topMid'] === baseBoard['botMid'] ||
    baseBoard['topLeft'] === baseBoard['midLeft'] && baseBoard['topLeft'] === baseBoard['botLeft']){
      alert(turn.marker().toUpperCase() + ' Wins!')
    }
  }
  return {placeMarker, winCon, baseBoard}
})();