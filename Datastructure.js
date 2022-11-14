// //Data structre concepts

// //Linear Searching
const prompt = require("prompt-sync")();
// const word = prompt("Enter a word:");
// const letter2search = prompt("Enter a letter:");

// function binarySearch(word,letter2search)
// {
//     let wordCopy = word.toLowerCase();
//     let letterCopy = letter2search.toLowerCase();
//     for (let i=0;i<wordCopy.length;i++)
//     {
//         if (wordCopy[i]==letterCopy)
//         {
//             return `${letter2search} found in the ${word} at the index ${i} ` //Returns the first index
//         }
//     }
//     return `${letter2search} is not found in the ${word}`
// }
// console.log("---This return first the index value of letter2search---");
// console.log(binarySearch(word,letter2search));
// console.log("\n");
// //To return all the index
// function multipleSearch(word,letter2search)
// {
//     let wordCopy = word.toLowerCase();
//     let letterCopy = letter2search.toLowerCase();
//     let index = 0;
//     for (let i=0;i<wordCopy.length;i++)
//     {
//         if (wordCopy[i]==letterCopy)
//         {
//             index = i
//             console.log( `--> ${letter2search} found in the ${word} at the index ${i} `); //Returns the all the index
//         }
//     }
//     if (index == 0)
//     {
//         console.log( `--> ${letter2search} is not found in the ${word}`);
//     }

// }
// console.log("---This return all the index value of letter2search--");
// multipleSearch(word,letter2search);

// /*This is not valid if the length of the word is more than 10^7 and
// If the letter2search is not in the 10^7 length word
// */

//Sorting
/**
 * Selection sort,Insertion sort
 * Bubble sort,Quick sort
 * merge sort,Counting sort
 */
//Selection sort
const arrSize = Number(prompt("Enter Array size:"));
const Array = [];
for (let i = 0; i < arrSize; i++) {
  Array.push(Number(prompt("Enter array Elelments:")));
}
console.log(Array);

function selectionSort(Array) {
  for (let i = 0; i < Array.length; i++) {
    for (let j = i; j < Array.length; j++) {
      if (Array[i] > Array[j]) {
        let temp = Array[i];
        Array[i] = Array[j];
        Array[j] = temp;
      }
    }
  }
  return Array;
}
console.log("--Sorted array--");
console.log(selectionSort(Array));
