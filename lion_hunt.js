const testCase1 = "L";
const testCase2 = "L ZL Z";
const testCase3 = "L ZL";
const testCaseToUse = testCase1;

const lino = "L";
const zebra = "Z";

let lionPosition = -1;
let zebraPosition = -1;

let closestDistance = testCaseToUse.length;

for (let index = 0; index < testCaseToUse.length; index++) {
   if(testCaseToUse[index] === lino) {
      lionPosition = index;
   } else if(testCaseToUse[index] === zebra) {
      zebraPosition = index
   }

   let distance;
   if(lionPosition !== -1 && zebraPosition !== -1) {
      if(lionPosition > zebraPosition) {
         distance = lionPosition - zebraPosition - 1;
      } else {
         distance = zebraPosition - lionPosition - 1;
      }
      if(distance < closestDistance) {
         closestDistance = distance;
      }
   }
}

if(closestDistance === testCaseToUse.length) {
   closestDistance = -1;
}

console.log("Input:",testCaseToUse, "Output:",closestDistance);
