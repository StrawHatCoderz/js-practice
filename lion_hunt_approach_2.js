const testCase1 = "L";
const testCase2 = "Z";
const testCase3 = " ";
const testCase4 = "L  L";
const testCase5 = "Z  Z";

const testCaseToUse = testCase4;
let closestDistance = -1;

const lion = "L";
const zebra = "Z";

let lionFound = false;
let zebraFound = true;

if(testCaseToUse.length > 1) {
  let positionSerching = testCaseToUse[0]
  if(positionSerching === lion) {
    lionFound = true;
  } else if(positionSerching === zebra) {
    zebraFound = false;
  }

  positionSerching = testCaseToUse[1]
  if(positionSerching === lion) {
    lionFound = true;
  } else if(positionSerching === zebra) {
    zebraFound = false;
  }

  positionSerching = testCaseToUse[2]
  if(positionSerching === lion) {
    lionFound = true;
  } else if(positionSerching === zebra) {
    zebraFound = false;
  }
}

console.log("Input: ", testCaseToUse, "Output: ",closestDistance);
