const numberToReverse = 10;
let numberToProcess = numberToReverse;
let reversedNumber = 0;

let lastDigit = numberToReverse % 10;
reversedNumber = reversedNumber * 10 + lastDigit;
numberToProcess = numberToProcess / 10;

lastDigit = numberToReverse % 10;
reversedNumber = reversedNumber * 10 + lastDigit;
numberToProcess = numberToProcess / 10;
console.log(numberToProcess);

console.log('reverse of',numberToReverse,'is',reversedNumber);
