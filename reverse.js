const numberToReverse = 10;
let numberToProcess = numberToReverse;
let reversedNumber = 0;

let lastDigit = numberToProcess % 10;
reversedNumber = reversedNumber * 10 + lastDigit;
numberToProcess = numberToProcess / 10 - (lastDigit / 10);

lastDigit = numberToProcess % 10;
reversedNumber = reversedNumber * 10 + lastDigit;
numberToProcess = numberToProcess / 10 - (lastDigit / 10);

console.log('reverse of',numberToReverse,'is',reversedNumber);
