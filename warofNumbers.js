function  warofNumbers(arr) {
    var evenSum=0;
    var oddSum=0;
    for (x of arr)
    {
        if (x%2==0)
        {
            evenSum += x;
        }
        else
        {
            oddSum += x;
        }
    }
    if (evenSum>oddSum)
    {
        console.log("Even number wins the war");
    }
    else{
        console.log("Odd number wins the war");
    }
    let final=Math.abs(evenSum-oddSum);
    return (`The difference between even and odd sum is ${final}`)
}

console.log("-----War of Numbers-----");
let prompt = require('prompt-sync')();
let arrSize=prompt("Enter array size:");
let arr=[];
for (let i=0;i<arrSize;i++)
{
    arr.push(Number(prompt("Enter array Elements:")))
}
console.log(warofNumbers(arr));
