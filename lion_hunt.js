const testCase1 = "LZ";
const testCase2 = "L Z";
const testCase3 = "L ZL";
const testCaseToUse = testCase3;
let closestDistance = -1;

const lino = "L";
const zebra = "Z";

let lionPosition = -1;
let zebraPosition = -1;

for (let index = 0; index < testCaseToUse.length; index++) {
   if(testCaseToUse[index] === lino) {
      lionPosition = index;
   } else if(testCaseToUse[index] === zebra) {
      zebraPosition = index
   }
}

console.log("Input:",testCaseToUse, "Output:",closestDistance);
