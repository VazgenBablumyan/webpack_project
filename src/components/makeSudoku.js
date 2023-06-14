function sudokuBoard() {
  const board = [];
  for (let i = 0; i < 9; i++) {
    board[i] = [];
    for (let j = 0; j < 9; j++) {
      board[i][j] = 0;
    }
  }
  generateHelper(board, 0, 0);

  return board;
}
  
function generateHelper(board, row, col) {
  if (col === 9) {
    row++;
    col = 0;
    if (row === 9) {
      
      return true;
    }

  }

  const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  shuffleArray(nums);
  for (let i = 0; i < 9; i++) {
    const value = nums[i];
    if (isValid(board, row, col, value)) {
      board[row][col] = value;
      if (generateHelper(board, row, col + 1)) {
        return true;
      }
      board[row][col] = 0;
    }
  }
  
  return false;
}
function isValid(board, row, col, value) {
  for (let i = 0; i < 9; i++) {
    if (board[row][i] === value) {
      return false;
    }
  }
  for (let i = 0; i < 9; i++) {
    if (board[i][col] === value) {
      return false;
    }
  }
  const boxRow = Math.floor(row / 3) * 3;
  const boxCol = Math.floor(col / 3) * 3;
  for (let i = boxRow; i < boxRow + 3; i++) {
    for (let j = boxCol; j < boxCol + 3; j++) {
      if (board[i][j] === value) {

        return false;
      }
    }
  }

  return true;
}
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];

  }
  
}

const board =  sudokuBoard();
 export let hiddenNumbers =[[],[],[],[],[],[],[],[],[]]
 export let counterForGameEnd=0

 export let playMode = function(emptynums, gameIsLoaded) {

  if(!gameIsLoaded){
  const countOfEmptyItems = Math.ceil(Math.random() * 10 + emptynums);
  let counter = 0;

  firstLoop: for (let i = 0; counter < countOfEmptyItems; i++) {
    if (i === 9) {  
      i = 0;
    }
    if(i === 0){
    }

    let row = board[i];
      for (let idx = 0; counter < countOfEmptyItems; idx++) {
      if (Math.random() > 0.85 && Math.random() < 0.88 && row[idx] !== 0) {
        hiddenNumbers[i][idx] = row[idx]
        row[idx] = 0;
        counter++;
        counterForGameEnd = counter
      }
      if (idx === 8) {
        continue firstLoop;
      }
    }
  }
    
  } 
   console.log(hiddenNumbers)
  return board;
}