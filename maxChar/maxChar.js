//one ex
function maxChar(str){

  const charMap = {};
  let max = 0;
  let maxChar = '';

  for (let char of str){
    if (charMap[char] ) {  //запихиваем строку в объект с ключами
      charMap[char]++;
    } else {
      charMap[char] = 1;
    }

  }
  for (let char in charMap){
    if (charMap[char] > max){
      max = charMap[char];
      maxChar = char;
    }
  }
  return maxChar;
}
//second ex
function maxChar(str){

}

console.log(maxChar("Hello There!"));
