const testCase1 = "L";
const testCase2 = "Z";
const testCase3 = " ";
const testCase4 = "L  L";
const testCase5 = "Z  Z";
const testCase6 = "LZ";
const testCase7 = "L Z";
const testCase8 = "L  Z";
const testCase9 = " LZ";
const testCase10 = "L LZ";
const testCase11 = "L  LZ";


const testCaseToUse = testCase11;
let closestDistance = -1;

const lion = "L";
const zebra = "Z";
const space = " ";

let spacesFound = 0;
let firstFoundAnimal = "";
let lastFoundAnimal = "";

for(let position = 0; position < testCaseToUse.length; position++) {
  const currChar = testCaseToUse[position];
  if(currChar === space && firstFoundAnimal) {
    spacesFound++;
  } else if(currChar === lion || currChar === zebra){
      lastFoundAnimal = firstFoundAnimal;
      firstFoundAnimal = currChar;
      if(firstFoundAnimal === lastFoundAnimal) {
        spacesFound = 0;
      }
  }
}


console.log("Input: ", testCaseToUse, "Output: ",spacesFound);
