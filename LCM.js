//LCM of two numbers
console.log("-----LCM of two numbers program-----");

function lcmOftwo(x,y)
{
    let finalOutput = (x*y)/gcd(x,y);
    return (`LCM of the numbers ${x} and ${y} is ${finalOutput}`)
}



var prompt = require('prompt-sync')();
let x = prompt("Enter a number:");
let y = prompt("Enter a number:");
console.log(lcmOftwo(x,y));


console.log("\n\n");


//LCM of two numbers
console.log("-----LCM of multiple numbers program-----");

function lcmOfmany(arr)
{
    let i=0;
    let lcm=arr[0];
    for (i=1;i<arr.length;i++)
    {
        lcm =(arr[i]*lcm)/gcd(arr[i],lcm);
    }
    return (`LCM of the numbers ${arr} is ${lcm}`)
}



var prompt = require('prompt-sync')();
let arrSize = prompt("Enter array size:");
let arr=[]
for (let i=0;i<arrSize;i++)
{
    arr.push(Number(prompt()))
}
console.log(lcmOfmany(arr));

function gcd(x,y)
{
    let mini = min(x,y);
    for (let i=mini;i>=2;i--)
    {
        if (x%i==0 && y%i==0)
        {
            return i
        }
    }
    return 1;
}

function min()
{
    return Math.min(...arguments);
}