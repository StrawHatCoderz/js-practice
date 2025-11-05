const words = [
  "cat","dog","bird","fish","tree","house","car","road","sky","river",
  "book","pen","table","chair","apple","orange","banana","grape","milk",
  "school","teacher","student","friend","family","game","music","movie","dance","song",
  "sun","moon","star","light","dark","happy","sad","quick","slow","strong",
  "run","jump","play","read","write","sleep","eat","drink","walk","talk",
  "big","small","long","short","hot","cold","new","old","good","bad",
  "day","night","time","work","home","city","village","earth","water","fire",
  "love","hope","dream","peace","smile","laugh","think","learn","grow","build",
  "watch","listen","stand","sit","move","help","look","find","start","stop",
  "blue","green","red","yellow","white","black","clean","clear","bright","soft"
];

function printResult(wpm, accuracy) {
  console.log(`WPM: ${wpm}, Accuracy: ${accuracy}`);
}

function countWords(text) {
  return text.trim().split(" ").length;
}

function calculateWPM(timeTakenInSeconds, typedText) {
  const words = countWords(typedText);
  const minutes = timeTakenInSeconds / 60;
  return Math.round(words / minutes);
}

function calculateAccuracy(original, typed) {
  let correct = 0;

  for (let char = 0; char < typed.length; char++) {
    if (typed[char] === original[char]) {
      correct++;
    }
  }

  return Math.round((correct / original.length) * 100);
}


function constructSentence(length = 3) {
  const sentence = [];
  for (let wordCount = 1; wordCount <= length; wordCount++) {
    const position = Math.floor(Math.random() * words.length);
    const word = words[position];
    sentence.push(word);
  }

  return sentence.join(' ');
}

function currentTime() {
  return new Date().getTime();
}

function init() {
  const textNeedToType = constructSentence();
  console.log(textNeedToType);
  const startTime = currentTime();
  const typedText = prompt('Start Typing this sentence...');
  const endTime = currentTime();
  
  const timeTaken = (endTime - startTime) / 1000;
  const wpm = calculateWPM(timeTaken, typedText);
  const accuracy = calculateAccuracy(textNeedToType, typedText);

  printResult(wpm, accuracy);  
}

init();