const winner = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

const board_array = new Array(9).fill('E');

function checkWinner() {
  for (let [index0, index1, index2] of winner) {
    // console.log(i);
    if (
      board_array[index0] != 'E' &&
      board_array[index0] === board_array[index1] &&
      board_array[index1] === board_array[index2]
    )
      return 1;
  }
  return 0;
}

const penguin = document.querySelector('#penguin');
const eggplant = document.querySelector('#eggplant');
const container0 = document.querySelector('.container0');
const container2 = document.querySelector('.container2');

let turn = 'O';

penguin.classList.add('active');

let total_turns = 0;

const playTicTacToe = (e) => {
  // console.log(e.target.id);

  const element = e.target;
  if (board_array[element.id] === 'E') {
    total_turns++;
    if (turn === 'O') {
      element.innerHTML = 'O';
      board_array[element.id] = 'O';
      // console.log(checkWinner());
      if (checkWinner()) {
        document.querySelector('#winningMessage').innerHTML = 'Penguin Won';
        container0.classList.add('winner');
        boxContainer.removeEventListener('click', playTicTacToe);
      }
      turn = 'X';
      active_player();
    } else {
      element.innerHTML = 'X';
      board_array[element.id] = 'X';
      // console.log(checkWinner());
      if (checkWinner()) {
        document.querySelector('#winningMessage').innerHTML = 'Eggplant Won';
        container2.classList.add('winner');
        boxContainer.removeEventListener('click', playTicTacToe);
      }
      turn = 'O';
      active_player();
    }
    if (total_turns === 9 && !checkWinner()) {
      document.querySelector('#winningMessage').innerHTML = `It's a Tie`;
    }
  }
};

const boxContainer = document.querySelector('.box-container');
boxContainer.addEventListener('click', playTicTacToe);

// restart button functionality

const restartButton = document.querySelector('#restart-btn');

restartButton.addEventListener('click', () => {
  board_array.fill('E');
  const boxes = document.querySelectorAll('.box');
  for (let box of boxes) {
    box.innerHTML = '';
  }
  total_turns = 0;
  turn = 'O';
  boxContainer.addEventListener('click', playTicTacToe);
  document.querySelector('#winningMessage').innerHTML = '';
  container0.classList.remove('winner');
  container2.classList.remove('winner');
  active_player();
});

const active_player = () => {
  if (turn === 'O') {
    penguin.classList.add('active');
    eggplant.classList.remove('active');
  } else if (turn === 'X') {
    eggplant.classList.add('active');
    penguin.classList.remove('active');
  }
};
