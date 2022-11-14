let grid = [
  ["P", "S", "U", "W", "H", "A", "T", "S"],
  ["L", "P", "A", "C", "K", "A", "G", "E"],
  ["N", "Y", "O", "L", "R", "D", "V", "L"],
  ["F", "I", "N", "G", "E", "Z", "B", "M"],
  ["I", "R", "E", "H", "Q", "N", "J", "O"],
  ["A", "T", "B", "V", "G", "Y", "E", "S"],
  ["J", "D", "U", "W", "U", "E", "S", "T"],
  ["P", "S", "T", "I", "C", "K", "E", "Y"],
];

//User region for entering the words to search
console.log("------Cross word puzzle------");
let prompt = require("prompt-sync")();
let word = prompt("Enter words with space:");
word = word.split(" ");
for (let i = 0; i < word.length; i++) {
  word[i] = word[i].toUpperCase();
}
for (let i = 0; i < word.length; i++) {
  //Output display region
  if (crossWord(grid, word[i])) {
    console.log(`---> ${word[i]} is in the grid`);
  } else {
    console.log(`---> ${word[i]} is not in the grid`);
  }
}

//Function to check into the grid
function crossWord(grid, word) {
  for (let row = 0; row < 8; row++) {
    for (let col = 0; col < 8; col++) {
      if (grid[row][col] == word[0]) {
        //checks the first letter
        if (firstFound(grid, word, row, col)) {
          return true;
        }
      }
    }
  }
}

//function to check the all the four direction up and down
function firstFound(grid, word, row, col) {
  for (let direction = 0; direction < 8; direction++) {
    if (wordCheck(grid, row, col, word, direction)) {
      //first direction=0,then it increarse upto 3
      return true;
    }
  }
  return false;
}

function wordCheck(grid, row, col, word, direction) {
  let x = 0;
  let count = 0;
  let length = word.length;
  switch (true) {
    case direction == 0:
      for (
        let a = row, b = col;
        b < 8 && x < length;
        b++ //check the col forward
      ) {
        if (word[x++] != grid[a][b]) return false;
        else count++;
      }
      if (count == length) return true;
      else return false;

    case direction == 1:
      for (
        let a = row, b = col;
        b >= 0 && x < length;
        b-- //check the col backward
      ) {
        if (word[x++] != grid[a][b]) return false;
        else count++;
      }
      if (count == length) return true;
      else return false;

    case direction == 2:
      for (
        let a = row, b = col;
        a < 8 && x < length;
        a++ //check the row forward
      ) {
        if (word[x++] != grid[a][b]) return false;
        else count++;
      }
      if (count == length) return true;
      else return false;
    case direction == 3:
      for (
        let a = row, b = col;
        a >= 0 && x < length;
        a-- //check the row backward
      ) {
        if (word[x++] != grid[a][b]) return false;
        else count++;
      }
      if (count == length) return true;
      else return false;
    case direction == 4:
      for (
        let a = row, b = col;
        a < 8 && b < 8 && x < length;
        a++, b++ //check the col forward
      ) {
        if (word[x++] != grid[a][b]) return false;
        else count++;
      }
      if (count == length) return true;
      else return false;

    case direction == 5:
      for (
        let a = row, b = col;
        a >= 0 && b >= 0 && x < length;
        a--, b-- //check the col backward
      ) {
        if (word[x++] != grid[a][b]) return false;
        else count++;
      }
      if (count == length) return true;
      else return false;

    case direction == 6:
      for (
        let a = row, b = col;
        a < 8 && b >= 0 && x < length;
        a++, b-- //check the row forward
      ) {
        if (word[x++] != grid[a][b]) return false;
        else count++;
      }
      if (count == length) return true;
      else return false;
    case direction == 7:
      for (
        let a = row, b = col;
        a >= 0 && b < 8 && x < length;
        a--, b++ //check the row backward
      ) {
        if (word[x++] != grid[a][b]) return false;
        else count++;
      }
      if (count == length) return true;
      else return false;
  }
}
