/**
 * Принимает игровое поле в формате строки — как в файле sudoku-puzzles.txt.
 * Возвращает игровое поле после попытки его решить.
 * Договорись со своей командой, в каком формате возвращать этот результат.
 */

const deck = '1-58-2----9--764-52--4--819-19--73-6762-83-9-----61-5---76---3-43--2-5-16--3-89--'

function solve(boardString) {
  const arr = [];
  const newArr = []
  const threeArr = []
  for (let i = 0; i < boardString.length; i += 9) {
    arr.push(boardString.slice(i, i + 9));
  }
  for (let column = 0; column < 9; column += 1) {
    for (let row = 0; row < 9; row += 1) {
      if (arr[column][row] === '-') {
        newArr.push(String(Math.floor(Math.random() * 9)))
      }
      else if(arr[column][row]){
        newArr.push(arr[column][row])
      }
    }
  }
  return newArr(//)
}
console.log(solve(deck))
// const podbor = [1, 2, 3, 4, 5, 6, 7, 8, 9]

// function poisk(arrLast) {
//   let test = []
//   for (let i = 0; i < arrLast.length; i++) {
//     for (let j = 0; j < podbor.length; j++) {
//       if (arrLast[i] === String(podbor[j])) {
//         test.push(podbor[j])
//       }
//     }
//   }
//   return test
// }




// console.log(poisk('1-58-2---'))
// const podbor = [1,2,3,4,5,6,7,8,9]

// function poisk(arrLast){
//   const testArr = []
//   arrLast.map((slovo)=> {
//     if(slovo.includes('-')){
//      testArr.push("123")
//     }})
// return testArr
// }
// console.log(poisk(['1-58-2---']))

/**
 * Принимает игровое поле в том формате, в котором его вернули из функции solve.
 * Возвращает булевое значение — решено это игровое поле или нет.
 */
// function isSolved(board) {}

/**
 * Принимает игровое поле в том формате, в котором его вернули из функции solve.
 * Возвращает строку с игровым полем для последующего вывода в консоль.
 * Подумай, как симпатичнее сформировать эту строку.
 */
// function prettyBoard(board) {}

// Экспортировать функции для использования в другом файле (например, readAndSolve.js).
// module.exports = {
//   solve,
//   isSolved,
//   prettyBoard,
// };


// const deck = '1-58-2----9--764-52--4--819-19--73-6762-83-9-----61-5---76---3-43--2-5-16--3-89--'

// function solve(boardString) {
//   const arr = [];
//   const newArr = []
//   const finish = []
//   for (let i = 0; i < boardString.length; i += 9) {
//     arr.push(boardString.slice(i, i + 9));
//   }
//   for (let column = 0; column < 9; column += 1) {
//     for (let row = 0; row < 9; row += 1) {
//       if (arr[column][row] === '-') {
//      newArr.push((Math.floor(Math.random() * 9)))
//       }
//       else{
//         newArr.push(arr[column][row])
//       }
//     }
//   }
//   for (let i = 0; i < newArr.length; i += 9) {
//     finish.push(newArr.slice(i, i + 9));
//   }
//   return finish
// }
// console.log(solve(deck));