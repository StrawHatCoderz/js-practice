const numberToReverse = 3210;
let numberToProcess = numberToReverse;
let reversedNumber = 0;

while(numberToProcess !== 0) {
  const lastDigit = numberToProcess % 10;
  reversedNumber = reversedNumber * 10 + lastDigit;
  numberToProcess = numberToProcess / 10 - (lastDigit / 10);
}

console.log('reverse of',numberToReverse,'is',reversedNumber);
