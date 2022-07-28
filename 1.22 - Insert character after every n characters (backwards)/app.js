// Write a function that takes two strings (a and b) as arguments
// Beginning at the end of 'a', insert 'b' after every 3rd character of 'a'
// Return the resulting string
function myFunction(a, b) {
  let resultStr = '';
  let idx = 0;
  for (i = a.length - 1; i > -1; i--) {
    idx++;
    resultStr = a[i] + resultStr;
    if (idx % 3 === 0) {
      resultStr = b + resultStr;
    }
  }
  return resultStr;
}

function myFunction(a, b) {
  let result = [];
  let rest = a;
  while (rest.length) {
    result.unshift(rest.slice(-3));
    rest = rest.slice(0, -3);
  }
  return result.join(b);
}

console.log(myFunction('1234567', '.')); //'1.234.567'
console.log(myFunction('abcde', '$')); //'ab$cde'
console.log(myFunction('zxyzxyzxyzxyzxyz', 'w')); //'zwxyzwxyzwxyzwxyzwxyz'
