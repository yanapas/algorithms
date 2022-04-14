// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

// without Methods

function reverseInt(n) {
  let revInt = 0;
  while(n !== 0){
    let num = n % 10
    revInt *= 10
    revInt +=num
    n -= num
    n /= 10
  }
  return revInt
}
console.log(reverseInt(-51)); //-15
console.log(reverseInt(981)); //189
console.log(reverseInt(500)); //5
console.log(reverseInt(90)); //9

//with Methods

function reverseInt(n) {
  const reversed = n
    .toString()
    .split('')
    .reverse()
    .join('');

  return parseInt(reversed) * Math.sign(n);
}