const testCase1 = "L";
const testCase2 = "Z";
const testCase3 = " ";
const testCase4 = "L  L";
const testCase5 = "Z  Z";

const testCaseToUse = testCase5;
let closestDistance = -1;

const lion = "L";
const zebra = "Z";

let lionFound = false;
let zebraFound = false;

for(let position = 0; position < testCaseToUse.length; position++) {
  if(position === lion) {
    lionFound = true;
  } else if(position === zebra) {
    zebraFound = true;
  }
}

console.log("Input: ", testCaseToUse, "Output: ",closestDistance);
