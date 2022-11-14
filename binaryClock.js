console.log("----Binary clock----");
let binaryWatch = [
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
];
let prompt = require("prompt-sync")();
let time = prompt("Enter time in format (HH:MM:SS) :").split(":");

let timer = [];
for (let i = 0; i < time.length; i++) {
  for (let j = 0; j < time[i].length; j++) {
    timer.push(dec2bin(time[i][j]));
  }
}

function dec2bin(dec) {
  return (dec >>> 0).toString(2).padStart(4, 0);
}

for (let i = 0; i < 6; i++) {
  for (let j = 0; j < 4; j++) {
    binaryWatch[j][i] = timer[i][j];
  }
}
console.log("----The Binary clock time is----\n");
for (let i = 0; i < 4; i++) {
  binaryWatch[i] = binaryWatch[i].join(" ");

  console.log("\t", binaryWatch[i]);
}
