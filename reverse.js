const numberToReverse = 9;
let numberToProcess = numberToReverse;
let reversedNumber = 0;

const lastDigit = numberToReverse % 10;
reversedNumber = reversedNumber * 10 + lastDigit;
numberToProcess = numberToProcess / 10;

console.log('reverse of',numberToReverse,'is',reversedNumber);
