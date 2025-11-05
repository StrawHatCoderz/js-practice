function countVowels(word = 'hi') {
  const letters = word.split('');
  let vowelCount = 0;
  for (let position = 0; position < letters.length; position++) {
    switch(letters[position]) {
      case 'a':
      case 'e':
      case 'i':
      case 'o':
      case 'u':
        vowelCount++;
    }
  }
  return vowelCount;
}
function splitWords(sentence) {
  return sentence.split(' ')
}
const words = splitWords('hi there how are you aeiou');
let highestVowelCountWord = 0;

for (let i = 0; i < words.length; i++) {
  let vowelCount = countVowels(words[i]);
  if(vowelCount > highestVowelCountWord) {
    highestVowelCountWord = words[i];
  }
}
console.log(highestVowelCountWord);
