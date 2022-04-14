//with Methods
function isItPalindrome(str) {
  let newStr = str.toLowerCase().replace(/[^\w]/g, '');
  console.log(newStr);
  let reversed = newStr.split('').reverse().join('')
  return newStr === reversed
  console.log(reversed);
}

// with FOR loop
function isItPalindrome(str) {
  let newStr = '';
  for(let char of str){
    if(char !== ' ' && char !== ',' && char !== '?' && char !== "'"){
      newStr += char
    }
  }
  let reversed = '';
  for(letter of newStr){
    reversed = letter + reversed;
  }
  return newStr.toLowerCase() === reversed.toLowerCase()
}

console.log(isItPalindrome('apple'))
console.log(isItPalindrome("Don't nod"))
console.log(isItPalindrome("Eva, can I see bees in a cave?"))