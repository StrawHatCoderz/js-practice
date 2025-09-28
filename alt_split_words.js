function isVowel(c) {
  return c === 'a' || c === 'e' || c === 'i' || c === 'o' || c === 'u';
}

function altSplitWords(text) {
  let updatedString = text[0];
  let isNextConsonant = isVowel(text[0]);
  let unProcessedString = '';

  for (let position = 1; position < text.length; position++) {
    const char = text[position];

    if (isNextConsonant && !isVowel(char)) {
      updatedString += char;
      isNextConsonant = false;
    } else if (!isNextConsonant && isVowel(char)) {
      updatedString += char;
      isNextConsonant = true;
    } else {
      unProcessedString += char;
    }
  }

  if (unProcessedString) {
    return updatedString + ',' + altSplitWords(unProcessedString);
  }

  return updatedString;
}

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

function testAltSplitWords(text, expectedOutput) {
  const result = altSplitWords(text);
  displayResults(text, result, expectedOutput);
}

function main() {
  testAltSplitWords('apple', 'ape,p,l');
  testAltSplitWords('there', 'tere,h');
  testAltSplitWords('hello', 'helo,l');
  testAltSplitWords('abyss', 'ab,y,s,s');
  testAltSplitWords('words', 'wor,d,s');
  testAltSplitWords('split', 'sit,p,l');
  testAltSplitWords('abcde', 'abe,c,d');
  testAltSplitWords('aeiou', 'a,e,i,o,u');
  testAltSplitWords('aeiou', 'a,e,i,o,u');
  testAltSplitWords('spidy', 'sid,p,y');
}

main();
