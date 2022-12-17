/**
 * Принимает игровое поле в формате строки — как в файле sudoku-puzzles.txt.
 * Возвращает игровое поле после попытки его решить.
 * Договорись со своей командой, в каком формате возвращать этот результат.
 */
function solve(boardString) {
  const arrInside = [];
  for (let i = 0; i < boardString.length; i += 9) {
    arrInside.push(boardString.slice(i, i + 9));
  }

  const start = [];
  for (let row = 0; row < 9; row += 1) {
    for (let column = 0; column < 9; column += 1) {
      if (arrInside[row][column] === "-") start.push([row, column]);
    }
  }

  if (start === []) return arrInside;
  const row = start[0][0];
  const column = start[0][1];
  for (let num = 1; num <= 9; num += 1) {
    for (let i = 0; i < 9; i += 1) {
      if (
        num !== arrInside[row][i] &&
        arrInside[row][i] !== "-" &&
        num !== arrInside[i][column] &&
        arrInside[i][column] !== "-"
      ) {
        arrInside[row][column] = String(num);
      }
    }
  }
  const x = arrInside;
  return x;
}
console.log(
  solve(
    "1-58-2----9--764-52--4--819-19--73-6762-83-9-----61-5---76---3-43--2-5-16--3-89--"
  )
);
/**
 * Принимает игровое поле в том формате, в котором его вернули из функции solve.
 * Возвращает булевое значение — решено это игровое поле или нет.
 */
function isSolved(board) {}

/**
 * Принимает игровое поле в том формате, в котором его вернули из функции solve.
 * Возвращает строку с игровым полем для последующего вывода в консоль.
 * Подумай, как симпатичнее сформировать эту строку.
 */
function prettyBoard(board) {}

// Экспортировать функции для использования в другом файле (например, readAndSolve.js).
module.exports = {
  solve,
  isSolved,
  prettyBoard,
};
