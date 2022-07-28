// Write a function that takes two strings (a and b) as arguments
// Return the number of times a occurs in b
function myFunction(a, b) {
  return b.split(a).length - 1;
}

console.log(
  myFunction('m', 'how many times does the character occur in this sentence?')
); //2
console.log(
  myFunction('h', 'how many times does the character occur in this sentence?')
); //4
console.log(
  myFunction('?', 'how many times does the character occur in this sentence?')
); //1
console.log(
  myFunction('z', 'how many times does the character occur in this sentence?')
); //0
