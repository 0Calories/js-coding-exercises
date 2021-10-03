const BOARD_SIZE = 3;
let currentPlayerSign = 1;
let moves = 0;

const currentPlayerText = document.createElement('h2');
currentPlayerText.textContent = `It is Player 1's turn`;
document.body.appendChild(currentPlayerText);

// Set up the board
const table = document.createElement('table');
table.id = 'table';
document.body.appendChild(table);

for (let i = 0; i < BOARD_SIZE; i++) {
  const row = document.createElement('tr');

  for (let j = 0; j < BOARD_SIZE; j++) {
    const cell = document.createElement('td');
    cell.id = `${i}-${j}`;
    cell.row = i;
    cell.col = j;
    cell.addEventListener('click', handleClickCell);
    row.appendChild(cell);
  }

  table.appendChild(row);
}

// Game logic
const rows = Array(BOARD_SIZE).fill(0);
const cols = Array(BOARD_SIZE).fill(0);
let diag = 0;
let reverseDiag = 0;

function handleClickCell(e) {
  const row = e.target.row;
  const col = e.target.col;

  console.log(currentPlayerSign);
  document.getElementById(`${row}-${col}`).textContent = `${currentPlayerSign === 1 ? 'X' : 'O'}`;

  moves += 1;
  rows[row] += 1 * currentPlayerSign;
  cols[col] += 1 * currentPlayerSign;

  if (row === col) {
    diag += 1 * currentPlayerSign;
  }
  if (row + col === BOARD_SIZE - 1) {
    reverseDiag += 1 * currentPlayerSign;
  }

  if (Math.abs(rows[row]) === BOARD_SIZE || Math.abs(cols[col]) === BOARD_SIZE || Math.abs(diag) === BOARD_SIZE || Math.abs(reverseDiag) === BOARD_SIZE) {
    if (currentPlayerSign === 1) {
      alert('Player 1 wins!');
    } else {
      alert('Player 2 wins!');
    }
    return;
  }

  if (moves === BOARD_SIZE * BOARD_SIZE) {
    alert('There was a tie!');
    return;
  }

  document.getElementById(`${row}-${col}`).removeEventListener('click', handleClickCell);
  currentPlayerSign = currentPlayerSign * -1;
  currentPlayerText.textContent = `It is Player ${currentPlayerSign == 1 ? '1' : '2'}'s turn`;
}

