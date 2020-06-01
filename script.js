const turnCounter = (() => {
  let count = 1;
  let marker = '';
  const turn = () => {
    count++;
    if(count % 2 === 0 || count == 0){
      return marker = 'x';
    } else {
      return marker = 'o';
    }
  }
  return {turn, count};
})();

const game = (() => {  
  let cellArray = document.getElementsByClassName('cell');
  for (let i = 0; i < cellArray.length; i++) {

    cellArray[i].addEventListener('click', (e) => {
      
      if(e.target.innerText === '' || e.target.innerText === 'null') {
        e.target.innerText = turnCounter.turn();
     }
    })
  }
  return {cellArray}
})();

function assignArrayValue() {

  let boardLocation = {
    leftBot: [0,0],
    leftMid: [0,1],
    leftTop: [0,2],
    midBot: [1,0],
    middMid: [1,1],
    topMid: [2,1],
    rightBot: [2,0],
    rightMid: [2,1],
    rightTop: [2,2]
  }

  for(let location in boardLocation) {
    if(document.getElementById(location) === target.id) {
      
    }
  }

}