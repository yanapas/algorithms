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

// все ли категории возрастов  присутствуют
function isAgeDiverse(list) {
  let obj = {
    teens: false,
    twenties: false,
    thirties: false,
    forties:false,
    fifties:false,
    sixties:false,
    seventies:false,
    eighties:false,
    nineties:false,
    centenarian:false,
  }
  let ageArr
  for(let el of list){
    const age = el.age;
    if(10 <= age && age<20){
      obj.teens = true;
    } else if(20<= age && age <30){
      obj.twenties = true;
    } else if(30<= age && age <40){
      obj.thirties = true;
    } else if(40<= age && age <50){
      obj.forties = true;
    } else if(50<= age && age <60){
      obj.fifties = true;
    } else if(60<= age && age <70){
      obj.sixties = true;
    } else if(70<= age && age <80){
      obj.seventies = true;
    } else if(80<= age && age <90){
      obj.eighties = true;
    } else if(90<= age && age <100){
      obj.nineties = true;
    } else if(100<= age && age <200){
      obj.centenarian = true;
    }
  }

  ageArr = Object.values(obj)

  return !ageArr.includes(false);
}
console.log(isAgeDiverse([
  { firstName: 'Harry', lastName: 'K.', country: 'Brazil', continent: 'Americas', age: 11, language: 'Python' },
  { firstName: 'Kseniya', lastName: 'T.', country: 'Belarus', continent: 'Europe', age: 12, language: 'JavaScript' },
  { firstName: 'Jing', lastName: 'X.', country: 'China', continent: 'Asia', age: 13, language: 'Ruby' },
  { firstName: 'Noa', lastName: 'A.', country: 'Israel', continent: 'Asia', age: 14, language: 'Ruby' },
  { firstName: 'Andrei', lastName: 'E.', country: 'Romania', continent: 'Europe', age: 15, language: 'C' },
  { firstName: 'Maria', lastName: 'S.', country: 'Peru', continent: 'Americas', age: 16, language: 'C' },
  { firstName: 'Lukas', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 17, language: 'Python' },
  { firstName: 'Chloe', lastName: 'K.', country: 'Guernsey', continent: 'Europe', age: 18, language: 'Ruby' },
  { firstName: 'Viktoria', lastName: 'W.', country: 'Bulgaria', continent: 'Europe', age: 19, language: 'PHP' },
  { firstName: 'Piotr', lastName: 'B.', country: 'Poland', continent: 'Europe', age: 20, language: 'JavaScript' }
]));


