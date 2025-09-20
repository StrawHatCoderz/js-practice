const testCase1 = "LZ";
const testCase2 = "L Z";
const testCase3 = "L ZL";
const testCaseToUse = testCase2;
let closestDistance = -1;

const lino = "L";
const zebra = "Z";
const space = " ";

for (let index = 0; index < testCaseToUse.length; index++) {
   if(testCaseToUse[index] === lino && testCaseToUse[index + 1]) {
      closestDistance = closestDistance + 1;
   }
}

console.log("Input:",testCaseToUse, "Output:",closestDistance);
