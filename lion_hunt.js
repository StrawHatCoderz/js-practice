const testCase1 = "L";
const testCase2 = "L ZL Z";
const testCase3 = "L ZL";
const testCaseToUse = testCase2;

const lino = "L";
const zebra = "Z";

let lionPosition = -1;
let zebraPosition = -1;

let closestDistance = -1;

for (let index = 0; index < testCaseToUse.length; index++) {
   if(testCaseToUse[index] === lino) {
      lionPosition = index;
   } else if(testCaseToUse[index] === zebra) {
      zebraPosition = index
   }

   if(lionPosition !== -1 && zebraPosition !== -1) {
   if(lionPosition > zebraPosition) {
      closestDistance = lionPosition - zebraPosition - 1;
   } else {
      closestDistance = zebraPosition - lionPosition - 1;
   }
}
}



console.log("Input:",testCaseToUse, "Output:",closestDistance);
