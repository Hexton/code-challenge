// Write a function that takes a string (a) as argument
// Remove the last 3 characters of a
// Return the result
function myFunction(a) {
  return a.slice(0, a.length / 2);
}

console.log(myFunction('abcdefgh')); //'abcd'
console.log(myFunction('1234')); //'12'
console.log(myFunction('gedcba')); //'ged'
