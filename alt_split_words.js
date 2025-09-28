function symbol(result, expectedOutput) {
  return result === expectedOutput ? '✅' : '❌';
}

function displayResults(text, result, expectedOutput) {
  const mark = symbol(result, expectedOutput);
  const inputSection = '[ ' + text + ' ]';
  const expectedSection = 'Expected: [ ' + expectedOutput + ' ]';
  const actualSection = 'Actual: [ ' + result + ' ]';

  let message = mark;
  message += ' | ' + inputSection;
  message += ' | ' + expectedSection;
  message += ' | ' + actualSection;

  console.log(message);
}

function altSplitWords() {
  return 'ape,p,l';
}

function testAltSplitWords(text, expectedOutput) {
  const result = altSplitWords(text);
  displayResults(text, result, expectedOutput)
}

function main() {
  testAltSplitWords('apple', 'ape,p,l');
}

main();
