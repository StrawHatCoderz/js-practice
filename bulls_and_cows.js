function displayLossMessage(secret) {
  console.log('Game Over! Secret was:', secret.join(''));
}

function displayWinMessage() {
  console.log('You Win!');
}

function isGameOver(secret, bulls) {
  return secret.length === bulls;
}

function copy(array) {
  const elements = [];

  for (let index = 0; index < array.length; index++) {
    elements.push(array[index]);
  }

  return elements;
}

function calculateBullsCount(secret, guess) {
  let bulls = 0;

  for (let index = 0; index < secret.length; index++) {
    if (secret[index] === guess[index]) {
      bulls++;
    }
  }

  return bulls;
}

function calculateCowsCount(secret, guess) {
  let common = 0;

  for (let index = 0; index < guess.length; index++) {
    if (secret.includes(guess[index])) {
      common++;
    }
  }

  const bulls = calculateBullsCount(secret, guess);
  const cows = common - bulls;

  return cows;
}

function validInput(input) {
  return input.length === 4 && !isNaN(input);
}

function getGuessNumber() {
  const guessedNumber = prompt('Enter Your Number (4 Digits): ');
  if (!validInput(guessedNumber)) {
    console.log('Enter a valid 4-digit number!');
    return getGuessNumber();
  }

  return guessedNumber.toString().split('');
}

function generateSecretNumber(length = 4) {
  let secret = '';

  while (secret.length < length) {
    const digit = Math.floor(Math.random() * 10);
    if (!secret.includes(digit)) {
      secret += digit;
    }
  }

  return secret.split('');
}

function playGame(secret, attemptsLimit) {
  for (let attempt = 1; attempt <= attemptsLimit; attempt++) {
    console.log(`Attempt ${attempt} of ${attemptsLimit}`);

    const guess = getGuessNumber();
    const bulls = calculateBullsCount(secret, guess);
    const cows = calculateCowsCount(secret, guess);

    console.log(`${bulls} Bulls, ${cows} Cows`);

    if (isGameOver(secret, bulls)) {
      displayWinMessage();
      return;
    }
  }

  displayLossMessage(secret);
}

function initGame() {
  const secret = generateSecretNumber();
  const attemptsLimit = parseInt(prompt('How Many Attempts You Need: '));

  playGame(secret, attemptsLimit);
}

initGame();