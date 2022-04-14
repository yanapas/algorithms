// with FOR loop
function stringReverse(str){
  let reversedStr = '';
  for(let i = str.length -1 ; i >= 0; i--){
    reversedStr += str[i]
  }
  return reversedStr
}

//with not typical FOR loop
function stringReverse(str){
  let reversedStr = '';
  for(let char of str){
    reversedStr = char + reversedStr
  }

  return reversedStr
}

//with Methods
function stringReverse(str){
  let reversedStr = str.split('').reverse().join('')

  return reversedStr
}
console.log(stringReverse('apple'))

