const multiplicand = 7
const limit = 10;
let multiplier = 1;
while ( multiplier <= limit) {
  const product = multiplicand * multiplier;
  console.log(multiplicand, "X", multiplier,"=",product);
  multiplier = multiplier + 1
}