//количество различных букв в строке

function diffChar(str){
  str = str.toLowerCase().replace(/[^\w]/g, "")
  let obj = {}
  for(let char of str){
    if(obj[char]){
      obj[char]++
    }else {
      obj[char] = 1;
    }
  }
  let arr = Object.keys(obj)
  let diffLetters = arr.length

  return diffLetters
}
console.log(diffChar('I like Java Script and Python!'));

//количество раздичных слов в тексте

function diffWords(text){
 text = text.toLowerCase().replace(/[,.]/g, '').split(' ')
 let obj = {}

   for(let word of text){
     if(obj[word]){
       obj[word]++
     } else {
       obj[word] = 1
     }
   }
  let arr = Object.keys(obj)
  return arr.length
}
console.log(diffWords('Roses are red, that much is true, but violets are purple, not bloody blue.'));
