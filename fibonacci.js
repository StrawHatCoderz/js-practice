let sequenceRange = 2;
let firstTermOfFibo = 0;
let secondTermOfFibo = 1;
let counter = 1;
while(counter <= sequenceRange) {
  console.log(firstTermOfFibo);
  const nextTermOfFibo = firstTermOfFibo + secondTermOfFibo;
  firstTermOfFibo = secondTermOfFibo;
  secondTermOfFibo = nextTermOfFibo;
  counter++;
}