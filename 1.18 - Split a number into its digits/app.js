// Write a function that takes a number (a) as argument
// Split a into its individual digits and return them in an array
// Tipp: you might want to change the type of the number for the splitting
function myFunction(a) {
  let str = a + '';
  return str.split('').map((ele) => +ele);
}

function myFunction(a) {
  const string = a + '';
  const strings = string.split('');
  return strings.map((digit) => Number(digit));
}

console.log(myFunction(10)); //[1,0]
console.log(myFunction(931)); //[9,3,1]
console.log(myFunction(193278)); //[9,3,1]
