const savannah = " L LZ";

const lion = "L";
const zebra = "Z";
const space = " ";

let spacesFound = 0;
let firstFoundAnimal = "";
let lastFoundAnimal = "";

for(let position = 0; position < savannah.length; position++) {
  const currChar = savannah[position];
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

console.log("Input: ", savannah, "Output: ",spacesFound);
