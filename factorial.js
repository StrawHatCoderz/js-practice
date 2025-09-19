const number = 5;
let counter = 1;
let factorial = 1;

while(counter <= number){
  factorial = counter * factorial;
  counter++;
}
console.log("number:",number,"factorial:",factorial);
