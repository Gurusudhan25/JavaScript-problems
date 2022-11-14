console.log("-----Water ballon pop up-----");

function pop(arr) {
  if (arr.length == 1) {
    return [0];
  }
  let popLength = Math.floor(arr.length / 2);
  for (let i = 0; i < arr[popLength]; i++) {
    arr[i] = i;
  }
  let j = 0;
  for (let i = arr.length - 1; i >= arr[popLength]; i--) {
    arr[i] = j;
    j++;
  }
  return arr;
}

const prompt = require("prompt-sync")();
let arr = prompt().split(" ");
arr = arr.map((x) => Number(x));
console.log(pop(arr));
