const PLR_1_SYB = '⭕️';
const PLR_2_SYB = '❌';

const WINNING_COMBOS = [
  [1, 2, 3], [4, 5, 6], [7, 8, 9],
  [1, 4, 7], [2, 5, 8], [3, 6, 9],
  [1, 5, 9], [3, 5, 7]            
];

function initBoard() {
  return [
    ['  ', '  ', '  '],
    ['  ', '  ', '  '],
    ['  ', '  ', '  '],
  ];
}

function displayFormattedBoard(board) {
  for (let row = 0; row < board.length; row++) {
    console.log(board[row].join(" | "));
    if (row < board.length - 1) {
      console.log("---+----+---");
    }
  }
}

function getRowIndex(position) {
  return Math.floor((position - 1) / 3);
}

function getColumnIndex(position) {
  return (position - 1) % 3;
}

function isValidPosition(position) {
  return typeof position === 'number'
      && !isNaN(position)
      && position >= 1
      && position <= 9;
}

function isCellOccupied(board, position) {
  const row = getRowIndex(position);
  const col = getColumnIndex(position);
  return board[row][col] !== '  ';
}

function updateBoard(board, position, playerSymbol) {
  const row = getRowIndex(position);
  const col = getColumnIndex(position);
  board[row][col] = playerSymbol;
}

function isComboComplete(winningCombo, playerMoves) {
  let matchedPositions = 0;

  for (let positionIndex = 0; positionIndex < winningCombo.length; positionIndex++) {
    const position = winningCombo[positionIndex];
    if (playerMoves.includes(position)) {
      matchedPositions++;
    }
  }

  return matchedPositions === 3;
}

function checkWinner(playerMoves) {
  for (let comboIndex = 0; comboIndex < WINNING_COMBOS.length; comboIndex++) {
    const winningCombo = WINNING_COMBOS[comboIndex];
    if (isComboComplete(winningCombo, playerMoves)) {
      return true;
    }
  }
  return false;
}

function getCurrentPlayer(moveCount, player1, player2) {
  const isOddTurn = moveCount % 2 === 1;
  const currentPlayer = isOddTurn ? player1 : player2;
  const moveSymbol = isOddTurn ? PLR_1_SYB : PLR_2_SYB;
  return [currentPlayer, moveSymbol];
}

function getPlayerMove(currentPlayer) {
  const input = prompt(`${currentPlayer}, enter your move (1-9):`);
  return parseInt(input, 10);
}

function handleMove(board, position, playerSymbol, playerMoves) {
  if (!isValidPosition(position)) {
    console.log('❌ Invalid input. Enter a number between 1 and 9.');
    return false;
  }
  if (isCellOccupied(board, position)) {
    console.log('⚠️ Cell already occupied. Choose another.');
    return false;
  }
  updateBoard(board, position, playerSymbol);
  playerMoves.push(position);
  return true;
}

function isGameOver(playerMoves) {
  return checkWinner(playerMoves);
}

function handleDraw(board) {
  displayFormattedBoard(board);
  console.log("🤝 It's a draw!");
}

function playGame(board, player1, player2) {
  const p1Moves = [];
  const p2Moves = [];
  let movesCount = 1;
  const maxMoves = 9;

  while (movesCount <= maxMoves) {
    displayFormattedBoard(board);
    const playerInfo = getCurrentPlayer(movesCount, player1, player2);
    const currentPlayer = playerInfo[0];
    const moveSymbol = playerInfo[1];
    const position = getPlayerMove(currentPlayer);
    const currentMoves = movesCount % 2 === 1 ? p1Moves : p2Moves;

    if (!handleMove(board, position, moveSymbol, currentMoves)) {
      continue;
    }

    if (isGameOver(currentMoves)) {
      displayFormattedBoard(board);
      console.log(`🎉 ${currentPlayer} wins!`);
      return;
    }

    movesCount++;
  }

  handleDraw(board);
}

function displayPlayersInfo(player1, player2) {
  console.log(`${player1.padEnd(10)}: ${PLR_1_SYB}`);
  console.log(`${player2.padEnd(10)}: ${PLR_2_SYB}`);
}

function initGame() {
  const player1 = prompt("Enter player 1 name:");
  const player2 = prompt("Enter player 2 name:");
  displayPlayersInfo(player1, player2);

  const board = initBoard();
  playGame(board, player1, player2);
}

initGame();