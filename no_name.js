const FLAMES_TEXT = 'FLAMES';

function copyArraySection(array, start, end) {
  const result = [];
  for (let i = start; i < end; i++) {
    result.push(array[i]);
  }
  return result;
}

function performFlames(uniqueLettersCount) {
  let flamesText = FLAMES_TEXT.split('');  

  while (flamesText.length > 1) {
    const removeIndex = (uniqueLettersCount % flamesText.length) - 1;

    if (removeIndex >= 0) {
      const part1 = copyArraySection(flamesText, removeIndex + 1, flamesText.length);
      const part2 = copyArraySection(flamesText, 0, removeIndex);
      flamesText = part1.concat(part2);
    } else {
      flamesText.pop();
    }

  }

  return flamesText[0];
}


function countUncommonLetters(text1, text2) {
  let name1 = text1.toLowerCase();
  let name2 = text2.toLowerCase();

  for (let i = 0; i < name1.length; i++) {
    const char = name1[i];
    if (name2.includes(char)) {
      name1 = name1.replace(char, '');
      name2 = name2.replace(char, '');
    }
  }

  return name1.length + name2.length;
}

function displayResult(letter) {
  let relation = '';
  switch (letter) {
    case 'F': relation = 'Friends 💛'; break;
    case 'L': relation = 'Lovers ❤️'; break;
    case 'A': relation = 'Affection 💖'; break;
    case 'M': relation = 'Marriage 💍'; break;
    case 'E': relation = 'Enemies 💢'; break;
    case 'S': relation = 'Siblings 💫'; break;
  };

  console.log(`Result: ${relation}`);
}

function flames(person1, person2) {
  const uniqueLettersCount = countUncommonLetters(person1, person2);
  const result = performFlames(uniqueLettersCount);
  displayResult(result);
}

function init() {
  console.log('💥 Welcome to the FLAMES Game 💥');

  const person1 = prompt('Enter 1st Person Name: ');
  const person2 = prompt('Enter 2nd Person Name: ');

  flames(person1, person2);
}

init();