// CODEWARS KATAS - completed by yours truely

// List names from object to String

function list(names){
  var nameString='';
  if (names.length === 0) {return ''}
  if (names.length === 1) {return names[0].name}
  for (i=0; i < names.length-2; i++) {
    nameString += `${names[i].name}, `
  }
  for (i= names.length-2; i < names.length-1; i++) {
    nameString += `${names[i].name} `
  }
  for (i= names.length-1; i < names.length; i++) {
    nameString += `& ${names[i].name}`
  }
  return nameString;
}

// Find Factorial

const factorial = n => {
  if(n===0){return 1}
  if(n>0){return n * factorial(n-1)}
};

// Or

const factorial = n => n>0 ? n*factorial(n-1) : 1;

// Find longest String in array of Strings

function longestConsec(strarr, k) {
    var longest = '';
    if(strarr.length === 0){
      return ''
    }
    strarr.reduce(function(curr, i){
      if(i.length > curr.length){
        longest = i;
        return longest
      } else {
        return curr
      }
    })
    return longest;
}

// String with name

greet = name => name ? `hello ${name}!` : null

// IP Address changed to binary String

function ipToInt32(ip){
  return ip.toString().split('.').map(e => ('00000000'+ parseInt(e).toString(2)).slice(-8)).join('');
}

// IP Address to 32 bit number

ipToInt32 = ip => ip.split(".").map((x, i, a) => x * Math.pow(256, a.length - i - 1)).reduce((a,b) => a + b)

// OR

ipToInt32 = ip => ip.split(".").reduce(function(int,v){ return int*256 + +v })

// Matching codes based on index of string

function SubstitutionCipher(abc1, abc2) {
  this.encode = function (str) {
    console.log(abc1, abc2, str, 'encode')
    var split = str.split('')
    var newArr = []
    for (val of split) {
      if (abc1.indexOf(val)===-1){
        newArr.push(val)
      } else {
        newArr.push(abc2.charAt(abc1.indexOf(val)))
      }
    }
    return newArr.join('') 
  }
  
  this.decode = function (str) {
    console.log(abc1, abc2, str, 'decode')
    var split = str.split('')
    var newArr = []
    for (val of split) {
      if (abc2.indexOf(val)===-1){
        newArr.push(val)
      } else {
        newArr.push(abc1.charAt(abc2.indexOf(val)))
      }
    }
    return newArr.join('')
  }
}

// Uncompress Music, analyze string and convert to numbers

function uncompress(music) {
  var array = music.split(",");
  var result = [];
  for(i=0;i<array.length;i++){
    // deal with multiples
    if(array[i].includes("*")){
      var arr = array[i].split("*");
      var count = 0;
      while(count < arr[1]){
        result.push(Number(arr[0]));
        count ++;
      };
    }
    // deal with ranging values
    else if(array[i].search(/\d-/)>=0){
      var range = array[i];
      var start = "";
      var end = "";
      // start number is negative
      if(range[0]=="-"){
        start += "-";
        range = range.substring(1);
        console.log("start; "+start);
      }
      // end number is negative
      else if(array[i].includes("--")){
        end += "-";
        range = range.replace("-","");
      }
      range = range.split(/[-\/]/)
      start += range[0];
      end += range[1];
      var multiple = range.length >2 ? Number(range[2]):1;
      // range that increases
      if(Number(start)<Number(end)){
        var count = Number(start);
        while(count <= Number(end)){
          result.push(count);
          count+=multiple;
        }
      }
      // range that decreases
      else{
        var count = Number(start);
        while(count >= Number(end)){
          result.push(count);
          count-=multiple;
        }
      }

    }
    else{
      result.push(Number(array[i]));
    }
  }
  return result;
}

// rectangle Pair  to find largest area - one line of code

rectanglePair=p=>[p/=4,p]

// Two teams matching up players so team 1 can score maximum points - Codewars Kata 6 - Simple Fun #210

function maximizePoints(team1, team2) {
  var sort1 = team1.sort((a,b)=>b-a);
  var sort2 = team2.sort((a,b)=>b-a);
  var count = 0;
  sort1.forEach(function(e){
    for (i=0;i<sort2.length;) {
      if(e > sort2[i]){
        count++;
        sort2.shift();
        break;
      } else {
        sort2.shift();
      }
    }
  })
  return count;
}

  // look at how this is two loops in one, WOW! 

  function maximizePoints(team1, team2) {
     var t1=team1.sort((a,b)=>a-b);
     var t2=team2.sort((a,b)=>a-b);
     for (var c=0,j=0,i=0;i<t1.length;i++,j++) if (t1[i]>t2[j]) c++; else j--; 
     return c
  }  

  // Rewritten to test

  function maximizePoints(team1, team2) {
     var t1=team1.sort((a,b)=>b-a);
     var t2=team2.sort((a,b)=>b-a);
     console.log(t1)
     console.log(t2)
     for (var c=0,j=0,i=0;j<t1.length;i++,j++) {
       console.log('top', t1[i],t2[j]); 
       if (t1[i]>t2[j]) {
         c++; 
         console.log('if')
        } else { 
        i-- ;
        console.log('else');
       }  
      }
     return c
  }

// Even out wealth (population) in an array

function socialistDistribution(population, minimum){
  population.forEach((e,i)=>{
    while (e < minimum) {
      var largest = population.indexOf(population.reduce((cur, acc)=> cur > acc ? cur : acc))
      population[i] +=1;
      e +=1;
      population[largest] -=1;
    }
  })
  
  let isBigEnough = e=> e >= minimum;  
  
  return population.every(isBigEnough) ? population : [];
}

  // Or using Rest Operator

function socialistDistribution(population, minimum){
  while (Math.min(...population) < minimum && Math.max(...population) > minimum){
    var min = Math.min(...population),
      minInd = population.indexOf(min),
      max = Math.max(...population),
      maxInd = population.indexOf(max);
      population[minInd]++;
      population[maxInd]--;
  }
  return Math.min(...population) < minimum ? [] : population;
}

// Color Parser

function parseHTMLColor(color) {
    if (color[0] != '#') {
      color = PRESET_COLORS[color.toLowerCase()]
    }
    var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
    color = color.replace(shorthandRegex, function(m, r, g, b) {
        return r + r + g + g + b + b;
    });
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(color);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : '';
}

  // Color parser other options

  function parseHTMLColor(color) {
    if (color[0] === "#") {
      const [r, g, b] = color.length === 4
        ? [color[1] + color[1], color[2] + color[2], color[3] + color[3]]
        : [color.slice(1, 3), color.slice(3, 5), color.slice(5, 7)]
      return {
        r: parseInt(r, 16),
        g: parseInt(g, 16),
        b: parseInt(b, 16),
      }
    } else {
      return parseHTMLColor(PRESET_COLORS[color.toLowerCase()])
    }
  }

  // Color parser other option

  function parseHTMLColor(c) {
    if (!c.match("#")) c = PRESET_COLORS[c.toLowerCase()];

    c = c.replace('#', '');
    
    if (c.length < 6) c = c.replace(/(.)/g, "$1$1");

    return {
      r: parseInt(c.substring(0, 2), 16),
      g: parseInt(c.substring(2, 4), 16),
      b: parseInt(c.substring(4, 6), 16)
    };
  }  

// Word Replace, swap word sizes and correct case

function replaceWords(sentence) {
  sentence = sentence.split(' ');
  let arr = [...sentence];
  while (arr.length > 1) {
    let largest = arr.reduce((a,b)=> a.length > b.length ? a : b);
    let smallest = arr.reduce((a,b)=> a.length < b.length ? a : b);
    let largestI = sentence.indexOf(largest);
    let smallestI = sentence.indexOf(smallest);
    let largestIarr = arr.indexOf(largest);
    let smallestIarr = arr.indexOf(smallest);       
    sentence[largestI] = smallest;
    sentence[smallestI] = largest;
    arr.splice(smallestIarr, 1)
    smallestIarr > largestIarr ? arr.splice(largestIarr, 1) : arr.splice(largestIarr-1, 1)
  }
  let lowerCase = sentence.map(e=>e == 'I' ? e : e.toLowerCase())
  return lowerCase.join(' ').charAt(0).toUpperCase() + lowerCase.join(' ').slice(1)
}

// Pac Man Kata5 #155

function pacMan(N, PM, enemies) {
  let widthNum = enemies.map(e=>e[1]);
  let heightNum = enemies.map(e=>e[0]);

  widthNum.push(N);
  widthNum.unshift(-1);
  heightNum.push(N);
  heightNum.unshift(-1);
  
  let widthLow =  Math.max(...widthNum.filter(e=>e<PM[1]));
  let widthHigh = Math.min(...widthNum.filter(e=>e>PM[1]));
  let heightLow = Math.max(...heightNum.filter(e=>e<PM[0]));
  let heightHigh = Math.min(...heightNum.filter(e=>e>PM[0])); 
   
  let w = widthHigh - widthLow - 1;
  let h = heightHigh - heightLow - 1;
  
  return enemies.length > 0 ? w*h-1 : N*N-1
}

// Find multiples of 3 and 5 in number and add them together

function findSum(n) {
  var sum=0;
  for(i=0; i <= Math.floor(n/3); i++){
    sum += i * 3;
  }
  for(i=0; i <= Math.floor(n/5); i++){
    sum += i * 5;
  }
  for(i=0; i <= Math.floor(n/15); i++){
    sum -= i * 15;
  }  
  return sum
}

  // Good Alternate

  function findSum(n) {
    let result = 0;
    for (let i = 0; i <= n; i += 1) {
      if (i % 3 ===0 || i % 5 === 0) result += i
    }
    return result
  }

// increasing or decreasing or same arrays

function sequenceClassifier(arr){
  var up=0, down=0, same=0;
  arr.reduce((a,b)=>{
    if(b === a) {
      same ++;
      return b
    }
    if(b > a) {
      up ++;
      return b
    }
    if(b < a) {
      down ++;
      return b
    }
  })
  if (up === 0 && same === 0 && down > 0) return 3
  else if (down === 0 && same === 0 && up > 0) return 1
  else if (up === 0 && down > 0 && same > 0) return 4
  else if (down === 0 && up > 0 && same > 0) return 2
  else if (up === 0 && down === 0 && same > 0) return 5
  else if (up > 0 && down > 0) return 0
}

// Factorial Value

function FirstFactorial(num) { 
    if (num > 0) return num * FirstFactorial(num-1);
    else return 1
}

// Reverse String

var  FirstReverse = (str) => str.split('').reverse().join('')

  //  Or

  function FirstReverse(str) { 
    var split = str.split('');
    var reverse = split.reverse();
    var join = reverse.join(''); 
  return join 
}

// Longest Word in String

function LongestWord(sen) { 
    sen = sen.replace(/[^\w\s]/g, "");
    var split = sen.split(' ');
    var largest = split.reduce((a,b) => {
      if (b.length > a.length) return b
      else return a
    });
  return largest;      
}

// String Modify increaes character code +1

function LetterChanges(str) {
    var strArr = str.split('')
    for (var i=0;i<strArr.length;i++) {
        var code = strArr[i].charCodeAt(0);
        if(strArr[i].match(/[a-z|A-Z]/)) {
            strArr[i] = String.fromCharCode(code + 1)
        }
    } 
  return strArr.join(''); 
}

// Add numbers up to argument

function SimpleAdding(num) { 
    var sum = 0;
    for(var i=1;i<=num;i++){
        sum += i
    }
  return sum; 
}

// Upper Case first word of each String

function LetterCapitalize(str) { 
    str = str.split('')
    str[0] = str[0].toUpperCase();
    for(var i =0;i<str.length;i++){
        if(str[i] === ' '){
            str[i+1] = str[i+1].toUpperCase();
        }
    }
  return str.join(''); 
}

// Check characters surrounding letters

function SimpleSymbols(str) { 
    var check;
    for(var i =0;i<str.length;i++){
        if(str.charAt(i) == str[i].match(/[A-Z|a-z]/)) {
            if(str.charAt(i-1) === '+' && str.charAt(i+1) === '+'){
                check = true;
            } else {
                check = false;
                break;
            }
        }
    }
    return check; 
}

  // Or

  function SimpleSymbols(str) { 
    var str = '=' + str + '=';
    for (var i = 0; i < str.length; i++) {
      if (str[i].match(/[a-z]/i)) {
        if (str[i-1] !== '+' || str[i+1] !== '+') { 
          return false;
        }
      }
    }
    return true;
  }

// Compare two numbers

function CheckNums(num1,num2) { 
    if (num2 > num1) {
        return true
    } else if (num1 === num2) {
        return -1
    } else {
        return false
    }
}

// Change minutes to hours

function TimeConvert(num) { 
    var hours = Math.floor(num / 60);
    var minutes = num % 60;
  return `${hours}:${minutes}`; 
}

// Alphabetical Order

var AlphabetSoup = str => str.split('').sort().join(''); 

// check char in string

function ABCheck(str) { 
    for(var i =0;i<str.length;i++){
        if(str[i] === 'a'){
            if (str[i+4]==='b') {
                return true
            }
        }
    }
    return false        
}

// Count Vowels

function VowelCount(str) { 
    str = str.match(/[aeiou]/gi)
    return str.length;        
}

// Number of words in String

function WordCount(str) { 
    str = str.split(' ');  
    return str.length; 
         
}

// X and O count

function WordCount(str) { 
    str = str.split(' ')
      
    return str.length; 
         
}

// String Pallindrom?

function Palindrome(str) { 
  str = str.replace(/\W/g,'')
  return str.split('').reverse().join('') === str ? true : false
}

// Hoiseing Exercise

function test() {
  console.log(a);
  console.log(foo());
   
  var a = 1;
  function foo() {
    return 2;
  }
}

test();

  // looks like

  function test() {
    var a;
    function foo() {
      return 2;
    }

    console.log(a);
    console.log(foo());
   
    a = 1;
  }

  test();

// Sequences

function ArithGeo(arr) { 
  if (checkArith(arr) !== false) { return 'Arithmetic'; }
  if (checkGeo(arr) !== false) { return 'Geometric'; }
  return -1;
}

function checkArith(arr) {
  const diff = arr[1] - arr[0];
  return arr.reduce((num, next) => next - num !== diff || next === false ? false : next);
}

function checkGeo(arr) {
  const ratio = arr[1] / arr[0];
  return arr.reduce((num, next) => next / num !== ratio || next === false ? false : next);
}

// Find largest number in array, check to see if remainding numbers add up to largest

function ArrayAdditionI(arr) { 
    var largest = arr.reduce((a,b) =>{
        if (b > a) return b
        else return a
    })
    var removed = arr.splice(arr.indexOf(largest),1);
    if(largest === arr.reduce((a,b)=>a+b)){
      return true
    } else return false
}


