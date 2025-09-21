const testCase1 = "L";
const testCase2 = "Z";
const testCase3 = " ";
const testCase4 = "L  L";
const testCase5 = "Z  Z";
const testCase6 = "LZ";
const testCase7 = "L Z";
const testCase8 = "L  Z";

const testCaseToUse = testCase8;
let closestDistance = -1;

const lion = "L";
const zebra = "Z";
const space = " ";

let lionFound = false;
let zebraFound = false;
let spacesFound = 0;

for(let position = 0; position < testCaseToUse.length; position++) {
  if(testCaseToUse[position] === lion) {
    lionFound = true;
  } else if(testCaseToUse[position] === zebra) {
    zebraFound = true;
  } else {
    spacesFound++;
  }
}

if(lionFound && zebraFound) {
  closestDistance = spacesFound;
}

console.log("Input: ", testCaseToUse, "Output: ",closestDistance);
