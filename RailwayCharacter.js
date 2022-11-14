console.log("----Railway characters problem");
let prompt = require("prompt-sync")();
console.log("Enter characters with space");
let arr = prompt().split(" ");
console.log("\n");
console.log(railwayCharacters(arr));
function railwayCharacters(arr) {
  const unique = Array.from(new Set(arr));
  if (arr.length != unique.length) {
    return "Invalid!!!";
  } else {
    let state = "Invalid railway characters";
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i][arr[i].length - 1] == arr[i + 1][0]) {
        state = "Valid railway characters";
      } else {
        return state;
      }
    }
    return state;
  }
}
