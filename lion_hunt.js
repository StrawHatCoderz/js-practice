const testCase1 = "LZ";
const testCase2 = "L Z";
const testCase3 = "L ZL";
const testCaseToUse = testCase1;
let closestDistance = -1;

const lino = "L";
const zebra = "Z";
const space = " ";

if(testCaseToUse[0] === lino && testCaseToUse[1] === zebra) {
   closestDistance = closestDistance + 1;
} 

console.log("Input:",testCaseToUse, "Output:",closestDistance);
