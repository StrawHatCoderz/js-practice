
const savannah = "L ZL Z";
const lino = "L";
const zebra = "Z";

let lionPosition = -1;
let zebraPosition = -1;

let closestDistance = savannah.length;

for (let index = 0; index < savannah.length; index++) {
   if(savannah[index] === lino) {
      lionPosition = index;
   } else if(savannah[index] === zebra) {
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

if(closestDistance === savannah.length) {
   closestDistance = -1;
}

console.log("Input:",savannah, "Output:",closestDistance);
