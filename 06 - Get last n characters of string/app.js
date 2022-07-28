// Write a function that takes a string (a) as argument
// Get the first 3 characters of a
// Return the result
function myFunction(a) {
  return a.slice(-3);
}

console.log(myFunction('abcdefg')); //'abc'
console.log(myFunction('1234')); //'234'
console.log(myFunction('fgedcba')); //'fge'
