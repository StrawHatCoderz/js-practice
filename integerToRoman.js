function displayResults(date, desc, actual, expected) {
  const passed = actual === expected;
  const symbol = passed ? "✅" : "❌";
  console.log(`${symbol} | ${desc}`);
  if (!passed) {
    console.log(`  Input    [${date}]`);
    console.log(`  Actual   [${actual}]`);
    console.log(`  Expected [${expected}]`);
  }
}

function romanToInteger(integerNum) {
  switch (integerNum) {
    case 1: return 'I';
    case 5: return 'V';
    case 10: return 'X';
    case 50: return 'L';
    case 100: return 'C';
    case 500: return 'D';
    case 1000: return 'M';
  }
  return '';
}

function integerConversion(integerNum) {
  let roman = '';

  while (integerNum >= 1000) {
    roman += romanToInteger(1000);
    integerNum -= 1000;
  }

  while (integerNum >= 500) {
    roman += romanToInteger(500);
    integerNum -= 500;
  }

  while (integerNum >= 100) {
    roman += romanToInteger(100);
    integerNum -= 100;
  }

  while (integerNum >= 50) {
    roman += romanToInteger(50);
    integerNum -= 50;
  }

  while (integerNum >= 10) {
    roman += romanToInteger(10);
    integerNum -= 10;
  }

  while (integerNum >= 5) {
    roman += romanToInteger(5);
    integerNum -= 5;
  }

  while (integerNum >= 1) {
    roman += romanToInteger(1);
    integerNum -= 1;
  }

  return roman;
}


function testRomanConversion(expected, integerNum, desc) {
  const result = integerConversion(integerNum);
  displayResults(integerNum, desc, result, expected);
}

function main() {
  testRomanConversion('I', 1, 'Testing basic numeral I');
  testRomanConversion('V', 5, 'Testing basic numeral V');
  testRomanConversion('X', 10, 'Testing basic numeral X');
  testRomanConversion('L', 50, 'Testing basic numeral L');
  testRomanConversion('C', 100, 'Testing basic numeral C');
  testRomanConversion('D', 500, 'Testing basic numeral D');
  testRomanConversion('M', 1000, 'Testing basic numeral M');
  testRomanConversion('III', 3, 'Adding identical numerals');
  testRomanConversion('VII', 7, 'Adding a smaller numeral after a larger one');
  testRomanConversion('LVIII', 58, 'Combination of several additions');
  testRomanConversion('IV', 4, 'Subtraction: I from V');
}

main();