'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.replace(/\s+/g, " ").trim();
    });
    main();
});

function readLine() {
    return inputString[currentLine++];
}

function readIntArr() {
    let str = readLine();
    str = str.split(" ");
    let arr = [];
    for ( let i = 0; i < str.length; i++ ) {
        arr.push(parseInt(str[i], 10));
    }
    return arr;
}

function print(x) {
    process.stdout.write(x + "");
}
/**
 * @param {number} n
 * @param {number[]} nums
 * @return {number}
 */
function distinctNumbersBasic(n,nums) {
    //implement this function
   
}

function main() {
    let n = parseInt(readLine());
    let nums = readIntArr();
    let res = distinctNumbersBasic(n,nums);
    console.log(res);
}


'use strict';

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on('line', (input) => {
  console.log(`Received: ${input}`);
});

function main() {
    let n = parseInt(readLine());
    let nums = readIntArr();
    let res = distinctNumbersBasic(n,nums);
    console.log(res);
}



