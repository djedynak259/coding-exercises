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

// Prime Numbers

function PrimeTime(num) { 
  var count = 0;
  for (var i=1; i < num;i++) {
    if(num % i === 0) {
      count ++
    } 
  }
  if(count > 1)return false
  else return true
}

// Run Length

function RunLength(str) { 
  str = str.split('')
  var count = 1;
  var newarr=[];
  str.reduce((a,b)=>{
    if(a === b) {
      count ++
      return b
    } else {
      newarr.push(count)
      newarr.push(a)
      count=1
      return b
    }
  })
    newarr.push(count)
    newarr.push(str.pop())
    return newarr.join('')
}

// Critical Path in progress

console.clear()

function ShortestPath(strArr) {
    var currentNode=strArr[1];
    var nodes = [];
    var paths = [];
    var count =null;
    var tempCount = 0;
    var shortPath=[];
    var tempPath=[];
    for (var i =1; i<= strArr[0];i++) {
        nodes.push(strArr[i])
    }
    for (var i =+strArr[0]+1; i<(strArr.length);i++) {
      paths.push(strArr[i])
    }
    console.log(nodes, paths)

    
    function travel () {
      console.log('travel', currentNode)
      for (var i =0; i < paths.length; i++) {
        console.log('i',i)
        if(paths[i].charAt(0) === currentNode) {
          tempPath.push(paths[i])
          currentNode = paths[i].charAt(2)
          tempCount++;
          console.log(tempPath)
          if(currentNode == nodes[nodes.length-1]) {
            if(count === null || tempCount<count) {
              count=tempCount
              shortPath=tempPath;
              
              console.log('newset',count,shortPath)
            } 
            currentNode=strArr[1]
            tempPath=[]
            tempCount=0;
//             console.log('',tempCount, tempPath, currentNode)

          }
          travel()
        }
        
      }
    }
    travel()
    

}


ShortestPath(["5","A","B","C","D","F","B-D","A-B","A-C","B-C","C-D","D-F"]);

// Find nth Prime Number

function PrimeMover(num) { 
  var primes = [];
  var count=0;
  for (var j = 2;j < 10000; j++ ) {
    for (var i = 1; i < j; i++) { 
      if (j % i === 0) {
        count++
      }
    }
    if(count <= 1) {
      primes.push(j)
    }
    count=0;
    if(primes[num]){
      return primes[num-1]
    }
  }         
}

// Find nth Prime better

function primeNum(input){
  let primes = [];
  let currentNum=2
  while(primes.length < input){

    let count = 0
    for(let j=2;j<currentNum;j++){
      if(currentNum%j === 0){
        count++
      }
    }
    if(count === 0){
      primes.push(currentNum);
    }
     currentNum++
  }
    return primes[primes.length-1]
}


function testThis(arg, expected) {
    let result = primeNum(100)
    if(result !== expected){
       console.log(`FAIL - got ${result} and expected ${expected}`)
    } else {
       console.log(`OK!`)
    }
}
testThis(100,541)

// Really good prime checker

function nthPrime(n) {
    var P = 0;

    function isPrime(x) {
        var isPrime= true;

        for (var d = 2; d <= Math.sqrt(x); d++) {
            if((x/d) % 1 == 0) {
                isPrime = false;
                break;
            }
        }

        return isPrime;
    }

    for (var i = 1; 0 < n; i++) {

        if(isPrime(i)) {
            P = i; n--;
        }

        // we can skip the even numbers
        if(3 <= i){
            i++;
        }

    }

    return P;
}


// Palindrome II

function PalindromeTwo(str) { 
    var match = false;
    var lower = str.toLowerCase();
    var edited= lower.match(/[a-z]/gi);
    var first = edited.slice(0,edited.length/2);
    var second = edited.slice(Math.ceil(edited.length/2),edited.length+1).reverse();
    for(var i =0; i < first.length; i++) {
        if(first[i] === second[i] ){
          match = true;
        } else return false;
    }    
  return match;
}

// find largest palindrome, re-arrange string

var longestPalindrome = function(s) {
    let obj = {}
    let result = []
    for(let i=0;i<s.length;i++){
        if(obj[s[i]]){
           obj[s[i]] += 1
        } else {
            obj[s[i]] =1 
        }
    }
    
    Object.keys(obj).forEach(e=>{
        if(obj[e] >=2){
           result.push(e)
        }
    })
    for(let key in obj){
        if(obj[key] % 2 === 1){
           result.push(key)
            break;
        }
    }
    for(let i=result.length-2;i>=0;i--){
        result = result.concat(result[i])

    }
    return result.join('')
}; 

console.log(longestPalindrome('abaccddfff'))


// Longest palindrome in string no re-arranging

var longestPalindrome = function(s) {
    let stack = [];
    let max = 0;
    let result;
                 
    for(let i=1; i<s.length;i++){
        if(s[i-1] === s[i+1]){
            stack.push({start:i-1, end:i+1})
            
        }
        if(s[i-1] === s[i]){
            stack.push({start:i-1, end:i})
        }
    }
    console.log(stack)
    while(stack.length > 0){
        let current = stack.pop()
        let len = current.end - current.start +1;
        if(len > max){
            max = len
            result = s.substring(current.start,current.end+1)
        }
        if(s[current.start-1] !== undefined && s[current.start-1] === s[current.end+1]){
            stack.push({start:current.start-1, end:current.end+1})
        }
    }
    return result ? result : s[0]
};

console.log(longestPalindrome("aaaaaaa"))


// Find Greatest Common Factor

function Division(num1,num2) { 
  var num1Arr = [];
  var num2Arr = [];
  var match;
  for (var i = num1; i > 0;i--) {
    if(num1 % i === 0) {
      num1Arr.push(i)
    }
  }
    for (var i = num2; i > 0;i--) {
    if(num2 % i === 0) {
      num2Arr.push(i)
    }
  }
  for(var i=0;i<num1Arr.length;i++){
    if(num2Arr.includes(num1Arr[i])) {
      return num1Arr[i];
    }
  }
}

// String Matching

function StringScramble(str1,str2) { 
   var match ='';
   for (var i=0;i<str2.length;i++) {
     if(str1.includes(str2[i])) {
       match+=str2[i]
       console.log(match)
     }
   }
   if(match === str2){
     return true
   } else return false
}

// Calculator in progress = COMPLETE

class Calc {

    
    calculator(str) { 
      str = str.split('');
      stringFix(str);
      console.log(str);

    while(str.includes('(')) {
        let first = str.lastIndexOf('(')
        let second = str.slice(first).indexOf(')') + first
        let para = str.slice(first+1,second)
        mD(para)
        aS(para)
        str.splice(first,second-first+1,para[0])
        console.log(str)

    }

      function stringFix(strr) {
        for(var i=0;i<strr.length-1;i++){
          if(strr[i].match(/\d/) && strr[i+1].match(/\d/)) {
            strr.splice(i, 2, strr[i] + strr[i+1]);
            i--;
          } 
        }
      }

      function mD(strr) {
        for (var i=0;i<strr.length;i++) {
           if(strr[i] === '/' || strr[i] === '*'){
              if(strr[i] === '/') {
                strr.splice(i-1, 3, Number(strr[i-1]) / Number(strr[i+1]))
                console.log('/', strr)
                i--
              }
               if(strr[i] === '*') {
                strr.splice(i-1, 3, +strr[i-1]*+strr[i+1])
                console.log('*', strr)
                i--
              }
           }
        }
      }

      function aS(strr) {
        for (var i=0;i<strr.length;i++) {
           if(strr[i] === '+' || strr[i] === '-'){
              if(strr[i] === '+') {
                strr.splice(i-1,3,+strr[i-1]+ +strr[i+1])
                console.log('+', strr)
                i--
              }
               if(strr[i] === '-') {
                strr.splice(i-1,3,+strr[i-1]- +strr[i+1])
                console.log('-', strr)
                i--
              }
           }
        }
      }

      mD(str)
      aS(str)

      return str[0]
    }

}

console.log(new Calc().calculator('(212+2)*(6/3+3+4)'))


// Off Line Minimum

function OffLineMinimum(strArr) { 
    var current = [];
    var final = '';
    for (var i =0; i < strArr.length;i++) {
      if(strArr[i].match(/\d/)){
         current.push(+strArr[i])
         console.log(current)
      } else if (strArr[i] === 'E') {
        min =  Math.min.apply(null,current)
        console.log(min)
        console.log(current.indexOf(min))
        final += `${current.splice(current.indexOf(min),1)},`
      }
      console.log('final',final)
    } 
  return final.substring(0,final.length-1);
}

// Find middle of linked list with one pass

function Node(data, next) {
  this.data = data;
  this.next = next;
}    

// setup some nodes and connect them to each other
// the linked list looks like:
// (head) n5 -> n4 -> n3 -> n2 -> n1 -> null
var n1 = new Node("Hello", null);   
var n2 = new Node("21", n1); 
var n3 = new Node("Green", n2); 
var n4 = new Node("Blue", n3); 
var n5 = new Node("Daniel", n4); 

// assign a node to the head which functions
// as the entry into our linked list
var head = n5; 

// setup pointers to both start
// at the head of the linked list
var fastPointer = head;
var slowPointer = head;

// loop through the linked list
// when fastPointer reaches the end of the list
// then slowPointer will be at the middle node
while (fastPointer.next !== null && fastPointer.next.next !== null) {
  fastPointer = fastPointer.next.next;   
  slowPointer = slowPointer.next;
}

// slowPointer is now at the middle node in the linked list
slowPointer.data  


// Binary Tree Traversing

  //  Setup

    function Node(data) {
    this.data = data;
    this.left = null;
    this.right = null;
    }    

    // create nodes
    var root = new Node('A');
    var n1 = new Node('B');
    var n2 = new Node('C');
    var n3 = new Node('D');
    var n4 = new Node('E');

    // setup children
    root.left = n1;
    root.right = n2;
    n1.left = n3;
    n1.right = n4;



  // Pre-order

  // 1) Return the root node value.
  // 2) Traverse the left subtree by recursively calling the pre-order function.
  // 3) Traverse the right subtree by recursively calling the pre-order function.

  function pre_order(root, nodes) {
    nodes.push(root.data);
    if (root && root.left) {
        pre_order(root.left, nodes);   
    }
    if (root && root.right) {
        pre_order(root.right, nodes);  
    }
    return nodes;
  }

  pre_order(root, []); // => [ A, B, D, E, C ]



  // In-order

  // 1) Traverse the left subtree by recursively calling the in-order function.
  // 2) Return the root node value.
  // 3) Traverse the right subtree by recursively calling the in-order function.

  function in_order(root, nodes) {
    if (root && root.left) {
        in_order(root.left, nodes);   
    }
    nodes.push(root.data);
    if (root && root.right) {
        in_order(root.right, nodes);  
    }
    return nodes;
  }

  in_order(root, []); // => [ D, B, E, A, C ]



  // Post-order

  // 1) Traverse the left subtree by recursively calling the in-order function.
  // 2) Traverse the right subtree by recursively calling the in-order function.
  // 3) Return the root node value.

  function post_order(root, nodes) {
    if (root && root.left) {
        post_order(root.left, nodes);   
    }
    if (root && root.right) {
        post_order(root.right, nodes);  
    }
    nodes.push(root.data);
    return nodes;
  }

  post_order(root, []); // => [ D, E, B, C, A ]



  // Level-order

  // 1) Add the root to a queue.
  // 2) Pop the last node from the queue, and return its value.
  // 3) Add all children of popped node to queue, and continue from step 2 until queue is empty.

  function level_order(root, nodes) {
    var queue = [root];
    while (queue.length > 0) {
        // front of queue is at element 0 and we push elements to back of queue
        var n = queue.shift();
        nodes.push(n.data);
        if (n.left !== null) { queue.push(n.left); }
        if (n.right !== null) { queue.push(n.right); }
    }
    return nodes;
  }

  level_order(root, []); // => [ A, B, C, D, E ]


  // Applications of tree traversals
 
  // The algorithms above have several use cases in software and development. Below is a list of some of these common cases:

  // 1) To construct any binary tree, you need the in-order traversal array of nodes and either a pre-order or post-order array.
  // 2) A binary search tree can be constructed using only its pre-order traversal array.
  // 3) The in-order traversal of a binary search tree produces the elements in sorted order.
  // 4) You can perform a breadth-first search on a tree using a level-order traversal.



// Queue List

// queue is initially empty
var Queue = {front: null, back: null};

// we will use a node to keep track of the elements
// in the queue which is represented by a linked list
function Node(data, next) {
  this.data = data;
  this.next = next;
} 

// add elements to queue in O(1) time
function Enqueue(element) {
  var N = new Node(element, null);
  if (Queue.back === null) {
    Queue.front = N;
    Queue.back = N; 
  }
  else { 
    Queue.back.next = N; 
    Queue.back = Queue.back.next;
  } 
}

// remove first element from queue in O(1) time
function Dequeue() {
  if (Queue.front !== null) { 
    var first = Queue.front;
    Queue.front = Queue.front.next; 
    return first.data;
  } else {
    if (Queue.back !== null) { Queue.back = null; }
    return 'Cannot dequeue because queue is empty';
  }
}

Enqueue('a'); 
Enqueue('b'); 
Enqueue('c'); 
Dequeue();


//  Stacks

// implement stacks using plain arrays with push and pop functions
var Stack1 = [];
var Stack2 = [];

// implement enqueue method by using only stacks
// and the push and pop functions
function Enqueue(element) {
  Stack1.push(element);
}

// implement dequeue method by pushing all elements
// from stack 1 into stack 2, which reverses the order
// and then popping from stack 2
function Dequeue() {
  if (Stack2.length === 0) {
    if (Stack1.length === 0) { return 'Cannot dequeue because queue is empty'; }
    while (Stack1.length > 0) {
      var p = Stack1.pop();
      Stack2.push(p);
    }
  }
  return Stack2.pop();
}

Enqueue('a');
Enqueue('b');
Enqueue('c');
Dequeue(); 

//  Two Sum Problem  O(n)

// our two sum function which will return
// all pairs in the array that sum up to S
function twoSum(arr, S) {

  var sums = [];
  var hashTable = {};

  // check each element in array
  for (var i = 0; i < arr.length; i++) {
 
    // calculate S - current element
    var sumMinusElement = S - arr[i];

    // check if this number exists in hash table
    // if so then we found a pair of numbers that sum to S
    if (hashTable[sumMinusElement.toString()] !== undefined) { 
      sums.push([arr[i], sumMinusElement]);
    }

    // add the current number to the hash table
    hashTable[arr[i].toString()] = arr[i];

  }

  // return all pairs of integers that sum to S
  return sums;

}

twoSum([3, 5, 2, -4, 8, 11], 7);

// Print all Subsets

function powerSet(arr) {
  
  // the final power set
  var powers = [];
  
  // the total number of sets that the power set will contain
  var total = Math.pow(2, arr.length);
  
  // loop through each value from 0 to 2^n
  for (var i = 0; i < total; i++) {
    
    // our set that we add to the power set
    var tempSet = [];
    
    // convert the integer to binary
    var num = i.toString(2);
    
    // pad the binary number so 1 becomes 001 for example
    while (num.length < arr.length) { num = '0' + num; }
    
    // build the set that matches the 1's in the binary number
    for (var b = 0; b < num.length; b++) {
      if (num[b] === '1') { tempSet.push(arr[b]); }    
    }
    
    // add this set to the final power set
    powers.push(tempSet);
    
  }
  
  return powers;
  
}

powerSet([1, 2, 3]); 
// [[], [1], [2], [3], [1, 2], [2, 3], [1, 3] [1, 2, 3]]



// Find all string combinations including alternates with '?'

function patterns(str, all) {
  
  // if the string is empty, return all the string sets
  if (str.length === 0) { return all; }
  
  // if character is 0 or 1 then add the character to each
  // string set we currently have so far
  if (str[0] === '0' || str[0] === '1') {
    for (var i = 0; i < all.length; i++) {
      all[i].push(str[0]);  
    }
  }
  
  // for a wildcard, we make a copy of each string set
  // and for half of them we append a 0 to the string 
  // and for the other half we append a 1 to the string
  if (str[0] === '?') {
    var len = all.length;
    for (var i = 0; i < len; i++) {
      var temp = all[i].slice();
      all.push(temp);
    }
    for (var i = 0; i < all.length; i++) {
      (i < all.length/2) ? all[i].push('0') : all[i].push('1');  
    }
  }
  
  // recursively calculate all string sets
  return patterns(str.substring(1), all);
  
}

patterns('10?1?', [[]]);
// [ [ 1, 0, 0, 1, 0 ],  [ 1, 0, 1, 1, 0 ],  [ 1, 0, 0, 1, 1 ],  [ 1, 0, 1, 1, 1 ] ]


// Duplicates I

function duplicates(arr) {
  
  // where we will store our duplicate values
  var dups = [];

  for (var i = 0; i < arr.length; i++) {
    
    // get element in array
    var el = arr[Math.abs(arr[i])];
    
    // element in array is positive so make it negative
    if (el > 0) { arr[Math.abs(arr[i])] = -arr[Math.abs(arr[i])]; }
    
    // special case if element is zero
    // we set the value at this index to -arr.size as not to
    // mix this number up with the others because we know the
    // numbers are all in the range of 0 to n-1
    else if (el === 0) { arr[Math.abs(arr[i])] = -arr.length; }
    
    // element is negative so it is a duplicate
    else { 
      if (Math.abs(arr[i]) === arr.length) { dups.push(0); }
      else { dups.push(Math.abs(arr[i])); }
    }
    
  }
  
  return dups;
  
}

duplicates([0,2,0,1,3,3]);


// Duplicates 2

function duplicates(arr) {
  
  // our hash table to store each element
  // in the array as we pass through it
  var hashTable = [];
  
  // store duplicates
  var dups = [];
  
  // check each element in the array
  for (var i = 0; i < arr.length; i++) {
    
    // if element does not exist in hash table
    // then insert it
    if (hashTable[arr[i].toString()] === undefined) {
      hashTable[arr[i].toString()] = true;
    } 
    
    // if element does exist in hash table
    // then we know it is a duplicate
    else { dups.push(arr[i]); }
    
  }
  
  return dups;
  
}

duplicates([1, 21, -4, 103, 21, 4, 1]);

// Count missing consequtive numbers

function Consecutive(arr) { 
  let count = 0;
  for(var i = arr[0]; i < arr[arr.length-1];i++) {
    if (!arr.includes(i)) {
      count++;
    }
    console.log(i)
  }
  return count
}

// Permutations find next largest of input number

function PermutationStep(num) {
  num = '' + num;
  let allSame = true;
  for (let i = 0; i < num.length - 1; i++) {
    if (num[i] !== num[i + 1]) {
      allSame = false;
      break;
    }
  }
  if (allSame) { return - 1 }

  const end  = num.length - 1
  if (num[end - 1] < num[end]) { return num.slice(0, end - 1).concat(num[end]).concat(num[end - 1]) }
  else {
    for (let i = num.length - 3; i > -1; i--) {
      if (num[i] < num[num.length - 1]) {
        console.log(':/')
        return num.slice(0, i)
          .concat(num[num.length - 1])
          .concat(num.slice((i + 1), (num.length - 1)))
          .concat(num[i]); 
      }
    }
    for (let i = num.length - 2; i > 0; i--) {
      for (let j = i - 1; j > -1; j--) {
        if (num[i] > num[j]) {
          console.log('i: ', i, ' j: ', j)
          return num.slice(0, j)
            .concat(num[i])
            .concat(num.slice((j + 1), i))
            .concat(num[j])
            .concat(num.slice(i + 1));
        }
      }
    }
  }
  return -1;
}

// Compare Mode and Mean to match

function MeanMode(arr) { 
  let mean = 0;
  let modeObj = {};
  let mode = 0;
  let count = 0;
  mean = (arr.reduce((a,b)=>a+b)/arr.length);
  
  for (var i=0;i<arr.length;i++) {

    if(modeObj[arr[i]] == null){
      modeObj[arr[i]] = 1;  
      }
    else
      { modeObj[arr[i]]++}
    if(modeObj[arr[i]]>count) {
      count = modeObj[arr[i]];
      mode = arr[i];
    }
  }
   return mode === mean ? 1 :0
}

// SumMultiplier

function SumMultiplier(arr) { 
  let sumDouble = 2 * (arr.reduce((a,b)=>a+b));
  let largest = 0;
  let second = 0;
  let el = arr.reduce((a,b) =>{
    if(b>a){
      largest = b;
      second = a;
      return b
    } else return a
  })
  return largest * second > sumDouble ? true : false   
}

// Bubble Sort

function bubblesort(arr) {
  var swapped = true;
  while (swapped) {
    swapped = false;
    for (var i = 1; i < arr.length; i++) {
      if (arr[i-1] > arr[i]) {
        var temp = arr[i-1];
        arr[i-1] = arr[i];
        arr[i] = temp;
        swapped = true;
      }
    } 
  }
  return arr;      
}

// String Character Case Swap

function SwapCase(str) { 
  var neww ='';
  for(var e=0;e<str.length;e++){
    if(str[e] == str[e].toUpperCase()){
      neww += str[e].toLowerCase()
    }
    else if(str[e] == str[e].toLowerCase()){
      neww += str[e].toUpperCase()
    }
  }
  return neww
}

// Array Additions

function ArrayMatching(strArr) { 
  var arr1 = strArr[0].replace(/\[|\]|\,/g, '').split(' ');
  var arr2 = strArr[1].replace(/\[|\]|\,/g, '').split(' ');
  var length = arr1.length > arr2.length ? arr1.length : arr2.length;
  var string = '';
    console.log(+arr1[0]+ +arr2[0])
  for(var i = 0; i < length; i++) {
    string += `-${(+arr1[i] ? +arr1[i]:0) + (+arr2[i] ? +arr2[i]:0)}`
  }
  return string.slice(1)
}

// Array Addition option 2

function ArrayMatching(strArr) { 
  var arr1 = JSON.parse(strArr[0]);
  var arr2 = JSON.parse(strArr[1]);
  var length = arr1.length > arr2.length ? arr1.length : arr2.length;
  var result = [];
  for(var i = 0; i < length; i++) {
      if(arr2[i] === undefined || arr1[i] === undefined) {
        result.push(arr1[i] ? arr1[i] : arr2[i]);
      } else {
        result.push(arr1[i] + arr2[i]);
      }
  }
  return result.join('-');
}

// Find third largest in array of strings

function ThirdGreatest(strArr) { 
  let first = '';
  let second = '';
  let third = '';
  for (var i=0;i<strArr.length;i++) {
    if(strArr[i].length > first.length){
      third = second;
      second = first;
      first = strArr[i];
    }
    else if(strArr[i].length > second.length) {
      third = second
      second = strArr[i]
    }
    else if (strArr[i].length >= third.length) {
      third = strArr[i]
    }
  }
  return third
}

// Solve Reverse Polish Notation

function ReversePolishNotation(str) { 
  let strArr = str.split(' ');
  let sym = '';
  let stack1 = [];
  let stack2 = [];

  for(var i=0;i<strArr.length;i++){
    if(strArr[i].match(/\d/g)){
      stack1.push(strArr[i])
    }
    else if(strArr[i].match(/[\*\+\-\/]/g)){
      stack2.unshift(stack1.pop())
      stack2.unshift(stack1.pop())
      stack1.push(eval(stack2.join(strArr[i])).toString())
      stack2=[];
    }  
  }
  return eval(+stack1)
}

// Alternate Reverse Polish without using string eval

function ReversePolishNotation(str) {
    var arr = str.split(' ').map(function(val) {return parseInt(val) ? parseInt(val) : val});
    var len = arr.length;
    var operations = {
        '+': function(a, b) {return a + b},
        '-': function(a, b) {return a - b},
        '*': function(a, b) {return a * b},
        '/': function(a, b) {return a / b}
    }

    while (arr.length > 1) {
        var opLoc = arr.findIndex(function(val) {return '+-*/'.includes(val)})
        arr.splice(opLoc - 2, 3, operations[arr[opLoc]](arr[opLoc - 2], arr[opLoc - 1]));
    }
    return arr[0];
}

// Merge two sorted linked lists in order

function Node(data, next) {
  this.data = data;
  this.next = next;
} 

function merge(L1, L2) {
  
  // create new linked list pointer
  var L3 = new Node(null, null);
  var prev = L3;
  
  // while both linked lists are not empty
  while (L1 !== null && L2 !== null) {
    if (L1.data <= L2.data) { 
      prev.next = L1;
      L1 = L1.next;
    } else {
      prev.next = L2;
      L2 = L2.next;
    }
    prev = prev.next;
  }
  
  // once we reach end of a linked list, append the other 
  // list because we know it is already sorted
  if (L1 === null) { prev.next = L2; }
  if (L2 === null) { prev.next = L1; }
  
  // return the sorted linked list
  return L3.next;
  
}

// create first linked list: 1 -> 3 -> 10
var n3 = new Node(10, null);
var n2 = new Node(3, n3);
var n1 = new Node(1, n2);
var L1 = n1; 

// create second linked list: 5 -> 6 -> 9
var n6 = new Node(9, null);
var n5 = new Node(6, n6);
var n4 = new Node(5, n5);
var L2 = n4; 

merge(L1, L2); 

// Find lowest common ancestor in binary search tree

function BinarySearchTreeLCA(strArr) { 
    var array = JSON.parse(strArr[0]);
    let num1 = parseInt(strArr[1]);
    let num2 = parseInt(strArr[2]);

    let ind1 = array.findIndex(val => val === num1);
    let ind2 = array.findIndex(val => val === num2);
    let rightEdge = Math.max(ind1, ind2);
    
    let result = array.filter((val,ind) => (val >= Math.min(num1,num2) && val <= Math.max(num1,num2) && ind <= rightEdge))
    
    console.log(ind1,ind2,rightEdge, result)
    
    return result.length === 0 ? ind1 < ind2 ? strArr[1] : strArr[2] : result[0].toString()
         
}

// Check to see if tree is symetric

function SymmetricTree(strArr) { 
    let array = strArr.map(e => e.match(/\d/g) ? parseInt(e) : e);
    array.shift();

    let mirror1=[];
    let mirror2=[];
    let count = 1;
    
    while (array.length > 0) {
        mirror1 = mirror1.concat(array.splice(0,count));
        mirror2 = mirror2.concat(array.splice(0,count).reverse());
        count++;
    }
    
    return mirror1.toString() === mirror2.toString() ? true : false;
}

// Alternate for symetric tree

function SymmetricTree(strArr) {
  let count = 0;
  while (strArr.length) {
    let length = Math.pow(2, count);
    let newArray = strArr.splice(0, length);
    let revArray = Array.from(newArray).reverse();
    if(!sameAs(newArray, revArray)) {
      return false;
    }
    count = newArray.filter(val => val).length;
  }
  return true;
}

function sameAs(arr1, arr2) {
  return arr1.every((val, ind) => val === arr2[ind]);
}

// Lowest common ancestor of binary tree

function BinaryTreeLCA(strArr) {
    //first, convert the string representing the tree into an array of numbers 
    let arrList = strArr[0]
        .replace(/[\[\]]/g, '')
        .split(/,s*/)
        .map(val => val !== ' #' ? parseInt(val) : '#');
    
    //convert the given numbers (strings) into numbers
    let num1 = parseInt(strArr[1], 10);
    let num2 = parseInt(strArr[2], 10);
    
    //get the indexes of the given numbers. This is really what we need
    let ind1 = Math.max(arrList.findIndex(val => val === num1) + 1, arrList.findIndex(val => val === num2) + 1);
    let ind2 = Math.min(arrList.findIndex(val => val === num1) + 1, arrList.findIndex(val => val === num2) + 1);

    //get the two numbers onto the same depth in the tree
    while (Math.trunc(Math.log2(ind1)) !== Math.trunc(Math.log2(ind2))) {
      ind1 = Math.trunc(ind1 / 2);
    }

    //find the common ancestor in the tree
    while (ind1 !== ind2) {
      ind1 = Math.trunc(ind1 / 2);
      ind2 = Math.trunc(ind2 / 2);
    }

    //return the number corresponding to the determined index
    return arrList[ind2 - 1].toString();
}

// Is array Max Heap?

function MaxHeapChecker(arr) {
    var results = [];
    arr.forEach(function(val, ind) {
        var level = findLevelPlace(ind)[0];
        var order = findLevelPlace(ind)[1];
        var compareIndex = findIndex(level + 1, order);
        if(val < arr[compareIndex]) {
            results.push(arr[compareIndex]);
        }
        if (val < arr[compareIndex + 1]) {
            results.push(arr[compareIndex + 1]);
        }
    });
        return results.length === 0 ? 'max' : results.join(',');
}

function findLevelPlace(num) {
    var power = 0;
    while (num >= 0) {
        var hold = num;
        num -= Math.pow(2, power);
        power++;
    }
    return [power - 1, hold];
}

function findIndex(num1, num2) {
    var counter = 0;
    for (var i = 0; i < num1; i++) {
        counter += Math.pow(2, i);
    }
    counter += (2 * num2);
    return counter;
}

// Find Shortest Path

function ShortestPath(strArr) {
    var nodesCount = Number(strArr[0]);
    var nodes = new Map();

    for (var i = 0; i < nodesCount; i++) {
        nodes.set(strArr[i + 1], new Set());
    }

    for (var i = nodesCount + 1; i < strArr.length; i++) {
        var points = strArr[i].split('-');
        nodes.get(points[0]).add(points[1]);
        nodes.get(points[1]).add(points[0]);
    }

    var toFind = strArr[nodesCount];
    var shortestPathLength = Number.MAX_VALUE;
    var shortestPath = null;

    function findTarget(currentSet, nextNode) {
        currentSet.add(nextNode);
        var children = nodes.get(nextNode);
        if (children.has(toFind)) {
            currentSet.add(toFind);
            shortestPath = currentSet;
            shortestPathLength = currentSet.size;
            return;
        } else {
            if (shortestPathLength <= currentSet.size + 1)
                return;
            for (n of children) {
                if (currentSet.has(n))
                    continue;
                findTarget(new Set(currentSet), n)
            }
        }
    }

    findTarget(new Set(), strArr[1]);
    if (!shortestPath)
        return -1;
    var res = "";
    var i = 0;
    for (n of shortestPath) {
        if (i > 0)
            res += '-';
        i++;
        res += n;
    }

    return res;
}

// Find best weighted path graph

function WeightedPath(strArr) {
    var nodesCount = Number(strArr[0]);
    var nodes = new Map();

    for (var i = 0; i < nodesCount; i++) {
        nodes.set(strArr[i + 1], []);
    }

    for (var i = nodesCount + 1; i < strArr.length; i++) {
        var points = strArr[i].split('|');
        nodes.get(points[0]).push([points[1], Number(points[2])]);
        nodes.get(points[1]).push([points[0], Number(points[2])]);
    }

    var toFind = strArr[nodesCount];

    var shortestPath = null;
    var shortestCost = Number.MAX_VALUE;

    function findTarget(currentSet, currentCost, nextNode, cost) {
        currentCost += cost;
        if (shortestCost <= currentCost)
            return;
        currentSet.add(nextNode);
            var children = nodes.get(nextNode);
        if (toFind === nextNode) {
            shortestPath = currentSet;
            shortestCost = currentCost;
            return;
        } else {
            for (n of children) {
                if (currentSet.has(n[0]))
                    continue;
                findTarget(new Set(currentSet), currentCost, n[0], n[1])
            }
        }
    }

    findTarget(new Set(), 0, strArr[1], 0);
    if (!shortestPath)
        return -1;
    var res = "";
    var i = 0;
    for (n of shortestPath) {
        if (i > 0)
            res += '-';
        i++;
        res += n;
    }


    return res;

}
WeightedPath(["4","A","B","C","D", "A|B|2", "C|B|11", "C|D|3", "B|D|2"])

// lowest weight path without maps

function makeRoute(from, to, weight) {
  return {
    from: from,
    to: to,
    weight: weight
  };
}

function WeightedPath(strArr) { 
  var places = {};
  var nPlaces = strArr[0]*1;
  for (var i = 1; i <= nPlaces; i++) {
    places[strArr[i]] = {
      name: strArr[i],
      path: '',
      weight: 0,
      routes: {}
    };
  }
  for (i = nPlaces + 1; i < strArr.length; i++) {
    var route = strArr[i].split('|');
    var placeA = places[route[0]], 
        placeB = places[route[1]], 
        weight = route[2]*1;
    placeA.routes[route[1]] = makeRoute(placeA, placeB, weight);
    placeB.routes[route[0]] = makeRoute(placeB, placeA, weight);
  }
  var start = places[strArr[1]];
  var finish = places[strArr[nPlaces]];
  start.path = start.name;
  var pending = [makeRoute(start, start, 0)];
  while (pending.length > 0) {
    var route = pending.shift();
    var here = route.to;
    here.weight = route.weight + route.from.weight;
    if (here.path === '') {
      here.path = route.from.path + '-' + here.name;
    }
    if (here === finish) {
      return finish.path;
    }
    for(var route in here.routes) {
      if (here.routes[route].to.path === '') {
        pending.push(here.routes[route]);
      }
    }
    pending.sort(function (a,b) {
      return (a.from.weight + a.weight) - (b.from.weight + b.weight);
    });
  }
  return -1;
}

// Max zeros in a row 2D matrix

function BitmapHoles(strArr) { 
    let maxCount=0;
    let count = 0;
    var pos = {};
    for(var y=0; y < strArr.length;y++){
        for(var x=0; x < strArr[y].length;x++){
            if(strArr[y][x] === '0'){
                count++;
                pos={x:x, y:y}
                console.log(pos)
                checkRight(pos)
                checkUp(pos)
                pos={};
                console.log(maxCount)
            }
        }
    }
    
    function checkRight (p) {
        console.log('testright')
        if(strArr[p.y][p.x+1] === '0'){
            count++;
            pos={x:p.x+1, y:p.y}
            checkRight(pos);
        } else {
            maxCount = count > maxCount ? count : maxCount;
            count=1;
        }
    }

    function checkUp (p) {
        console.log('testup')
        if(p.y<strArr.length-1){
            if(strArr[p.y+1][p.x] === '0'){
                count++;
                pos={x:p.x, y:p.y+1}
                checkUp(pos);
            } else {
                maxCount = count > maxCount ? count : maxCount;
                count=0;
            }
        } else{
            count=0;
        }
    }    
  console.log(maxCount, 'max')  
  return maxCount; 
         
}

// Switch sort 

//Just for fun, I added this method to the Array prototype.
if (!Array.prototype.equalArr) {
    Array.prototype.equalArr = function(arr) {
        var res = true;
        if (this.length !== arr.length) return false;

        this.forEach((val, ind) => {
            if (val !== arr[ind]) res = false;
        });
        return res;
    }
}

function SwitchSort(arr) {
    var sortArr = arr.slice().sort((a, b) => a - b);
    var running = true;
    if (sortArr.equalArr(arr)) return 0;
    var counter = 0;
    var arrCopy = arr.slice()
    var arrayGroup = [arr.slice()]

    while(running < 10) {
        counter++;
        var newArrayGroup = [];
        arrayGroup.forEach(function(val) {
            newArrayGroup.push(...arrayExpand(val));
        });
        var slimArrGroup = arrUnique(newArrayGroup);
        if (slimArrGroup.some( val => {return val.equalArr(sortArr)})) return counter;

        arrayGroup = slimArrGroup;

        //not really necessary, but just to prevent an open while loop while working
        running++;
    }
}

//-------helpers-----------

//This method returns a correct modulo value for negative numbers
function truMod(piece, length) {
    if (piece >= 0) {
        return piece % length;
    } else {
        return (piece % length) + length;
    }
}

//This takes an array and expands it backwards to give all possibilities
function arrayExpand(arr) {
    var len = arr.length
    var holdArr = [];
    arr.forEach(function(val, ind) {
        if (val === len) {

        } else {
            //shift1 and shift2 are the indices of the switch
            var shift1 = truMod(ind + val, len);
            var shift2 = truMod(ind - val, len);
            var arr1 = arraySwitch(arr, shift1, ind);
            var arr2 = arraySwitch(arr, shift2, ind);
            holdArr.push(arr1);
            holdArr.push(arr2);
        }
    })
    return (holdArr);
}

//This method performs the actual composition of the new array
function arraySwitch(arr, pos1, pos2) {
    var newArr = arr.slice();
    var val1 = arr[pos1];
    var val2 = arr[pos2];
    newArr.splice(pos1, 1, val2);
    newArr.splice(pos2, 1, val1);
    return newArr;
}

function arrUnique (arr) {
    var len = arr.length;
    var holder = [];
    for (var i = 0; i < len; i++) {
        var res = holder.some(val => val.equalArr(arr[i]));
        if (!res) {
            holder.push(arr[i]);
        }
    }
    return holder;
}

// Can a binary tree be built?

function TreeConstructor(strArr) {
    //remove spaces from input (one of the tests had bad input)
    strArr = strArr.map(val => val.replace(/s/g, ''));

    let regExChildPattern = /((d+),d+)/
    let regExParentPattern = /(d+,(d+))/

    let children = strArr.map(val => regExChildPattern.exec(val)[1]);
    let parents = strArr.map(val => regExParentPattern.exec(val)[1]);

    //check to make sure all children are unique
    let childSet = new Set(children);
    if (children.length !== childSet.size) {
        return false;
    }

    //test whether any parent node has more than 2 children
    let parentObj = {};
    parents.forEach(val => {
        if (!parentObj[val]) {
            parentObj[val] = 1;
        } else {
            parentObj[val]++;
        }
    })
    for (let myKey in parentObj) {
        if (parentObj[myKey] > 2) return false;
    }

    //make certain there is one, and only one, top dog
    let uniqParents = Array.from(new Set(parents))

    let topDogs = uniqParents.filter(val => !children.includes(val));
    if (topDogs.length !== 1) return false;

    return true;

}

// Form Hamilton path?

function HamiltonianPath(strArr) {

    var connectionArray = strArr[1].slice(1, -1).split(",");

    connectionArray = connectionArray.map(function(val) {
        val = val.trim();
        holder = val.split('').reverse().join('');
        return [val, holder];
    });

    connectionArray = connectionArray.reduce(function(init, fin) {
        return init.concat(fin)
    });

    var pathArray = strArr[2].slice(1, -1).split(',');
    pathArray = pathArray.map(function(val){
        return val.trim();
    })

    var holder = pathArray[0];
    for (var i = 0, len = pathArray.length; i < len - 1; i++) {
        var nextStep = pathArray[i] + '-' + pathArray[i + 1];
        if (connectionArray.indexOf(nextStep) != -1) {
            holder = pathArray[i + 1];
            if (holder === pathArray[len - 1]){
                return 'yes';
            }
        }
        else {
            return holder;
        }
    }
}

// Zero-index array

function solution(A) {
    if (A.length === 0){
            return -1
    }
    
    var high = A.slice(1).reduce(function(a,b){
            return a+b
            });
    var low = 0;
    var count = 0;    
    var i =0;

    if(high === low){
        return i;
    } 
    for(var i =0;i < A.length-1;i++){ 
        low+=A[i]
        high-=A[i+1]
        console.log(low,high)
        if(high===low){
            return i+1
        }
    }
    return -1
}

// Squares between numbers

function solution(a,b) {
    return Math.ceil(Math.sqrt(Math.abs(b))) - Math.floor(Math.sqrt(Math.abs(a)))
}

function solution(S) {
    var arr = S.split(/[?\.!]/)
    arr = arr.map(function(e){
        return e.trim()
    })
    console.log(arr)
    var count = 0;
    var tempCount=0;
    console.log(arr)
    for(var i=0;i<arr.length;i++){
        var newArr = arr[i].split(' ');
        console.log(arr)
        for(var j=0;j<newArr.length;j++){
            if(newArr[j].match(/[a-zA-Z]/)){
               tempCount++                  
            }
        }
        if(tempCount > count){
            count = tempCount; 
            tempCount=0;
        } else {
            tempCount = 0;
        }
    }
    return count;
}

// Word count in multiple sentances

function solution(S) {
    var arr = S.split(/[?\.!]/);
    arr = arr.map(function(e){
        return e.trim()
    });
    var count = 0;
    var tempCount=0;
    console.log(arr)
    
    for(var i=0;i<arr.length;i++){
       var temp = arr[i].replace(/[ ]{2,}/gi," ")  
        tempCount = temp.split(' ').length;
        if(tempCount > count){
            count = tempCount  
         }
    }
    return count;
}

// word count sentance max faster code

function solution(S) {
    var tempCount=0;
    var count=0;
    var flag = true;
    for(var i =0; i<S.length;i++){
        if(S[i].match(/\w/)){
           if(flag === true){
              tempCount++
              flag = false;
           }
        }
        if(S[i].match(/\s/)){
           flag= true;
        }
        if(S[i].match(/[\.!\?]/)){
            count = tempCount>count ? tempCount:count;
            tempCount=0;
            flag = true;
        }
    }
    return count;
}

// Snail array

snail = function(array) {
  var arr = [];
  
  while (array.length > 0) {
    arr.push(...array[0])
    array.splice(0,1)
    for(var i=0; i<array.length;i++){
        arr.push(array[i][array[i].length-1])
        array[i].splice(array[i].length-1,1)
    }
    for(var i=array.length-1;i>=0;i--){
      arr.push(array[array.length-1][i])
      array[array.length-1].splice(i,1)
    }
    
    array.splice(array.length-1,1)
    
    for(var i=array.length-1;i>0;i--){
      arr.push(array[i][0])
      array[i].splice(0,1)
    }
    console.log(arr)
    console.log(array)
  }
  return arr
}

// check for closures

function validBraces(braces){
  var stack = [];
  for(var i=0;i<braces.length;i++){
    if(stack.length === 0 && (braces[i]===')' || braces[i]===']' || braces[i]==='}')){
      return false
    }
    if(braces[i]==='(' || braces[i]==='{' || braces[i]==='['){
      stack.unshift(braces[i])
    }
    else if(braces[i] === ')' && braces.charCodeAt(i) === stack[0].charCodeAt(0)+1){
      stack.shift()
    }
    else if(braces[i] !== ')' && braces.charCodeAt(i) === stack[0].charCodeAt(0)+2){
      stack.shift()
    }    
    else return false
  }
  return stack.length === 0 ? true : false
}

// bracket closure check version 2

function validBraces(braces){
  var matches = { '(':')', '{':'}', '[':']' };
  var stack = [];
  var currentChar;

  for (var i=0; i<braces.length; i++) {
    currentChar = braces[i];

    if (matches[currentChar]) { // opening braces
      stack.push(currentChar);
    } else { // closing braces
      if (currentChar !== matches[stack.pop()]) {
        return false;
      }
    }
  }

  return stack.length === 0; // any unclosed braces left?
}

// Snail alternate with reverse twist

function snail(array) {  
  var results = [];
  
  while(array.length > 0) {
    results = results.concat(array.shift());
    
    array.forEach(function (current) {
      results.push(current.pop());
    });
    
    array.forEach(function (current) {
      current.reverse();
    });
    
    array.reverse();
  }
  
  return results;
}

// Pig Latin translator

function pigIt(str){
  var arr = str.split(' ')
  arr = arr.map(e=>{
    e = e.split('')
    e.push(e.shift())
    e = e.join('')
    e = e + `ay`
    return e
  })
  return arr.join(' ')
}

// Pig Latin Alternate

function pigIt(str){
  return str.split(' ').map(function(el){
    return el.slice(1) + el.slice(0,1) + 'ay';
  }).join(' ');
}

// Roman Numeral Encoder

function solution(number){
  let lookup = {M:1000,CM:900,D:500,CD:400,C:100,XC:90,L:50,XL:40,X:10,IX:9,V:5,IV:4,I:1},roman = '';
  for ( i in lookup ) {
    while ( number >= lookup[i] ) {
      roman += i;
      number -= lookup[i];
    }
  }
  return roman;
}

// Roman Numeral Decoder

function solution(roman){
  let lookup = {CM:900,M:1000,CD:400,D:500,XC:90,C:100,XL:40,L:50,IX:9,X:10,IV:4,V:5,I:1}
  let number = 0;
  for(i in lookup){
    while(roman.includes(i)){
      number += lookup[i]
      roman = roman.replace(i,'')
    }
  }
  return number;
}

function solution(roman)
{
  var data = {M: 1000, D: 500, C: 100, L: 50, X: 10, V: 5, I: 1};
  var numbers = roman.split('');
  var sum = 0, i;

  for(i = 0; i < numbers.length; i++){
    if(data[numbers[i]] < data[numbers[i+1]]){
      sum += data[numbers[i+1]] - data[numbers[i]];
      i++;
    }
    else {
      sum += data[numbers[i]];
    }
  }
  return sum;
}

// Find length of loop in linked list

function loop_size(node){
  var p1=node, p2=node;
  var loopSize = 1;
  var loop = false;

  while (p2.next.next) {
    p1 = p1.next;
    p2 = p2.next.next;

    if (p1 === p2) {
      loop=true;
      break;
    }
  }
    
  if(loop=true){
    p2 = p2.next;
    while (p1 !== p2) {
      loopSize++;
      p2 = p2.next;
    }
  }
  
  return loopSize;
};

// Linked List Example

class LinkedList {

  constructor() {
    this.head = null;
  }

  insertNodeAtTail(val) {
    var node = {
      data: val,
      next: null
    };

    if (!this.head) {
      this.head = node;
    } else {
      var p1 = this.head;
      while (p1.next) {
        p1 = p1.next;
      }
      p1.next = node;
    }
  }

  deleteNode(val) {
    // If linked list is empty
    if (!this.head) {
      console.log('Linked list is empty.');
      return;
    }
    // if you have to delete the head
    if (this.head.data === val) {
      this.head = this.head.next;
    } else {
      var p1 = this.head;
      var p2 = p1.next;
      while (p2) {
        if (p2.data === val) {
          p1.next = p2.next;
          break;
        } else {
          p1 = p2;
        }
        p2 = p2.next;
      }
    }
  }
}
// Create an instance of a LinkedList class
var L1 = new LinkedList();

// Create a linked list with six elements
L1.insertNodeAtTail(5);
L1.insertNodeAtTail(6);
L1.insertNodeAtTail(7);
L1.insertNodeAtTail(8);
L1.insertNodeAtTail(9);
L1.insertNodeAtTail(10);
console.log(L1);

// Delete a head and a tail node
L1.deleteNode(5);
L1.deleteNode(10);
console.log(L1);

// Delete  an intermediate node
L1.deleteNode(7);
console.log(L1);


// Find duplicates in an Array

function findDuplicates(data) {

  let result = [];

  data.forEach(function(element, index) {
    
    // Find if there is a duplicate or not
    if (data.indexOf(element, index + 1) > -1) {
      
      // Find if the element is already in the result array or not
      if (result.indexOf(element) === -1) {
        result.push(element);
      }
    }
  });

  return result;
}


// Is num Prime, faster code

function isPrime(n){
  var divisor = 3, 
      limit = Math.sqrt(n);
  
  //check simple cases
  if (n == 2 || n == 3)
     return true;
  if (n % 2 == 0)
     return false;

  while (divisor <= limit)
  {
    if (n % divisor == 0)
      return false;
    else
      divisor += 2;
  }
  return true;
}


// Find Prime factors

function primeFactors(n){
  var factors = [], 
      divisor = 3;
  
  while(n>2){
    if(n % divisor == 0){
       factors.push(divisor); 
       n= n/ divisor;
    }
    else{
      divisor =+2;
    }     
  }
  return factors;
}

// Prime factors of number


let input = 100

function primeFactors(input){
  let primes = []
  for(let i=1;i<input/2;i++){
    let count = 0
    for(let j=2;j<i;j++){
      if(i%j === 0){
        count++
      }
    }
    if(count === 0){
      primes.push(i);
    }
  }
  
  let factors = [];
  for(let i=2;i<=input;i++){
    if(input % i === 0 && primes.includes(i)){
      factors.push(i)
    }
  }
  return factors
}

console.log(primeFactors(input))


// Find nth fibonacci number

function fibonacci(n){
  var fibo = [0, 1];
  
  if (n <= 2) return 1;

  for (var i = 2; i <=n; i++ ){
   fibo[i] = fibo[i-1]+fibo[i-2];
  }

 return fibo[n];
} 


// Nth Fibonacci number recursive

function fibonacci(n){
  if(n<=1)
    return n;
  else
    return fibonacci(n-1) + fibonacci (n-2);  
}


// Paranthesis closure checker

function validParentheses(parens){
  var count = 0;
  console.log(parens)
  for(var i=0;i<parens.length;i++){
    if(parens[i] == ')' && count ==0){
      return false
    }  
    if(parens[i] === ')'){
      count++
    }
    if(parens[i] === '('){
      count--
    }
  }
  return count == 0 ? true : false
}


// BUILD BINARY SEARCH TREE

function BinarySearchTree() {
    this._root = null;
}

BinarySearchTree.prototype = {

    //restore constructor
    constructor: BinarySearchTree,

    add: function(value){
        //create a new item object, place data in
        var node = {
                value: value,
                left: null,
                right: null
            },

            //used to traverse the structure
            current;

        //special case: no items in the tree yet
        if (this._root === null){
            this._root = node;
        } else {
            current = this._root;

            while(true){

                //if the new value is less than this node's value, go left
                if (value < current.value){

                    //if there's no left, then the new node belongs there
                    if (current.left === null){
                        current.left = node;
                        break;
                    } else {
                        current = current.left;
                    }

                //if the new value is greater than this node's value, go right
                } else if (value > current.value){

                    //if there's no right, then the new node belongs there
                    if (current.right === null){
                        current.right = node;
                        break;
                    } else {
                        current = current.right;
                    }       

                //if the new value is equal to the current one, just ignore
                } else {
                    break;
                }
            }
        }
    },

    contains: function(value){
        var found       = false,
            current     = this._root

        //make sure there's a node to search
        while(!found && current){

            //if the value is less than the current node's, go left
            if (value < current.value){
                current = current.left;

            //if the value is greater than the current node's, go right
            } else if (value > current.value){
                current = current.right;

            //values are equal, found it!
            } else {
                found = true;
            }
        }

        //only proceed if the node was found
        return found;
    },

    remove: function(value){
    },

    size: function(){
    },

    toArray: function(){
    },

    toString: function(){
    }

};


// Binary Search Tree Setup and functions

/* Binary Search Tree */

class Node {
  constructor(data, left = null, right = null) {
    this.data = data;
    this.left = left;
    this.right = right;
  }
}

class BST {
  constructor() {
    this.root = null;
  }
  add(data) {
    const node = this.root;
    if (node === null) {
      this.root = new Node(data);
      return;
    } else {
      const searchTree = function(node) {
        if (data < node.data) {
          if (node.left === null) {
            node.left = new Node(data);
            return;
          } else if (node.left !== null) {
            return searchTree(node.left);
          }
        } else if (data > node.data) {
          if (node.right === null) {
            node.right = new Node(data);
            return;
          } else if (node.right !== null) {
            return searchTree(node.right);
          }
        } else {
          return null;
        }
      };
      return searchTree(node);
    }
  }
  findMin() {
    let current = this.root;
    while (current.left !== null) {
      current = current.left; 
    }
    return current.data;
  }
  findMax() {
    let current = this.root;
    while (current.right !== null) {
      current = current.right;
    }
    return current.data;
  }
  find(data) {
    let current = this.root;
    while (current.data !== data) {
      if (data < current.data) {
        current = current.left;
      } else {
        current = current.right;
      }
      if (current === null) {
        return null;
      }
    }
    return current;
  }
  isPresent(data) {
    let current = this.root;
    while (current) {
      if (data === current.data) {
        return true;
      }
      if (data < current.data) {
        current = current.left;
      } else {
        current = current.right;
      }
    }
    return false;
  }
  remove(data) {
    const removeNode = function(node, data) {
      if (node == null) {
        return null;
      }
      if (data == node.data) {
        // node has no children 
        if (node.left == null && node.right == null) {
          return null;
        }
        // node has no left child 
        if (node.left == null) {
          return node.right;
        }
        // node has no right child 
        if (node.right == null) {
          return node.left;
        }
        // node has two children 
        var tempNode = node.right;
        while (tempNode.left !== null) {
          tempNode = tempNode.left;
        }
        node.data = tempNode.data;
        node.right = removeNode(node.right, tempNode.data);
        return node;
      } else if (data < node.data) {
        node.left = removeNode(node.left, data);
        return node;
      } else {
        node.right = removeNode(node.right, data);
        return node;
      }
    }
    this.root = removeNode(this.root, data);
  }
  isBalanced() {
    return (this.findMinHeight() >= this.findMaxHeight() - 1)
  }
  findMinHeight(node = this.root) {
      if (node == null) {
          return -1;
      };
      let left = this.findMinHeight(node.left);
      let right = this.findMinHeight(node.right);
      if (left < right) {
          return left + 1;
      } else {
          return right + 1;
      };
  }
  findMaxHeight(node = this.root) {
      if (node == null) {
          return -1;
      };
      let left = this.findMaxHeight(node.left);
      let right = this.findMaxHeight(node.right);
      if (left > right) {
          return left + 1;
      } else {
          return right + 1;
      };
  }
  inOrder() {
    if (this.root == null) {
      return null;
    } else {
      var result = new Array();
      function traverseInOrder(node) {       
        node.left && traverseInOrder(node.left);
        result.push(node.data);
        node.right && traverseInOrder(node.right);
      }
      traverseInOrder(this.root);
      return result;
    };
  }
  preOrder() {
    if (this.root == null) {
      return null;
    } else {
      var result = new Array();
      function traversePreOrder(node) {
        result.push(node.data);
        node.left && traversePreOrder(node.left);
        node.right && traversePreOrder(node.right);
      };
      traversePreOrder(this.root);
      return result;
    };
  }
  postOrder() {
    if (this.root == null) {
      return null;
    } else {
      var result = new Array();
      function traversePostOrder(node) {
        node.left && traversePostOrder(node.left);
        node.right && traversePostOrder(node.right);
        result.push(node.data);
      };
      traversePostOrder(this.root);
      return result;
    }
  }
  
  levelOrder() {
      let result = [];
      let Q = []; 
      if (this.root != null) {
          Q.push(this.root);
          while(Q.length > 0) {
              let node = Q.shift();
              result.push(node.data);
              if (node.left != null) {
                  Q.push(node.left);
              };
              if (node.right != null) {
                  Q.push(node.right);
              };
          };
          return result;
      } else {
          return null;
      };
  };
}



const bst = new BST();

bst.add(9);
bst.add(4);
bst.add(17);
bst.add(3);
bst.add(6);
bst.add(22);
bst.add(5);
bst.add(7);
bst.add(20);

console.log(bst.findMinHeight());
console.log(bst.findMaxHeight());
console.log(bst.isBalanced());
bst.add(10);
console.log(bst.findMinHeight());
console.log(bst.findMaxHeight());
console.log(bst.isBalanced());
console.log('inOrder: ' + bst.inOrder());
console.log('preOrder: ' + bst.preOrder());
console.log('postOrder: ' + bst.postOrder());

console.log('levelOrder: ' + bst.levelOrder());


// string adder in progress

function sumStrings(a,b) { 
  var arr1 = [...arguments]
  arr1.forEach((sum)=>{
    if (Math.abs(sum) < 1.0) {
      var e = parseInt(sum.toString().split('e-')[1]);
      if (e) {
          sum *= Math.pow(10,e-1);
          sum = '0.' + (new Array(e)).join('0') + sum.toString().substring(2);
      }
    } else {
      var e = parseInt(sum.toString().split('+')[1]);
      if (e > 20) {
          e -= 20;
          sum /= Math.pow(10,e);
          sum += (new Array(e+1)).join('0');
      }
    }
    })
    console.log(arr1)
  console.log((Number(arr1[0]) + Number(arr1[1])).toString())
  return (Number(arr1[0]) + Number(arr1[1])).toString();
}

// Arrange string, seating arrangement to not have two characters in a row

function arrangeSeating( string ){
  var h = {}, res = '', ch = '';
  string.split('').forEach(ch => {
  return h[ch] = (h[ch]||0) + 1});
  console.log(h)
  var abc = Object.keys(h);
  
  // take next from largest group with different language
  while (res.length < string.length){
//   console.log(abc)
    abc = abc.filter(x => h[x]).sort((x, y) => h[y] - h[x]);
    console.log(abc)
    ch = abc[0] == ch ? abc[1] : abc[0];
    if (!ch) return false;
    res += ch;
    h[ch] -= 1;
  }
  return res;
}


// Check if binary search tree

function isBinarySearchTree(treeRoot, lowerBound, upperBound) {

    lowerBound = (typeof lowerBound !== 'undefined') ? lowerBound : -Infinity;
    upperBound = (typeof upperBound !== 'undefined') ? upperBound :  Infinity;

    if (!treeRoot) return true;

    if (treeRoot.value >= upperBound || treeRoot.value <= lowerBound) {
        return false;
    }

    return isBinarySearchTree(treeRoot.left, lowerBound, treeRoot.value) &&
           isBinarySearchTree(treeRoot.right, treeRoot.value, upperBound);

}

// find the products in array for all of array besides index

function myFunction(arr) {
  var result=[];
    for(let i=0;i<arr.length;i++){
        let temp = arr.filter(e=>e!=arr[i]).reduce((a,b)=>a*b)
        result.push(temp)
    }
    return result
}

// Product in array besides index with O(n)

function myFunction(arr) {
  var productArr = [];
    var product = 1;
    for(let i=0;i<arr.length;i++){
      productArr[i] = product;
      product *=arr[i];
    }
    product=1
    for(let i=arr.length-1;i>=0;i--){
      productArr[i] *= product;
      product *=arr[i];
    }
    return productArr;
}

console.log(myFunction([1, 7, 3, 4]));


// Profit calculator for apple stock

function myFunction(arg) {
  let maxProfit = arg[1]-arg[0];
    let minPrice=arg[0];
    for(let i=2;i<arg.length;i++){
        let currentProfit = arg[i] - minPrice
        maxProfit = Math.max(maxProfit,currentProfit)
    minPrice = Math.min(minPrice,arg[i]);
    }
    return maxProfit
}


// Highest product of 3 in array

function myFunction(arg) {
    
    var product3 = arg[0]*arg[1]*arg[2];
    var product2high = arg[0]*arg[1];
    var product2low = arg[0]*arg[1];
    var highest = Math.max(arg[0],arg[1]);
    var lowest = Math.min(arg[0],arg[1]);
    
    for(let i=2;i<arg.length;i++){
        highest = Math.max(highest,arg[i]);
        lowest = Math.min(lowest,arg[i]);
        product3 = Math.max(product3,product2high*arg[i],product2low*arg[i])
        product2high = Math.max(product2high,highest*arg[i]);
        product2low = Math.min(product2low,lowest*arg[i]);
    }
    return product3
}

// Bubble sort

function bubble(arr){
    let done = false;
    while(!done){
        done = true;
        for(let i=0;i<arr.length-1;i++){
            if(arr[i] > arr[i+1]){
               let temp = arr[i];
                arr[i] = arr[i+1]
                arr[i+1] = temp
               done = false;
            }
        }
    }
    return arr
    
}

console.log(bubble([5,6,7,4,8,3,5,6,7,10,4]))


//Merged Meetings

function myFunction(meetings) {
  var meetingsCopy = JSON.parse(JSON.stringify(meetings));
  var sortedMeeting = meetingsCopy.slice().sort((a,b)=>{
      return a.startTime > b.startTime ? 1:-1
  })
  
  var mergedMeetings = [sortedMeeting[0]];
    
  for(let i =1;i<sortedMeeting.length;i++){
    var currentMeeting = sortedMeeting[i];
    var lastMergedMeeting = mergedMeetings[mergedMeetings.length-1];
    
      if(currentMeeting.startTime <=lastMergedMeeting.endTime){
        lastMergedMeeting.endTime = Math.max(currentMeeting.endTime, lastMergedMeeting.endTime)   
      } else {
        mergedMeetings.push(currentMeeting)
      }
  }
  return mergedMeetings
}

console.log(myFunction(  [
    {startTime: 0,  endTime: 1},
    {startTime: 3,  endTime: 5},
    {startTime: 4,  endTime: 8},
    {startTime: 10, endTime: 12},
    {startTime: 9,  endTime: 10},
]));



// Recursion to find number of ways to make change

class Change {
  constructor(){
      this.memo = {};
    }
    
    myFunction(amountLeft, denominations, currentIndex) {
        currentIndex = typeof currentIndex == 'undefined' ? 0 : currentIndex;
        
        var memoKey = [amountLeft,currentIndex].join(', ');
        if(this.memo.hasOwnProperty(memoKey)){
           console.log(`grabing memo [${memoKey}]`);
           return this.memo[memoKey]
        }
        
        if(amountLeft === 0) return 1
        if(amountLeft < 0) return 0
        if(currentIndex === denominations.length) return 0
        console.log(`checking was to make ${amountLeft} with [${denominations.slice(currentIndex).join(', ')}]`)   
        var currentCoin = denominations[currentIndex]
        var numPossibilities =0;

        while (amountLeft >= 0){
            numPossibilities +=this.myFunction(amountLeft, denominations, currentIndex +1)
            amountLeft -= currentCoin;
        }
        
        this.memo[memoKey] = numPossibilities;
        return numPossibilities
    }
    
}

// run your function through some test cases here
// remember: debugging is half the battle!
console.log(new Change().myFunction(4, [1,2,3]));

// Remove from array every k positions

function josephusSurvivor(n,k){
  let index = 0;
  let arr = [];
  for(var i=1;i<n+1;i++)arr.push(i);
  while (arr.length > 1) {
      index = (index-1 + k) % arr.length
      arr.splice(index,1)
  }
  return arr[0]
}


// Class for temp tracker, just in time approach

class TempTracker {
    constructor(){
      this.temps = [];
    }

    insert(arg) {
    this.temps.push(arg)
  }
    
    getMax(){
      return this.temps.reduce((a,b)=>{
          if(b>a) return b
            else return a
        })
    }
 
    getMin(){
      return this.temps.reduce((a,b)=>{
          if(b<a) return b
            else return a
        })
    }
    
    getMean(){
      return this.temps.reduce((a,b)=>{
            return a + b
        }) / this.temps.length
    }
    
    getMode(){
        let dups = {};
      for(var i=0;i<this.temps.length;i++){
          if(!dups[this.temps[i]]){
              dups[this.temps[i]] = 1
                console.log(dups)
            } else return this.temps[i];
        }
        return 'no mode'
    }    
}

var arr = new TempTracker()
arr.insert(3)
arr.insert(6)
arr.insert(2)
arr.insert(2)
console.log(arr.getMode());

// Ahead of time approach to temp class

class TempTracker {
    constructor(){
    this.totalNumber = 0;
        this.sum = 0;
        this.mean = null;
        this.mode = null;
        this.highest=null;
        this.lowest=null;
        this.maxOcc=0;
        this.occurrences = [];
        for (var i = 0; i < 111; i++) {
            this.occurrences[i] = 0;
        }
    }

    insert(arg) {
        this.totalNumber++;
        this.sum += arg;
        this.mean = this.sum / this.totalNumber;
        this.highest = this.lowest === null ? this.lowest = arg : arg > this.highest ? arg : this.highest;
        this.lowest = this.highest === null ? this.highest = arg : arg < this.lowest ? arg : this.lowest;
        this.occurrences[arg]++;
        if(this.occurrences[arg] > this.maxOcc){
           this.maxOcc = this.occurrences[arg]
           this.mode = arg 
        }
  }
    
    getMax(){
      return this.highest
    }
 
    getMin(){
      return this.lowest
    }
    
    getMean(){
      return this.mean;
    }
    
    getMode(){
      return this.mode;
    }    
}

var arr = new TempTracker()
arr.insert(3)
arr.insert(6)
arr.insert(2)
arr.insert(2)
console.log(arr.getMode());


// Check if binary tree is super balanced

  function isBalanced(treeRoot) {

    // a tree with no nodes is superbalanced, since there are no leaves!
    if (!treeRoot) {
        return true;
    }

    var depths = []; // we short-circuit as soon as we find more than 2

    // nodes will store pairs of a node and the node's depth
    var nodes = [];
    nodes.push([treeRoot, 0]);

    while (nodes.length) {

        // pop a node and its depth from the top of our stack
        var nodePair = nodes.pop();
        var node  = nodePair[0],
            depth = nodePair[1];

        // case: we found a leaf
        if (!node.left && !node.right) {

            // we only care if it's a new depth
            if (depths.indexOf(depth) < 0) {
                depths.push(depth);

                // two ways we might now have an unbalanced tree:
                //   1) more than 2 different leaf depths
                //   2) 2 leaf depths that are more than 1 apart
                if ((depths.length > 2) ||
                        (depths.length === 2 && Math.abs(depths[0] - depths[1]) > 1)) {
                    return false;
                }
            }

        // case: this isn't a leaf - keep stepping down
        } else {
            if (node.left) {
                nodes.push([node.left, depth + 1]);
            }
            if (node.right) {
                nodes.push([node.right, depth + 1]);
            }
        }
    }

    return true;
}


// Check binary tree to see if it's binary search

function myFunction(root) {
    var queue = [{node:root,lower: -Infinity, upper: Infinity}];
    
    while(queue.length){
        let nodeObj = queue.pop();
        let node = nodeObj.node;
        
         if(node.value <= nodeObj.lower || node.value > = nodeObj.upper){
                return false;
            }         
        
        if(node.left){
            queue.push({node:node.left, lower: nodeObj.lower, upper: node.value})
        }       
        if(node.right){
            queue.push({node:node.right, lower: node.value ,upper:nodeObj.upper})
        }
  }
}


// Binary Search Tree largest and second largest

function largest(root) {
    var current = root
    while(current.right){
          current = current.right
  }
    return current.value
}

function secondLargest (root){
  var current = root;
    
    while(current){
        if(!current.right && current.left){
            return largest(current.left);
        }
    if(current.right && !current.right.right && !current.right.left){
           return current.value
    }
        current = current.right;
  }
}

// Aloquot sequence sum

function aliquot(base, n){
    var arr = [];
    arr[0]=base;
    var sum = 0;
    for(var i = 0; i<n-1; i++){
        for(var i = 1; i < base; i++){
            if(base%i===0){
                sum +=i;
            }
        }
        arr.push(sum);
        base = sum;
        sum=0;
    }
    return arr;
}


// Find rectangle overlap

function findRangeOverlap(point1, length1, point2, length2) {

    // find the highest start point and lowest end point.
    // the highest ("rightmost" or "upmost") start point is
    // the start point of the overlap.
    // the lowest end point is the end point of the overlap.
    var highestStartPoint = Math.max(point1, point2);
    var lowestEndPoint = Math.min(point1 + length1, point2 + length2);

    // return null overlap if there is no overlap
    if (highestStartPoint >= lowestEndPoint) {
        return {startPoint: null, overlapLength: null};
    }

    // compute the overlap length
    var overlapLength = lowestEndPoint - highestStartPoint;

    return {startPoint: highestStartPoint, overlapLength: overlapLength};
}

function findRectangularOverlap(rect1, rect2) {

    // get the x and y overlap points and lengths
    var xOverlap = findRangeOverlap(rect1.leftX, rect1.width, rect2.leftX, rect2.width);
    var yOverlap = findRangeOverlap(rect1.bottomY, rect1.height, rect2.bottomY, rect2.height);

    // return null rectangle if there is no overlap
    if (!xOverlap.overlapLength || !yOverlap.overlapLength) {
        return {
            leftX: null,
            bottomY: null,
            width: null,
            height: null,
        };
    }

    return {
        leftX: xOverlap.startPoint,
        bottomY: yOverlap.startPoint,
        width: xOverlap.overlapLength,
        height: yOverlap.overlapLength,
    };
}

// Trie for visited web sites

  function Trie() {
    this.rootNode = {};
}

Trie.prototype.checkPresentAndAdd = function(word) {

    var currentNode = this.rootNode;
    var isNewWord = false;

    // Work downwards through the trie, adding nodes
    // as needed, and keeping track of whether we add
    // any nodes.
    for (var i = 0; i < word.length; i++) {
        var char = word[i];

        if (!currentNode.hasOwnProperty(char)) {
            isNewWord = true;
            currentNode[char] = {};
        }

        currentNode = currentNode[char];
    }

    // Explicitly mark the end of a word.
    // Otherwise, we might say a word is
    // present if it is a prefix of a different,
    // longer word that was added earlier.
    if (!currentNode.hasOwnProperty("End of Word")) {
        isNewWord = true;
        currentNode["End of Word"] = {};
    }

    return isNewWord;
}


// Binary search sorted array

function myFunction(target, arr) {
    var ceiling = arr.length;
  var floor = -1;
    
  while(floor + 1 < ceiling){
        var distance = ceiling - floor; 
        var guessIndex = floor + Math.floor(distance/2)
        var guess = arr[guessIndex];
        
        if(target === guess) return true;
        
        if(guess > target){
      ceiling = guessIndex;
        }
        
        else {
          floor = guessIndex;
        }
        console.log(floor,ceiling)
  } 
    return false
}

// run your function through some test cases here
// remember: debugging is half the battle!
console.log(myFunction(26,[5,6,7,4,8,16,17,26,45]));


// Binary seach modified for alphabetical list

function wordCompare(word1, word2) {
    let length = Math.min(word1.length,word2.length);
  for(let i=0;i<length;i++){
        console.log(word1,word2)
      if(word1.charCodeAt(i) > word2.charCodeAt(i)){
          return true;
        } else if(word1.charCodeAt(i) < word2.charCodeAt(i)){
            return false;     
    }     
    }
    return false
}

function rotatePoint(words){
    let floorIndex = 0
    let ceilingIndex = words.length-1;
    let firstWord = words[0]
    
    while(floorIndex < ceilingIndex){
      let distance = ceilingIndex-floorIndex;
        let guessIndex = Math.floor(floorIndex + distance/2)
    let guessWord = words[guessIndex]
        
        if(guessWord >= firstWord){
          floorIndex = guessIndex;
        } 
        if(guessWord <= firstWord){
           ceilingIndex = guessIndex;
        }
        if(floorIndex +1 === ceilingIndex){
            break;
        }
    }
    return ceilingIndex
}


  var words = [
    'ptolemaic',
    'retrograde',
    'supplant',
    'undulate',
    'xenoepist',
    'asymptote',
    'babka',
    'banoffee',
    'engender',
    'karpatka',
    'othellolagkage',
];
// run your function through some test cases here
// remember: debugging is half the battle!
console.log(rotatePoint(words));


// check array sum to number Movie Lengths Cake Interview with O n2

function myFunction(flightLength, movieLengths) {
    for(let i=0;i<movieLengths.length;i++){
      let first = movieLengths[i];
        let tempArr = movieLengths.slice(0);
        tempArr.splice(i,1)
        console.log(first,tempArr)
        for(let j=0;j<tempArr.length;j++){
            console.log(tempArr[j])
          if((flightLength - first) === tempArr[j]){
                return true
            }
        }
    tempArr=movieLengths.slice(0);
    }
}
//two movie lengths = one flight length
// flight length is given
//for first chosen movie, check other movies to see if it matches flightLength - firstMovie length



// run your function through some test cases here
// remember: debugging is half the battle!
console.log(myFunction(100,[40,30,20,80]));


// Check for sum of two numbers in array with set

function myFunction(movieLengths, flightLength) {

    // movie lengths we've seen so far
    var movieLengthsSeen = new Set();
   console.log(movieLengthsSeen)
    for (var i = 0; i < movieLengths.length; i++) {
        var firstMovieLength = movieLengths[i];

        var matchingSecondMovieLength = flightLength - firstMovieLength;
        if (movieLengthsSeen.has(matchingSecondMovieLength)) {
            return true;
        }

        movieLengthsSeen.add(firstMovieLength);
        console.log(movieLengthsSeen)
    }

    // we never found a match, so return false
    return false;
}
console.log(myFunction([40,30,20,80],100));

// Javascript array deep count of indicies

function deepCount(a){
  var count=0;
  for(let i=0;i<a.length;i++){
    count++
    if(typeof(a[i]) === 'object'){
      count += deepCount(a[i]);
    }
  }
  return count;
}

// DiNico key sorted IN PROGRESS

const deNico = (key, m) => { 
  var result = new Array(key.length);
  var sortKey = key.split('').sort().join('')

  for (var i = 0; i < key.length; i++) {
    result[i] = [sortKey[i]];
  }
  var index=0;
  for(let i=0;i<m.length;i++){
    result[index].push(m[i]);
    index++;
    index = index === key.length ? 0 : index;
  }
  console.log(result)
//   result.sort()
  console.log(result)
  result = result.map(e=>{
    e.shift()
    return e
  })
  console.log(result)

}

// Collatz Sequence longest index

function longestCollatz (inputArray) {
  let indexLarge = 0;
  let largest = 0;
  for(let i=0;i<inputArray.length;i++){
    let sequenceLength = 0;
    let temp = inputArray[i];
    while(temp > 1){
      if(temp % 2 === 0){
          temp = temp / 2;
          sequenceLength++;
      }
      else if(temp % 2 === 1){
          temp = 3 * temp + 1
        sequenceLength++;
      }
    }
    if(sequenceLength > largest){
      largest = sequenceLength;
      indexLarge = i;
    }
  }
  return inputArray[indexLarge]
}

// nth Fibonacci number in sequence

function myFunction(arg) {
  let fibonacci = [0,1];
    for(let i=2;i<=arg;i++){
      let value = fibonacci[i-1] + fibonacci[i-2];
        fibonacci.push(value);
    }
    return fibonacci[arg];
}

// run your function through some test cases here
// remember: debugging is half the battle!
console.log(myFunction(5));


// fill up bag with them cakes

  var cakeTypes = [
    {weight: 7, value: 160},
    {weight: 3, value: 90},
    {weight: 2, value: 15},
];

var capacity = 20;

function myFunction(cakeTypes, capacity) {
    let bestValue=null;
    let bestIndex=null;
    let value = 0;
    while(capacity > 0){
        for(let i=0; i<cakeTypes.length;i++){
            if(cakeTypes[i].weight <= capacity){
                console.log(cakeTypes[i].value / cakeTypes[i].weight)
                let tempRatio = cakeTypes[i].value / cakeTypes[i].weight
                if(tempRatio > bestValue){
                   bestValue = tempRatio;
                   bestIndex = i;
                }   
            }        
        }
        if(bestValue === null){
           break;
        }

        console.log(bestValue)
        while(capacity >= cakeTypes[bestIndex].weight){
            value+=cakeTypes[bestIndex].value
            capacity -=cakeTypes[bestIndex].weight 
            console.log(value, capacity)
        }
        bestValue=null;
        bestIndex=null;
  }
    return value
}
console.log(myFunction(cakeTypes, capacity));

// Cakes better



  var cakeTypes = [
    {weight: 7, value: 160},
    {weight: 3, value: 90},
    {weight: 2, value: 15},
];

var capacity = 20;

function myFunction(cakeTypes, capacity) {
    let cakes={}
    let sum = 0;
    let cakesSort = cakeTypes.sort((a,b)=>{
        return (b.value/b.weight) - (a.value/a.weight)
    })
    for(let i=0;i<cakesSort.length;i++){
        let current = cakesSort[i]
        while(capacity >= current.weight){
          if(cakes[current.value]){
             cakes[current.value] ++
            }  else {
                cakes[current.value] = 1
            }
            capacity -=current.weight
        }
    }
    for(let key in cakes){
        sum +=(cakes[key] * key)
    }
    return cakes
}
console.log(myFunction(cakeTypes, capacity));

// HTML interview nav bar

<body>
  <header>
    <div class='nav'>
      <div class='button btn1'>button1</div> 
        <div class='dropDown1'></div>
      <div class='button btn2'>button2</div> 
        <div class='dropDown2'></div>
      <div class='button btn3'>button3</div> 
        <div class='dropDown3'></div>
    </div> 
  </header>
</body>




$(document).ready(function () {
  $('.btn1').hover(function(){
    $('.dropDown1').toggleClass('showHide')
  })
  
  $('.btn2').hover(function(){
    $('.dropDown2').toggleClass('showHide')
  })
  
  $('.btn3').hover(function(){
    $('.dropDown3').toggleClass('showHide')
  })
};

.nav{
  display:flex;
  height:50px;
  width:500px;
}

.button {
  width:100px;
  flex:0 0 auto;
  justify-content:flex-end;
  border:1px solid black;
  padding: 10px;
}

.dropDown1 {
  display:none;
  position:absolute;
  height:100px;
  width:120px;
  border:1px solid black;
  top:58px;
  left:8px;
}

.dropDown2 {
  display:none;
  position:absolute;
  height:100px;
  width:120px;
  border:1px solid black;
  top:58px;
  left:130px;
}

.dropDown3 {
  display:none;
  position:absolute;
  height:100px;
  width:120px;
  border:1px solid black;
  top:58px;
  left:252px;
}

.showHide{
  display:block;
}


// Example nav with dropdown on hover, no javascript

<!DOCTYPE html>
<html>
<head>
<style>
div {background-color: green;}
a {
    text-decoration: none;
    color: white;
    font-size: 20px;
    padding: 15px;
    display:inline-block;
}
.nav {
  display: inline;
  margin: 0;
  padding: 0;
}
.nav2 {display: inline-block;}
.nav2:hover {background: #555;}
.nav2:hover .dropdown {display: block;}
.dropdown {
  position: absolute;
  width: 200px;
  display: none;
}
.dropdownBtn { 
  background: #555; 
  display: block; 
}

</style>
</head>
<body>

<div>
  <a href="#">Useless Link</a>
  <div class='nav'>
    <div class='nav2'>
      <a href="#">Dropdown Link</a>
      <div class='dropdown'>
        <div class='dropdownBtn'><a href="#">Link 1</a></div>
        <div class='dropdownBtn'><a href="#">Link 2</a></div>
        <div class='dropdownBtn'><a href="#">Link 3</a></div>
      </div>
    </div>
  </div>
</div>

</body>
</html>


// Queue   enqueue and dequeue

class queue {
    constructor(){
      this.stack1=[];
        this.stack2=[];
    }
    
    function enqueue(arg) {
    this.stack1.push(arg)
    }

    function dequeue(arg){
        if(this.stack2.length === 0){
          for(let i=0; i < this.stack1.length; i++){
            this.stack2.push(this.stack1.pop())
          }
        }
        return this.stack2.pop()
    }
}


// find smallest integer above zero NOT in array

class queue {
    constructor(){
      this.stack1=[];
        this.stack2=[];
    }
    
    function enqueue(arg) {
    this.stack1.push(arg)
    }

    function dequeue(arg){
        if(this.stack2.length === 0){
          for(let i=0; i < this.stack1.length; i++){
            this.stack2.push(this.stack1.pop())
          }
        }
        return this.stack2.pop()
    }
}


// Find the missing drone

function myFunction(arr) {
  let obj={};
    for(let i=0;i<arr.length;i++){
      if(obj[arr[i]]){
           obj[arr[i]]++
        } else {
          obj[arr[i]] = 1
        }
    }
    for(key in obj){      
      if(obj[key] === 1){
           return key
        }
    }
    return 'all drones returned'
}

// run your function through some test cases here
// remember: debugging is half the battle!
console.log(myFunction([1,1,2,3,4,5,6,7,4,5,6,3,5,4,4,5,6,6]));


// Find missing drone using a map

function findUniqueDeliveryId (arr) {
  let idMap = new Map();
    for(let i=0;i<arr.length;i++){
      if(idMap.has(arr[i])){
           let newC = idMap.get(arr[i]) + 1;
           idMap.set(arr[i],newC) 
        } else {
          idMap.set(arr[i],1)
        }
    }
    for(var [id,count] of idMap){      
      if(count === 1){
           return id
        }
    }
    return 'all drones returned'
}

// run your function through some test cases here
// remember: debugging is half the battle!
console.log(findUniqueDeliveryId ([1,1,2,3,4,5,6,7,4,5,6,3,5,4,4,5,6,6]));


// Find missing drone using XOR

  function findUniqueDeliveryId2(deliveryIds) {

    var uniqueDeliveryId = 0;

    deliveryIds.forEach(function(deliveryId) {
        console.log(uniqueDeliveryId)
        uniqueDeliveryId ^= deliveryId;
    });

    return uniqueDeliveryId;
}

// Delete node in single linked list

function deleteNode(deleteThis) {
  if(deleteThis.next){
      deleteThis.value = deleteThis.next.value;
        deleteThis.next = deleteThis.next.next
    }
    else{
      throw new Error(`Can't delete the last node with this method`)
    }
}

// giphy api generator code 



function search(){

  while (imageList.hasChildNodes()) {
    imageList.removeChild(imageList.lastChild);
  }

  var searchValue = document.getElementById("searchBox").value;
  console.log(searchValue)
  var xhr = $.get(`http://api.giphy.com/v1/gifs/search?q=${searchValue}&api_key=a5c163ee9c29473580e365c6cc226a99&limit=6`);
  xhr.done(function(data) { 
      console.log("success got data", data);  

  for(let i=0; i < 6;i++){
    console.log(data.data[i].images.downsized.url)
    var img = document.createElement('img');    
    var li = document.createElement('li');
    var list = document.getElementById('imageList');
    img.setAttribute('src', data.data[i].images.downsized.url);
    li.appendChild(img);
    list.appendChild(li);
  
  }

  });

}


// Reverse linked list

function linkedReverse(arg) {
  let current = arg;
    let previous = null;
    let next = null;
    
    while(current){
      nextNode = current.next
        current.next = previous;
        
        previous = current;
        current=nextNode;
    }
    return previous
}


// nth node in linked list

function nthNodeLinedList(n, a) {
  let length = 1;
    let current = a;
    while(current.next){
      length ++
        current = current.next;
    }
    current = a;
    for(let i=0;i<length-n;i++){
      current = current.next;
    }
    return current
}


// Reverse and join string in place

function myFunction(arg) {
  return arg.split('').reverse().join('')
}


// Find closing parenthesis by index

function myFunction(string, index) {
    let parStack = [];
    if(string.charAt(index) !== '('){
       return 'not a ('
    }
    for(let i=index+1;i<string.length;i++){
      if(string[i] === '('){
           parStack.push(string.charAt(i))
        }
        if(string[i] === ')' && parStack.length === 0){
           return string.charAt(i)
        }
        if(string[i] === ')' && parStack.length > 0){
          parStack.pop();
        }
    }
    
}

// Parenthesis checker of all types

function myFunction(string) {
  let stack = [];
    for(let i =0; i<string.length;i++){
      if(string[i].match(/[\(\{\[]/)) {
          stack.push(string[i])
        }else
        if(string[i] === ')' && stack[stack.length-1] === '('){
          stack.pop()
        } else
        if(string[i] === '}' && stack[stack.length-1] === '{'){
          stack.pop()
        } else
        if(string[i] === ']' && stack[stack.length-1] === '['){
          stack.pop()
        }        
        else {
      console.log(stack)
      console.log(string[i])
      return false
        }
    }
  return true
}
console.log(myFunction('{[(]()}'));

// Parenthesis checker using a Set

function isValid(code) {

    var openersToClosers = {
        '(': ')',
        '[': ']',
        '{': '}',
    };

    var openers = new Set(['(', '[', '{']);
    var closers = new Set([')', ']', '}']);

    openersStack = [];

    for (var i = 0; i < code.length; i++) {
        var char = code.charAt(i);

        if (openers.has(char)) {
            openersStack.push(char);
        } else if (closers.has(char)) {
            if (!openersStack.length) {
                return false;
            } else {
                lastUnclosedOpener = openersStack.pop();

                // if this closer doesn't correspond to the most recently
                // seen unclosed opener, short-circuit, returning false
                if (openersToClosers[lastUnclosedOpener] !== char) {
                    return false;
                }
            }
        }
    }
    return openersStack.length === 0;
}


// Variations of palendrome using map

function myFunction(string) {
    let thing = new Map();
  for(let i=0;i<string.length;i++){
      if(!thing.has(string[i])){
           thing.set(string[i],1)
        }
        if(thing.has(string[i])){
           let temp = thing.get(string[1]) + 1
           thing.set(string[i],temp)
        }
    }
    for(value of thing.values()){
           let onee  = 0;
           if(value % 2 === 1){
              onee++
           }
            if(onee > 1){
              return false;
            }
    }
    return thing.size >=1
}
console.log(myFunction('civictttv'));

// Pendrome permutations using a set instead of map

function myFunction(string) {
    let thing = new Set()
    
    for(let i=0;i<string.length;i++){
      if(thing.has(string[i])){
           thing.delete(string[i])
        } else{
          thing.add(string[i])
        }
    }
    return thing.size <=1
}
console.log(myFunction('civictftdtdtftv'))


// Levis interview

<body>
  <nav>
    <div class='title'>
      <h1>Your title</h1>
    </div>
  </nav>   
  <section class='content'>
    <div class=articleWrap>
      <article class='articles'>
        <h1>Your article heading</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam ab ipsa nostrum voluptatem placeat inventore odio nam unde adipisci repudiandae est, blanditiis, fugit quidem, ipsam provident consequatur hic cupiditate eum.</p>
      </article>
      <article class='articles'>
        <h2>Your article heading</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam ab ipsa nostrum voluptatem placeat inventore odio nam unde adipisci repudiandae est, blanditiis, fugit quidem, ipsam provident consequatur hic cupiditate eum.</p>
      </article>    
    </div>
    <aside>
      <h2>Something aside</h2>
    </aside>
  </section>
  <footer>
    <h2>A nice footer</h2>
  </footer>
</body>

nav {
  display:flex;
  justify-content:space-between;
  background-color:orange;
  border-bottom:5px solid darkorange;
}

nav h1 {
  margin: 0 0 0 30px;
  color:white;
  font-size: 60px;
}

.content {
  display:flex;
}

article {
  width:100%;
  margin: 0 20px;
  border-bottom: 3px solid grey; 
}

article h1 {
  font-size: 40px;
}

article h2 {
  font-size: 30px;
}

aside {
  margin: 30px 20px 10px;
  width:300px;
  height:400px;
  background-color:orange;
  border: 3px solid grey;
}

footer {
  height:80px;
  background-color:orange;
  color:white
}

// Recursive string permutations

  function getPermutations(string) {

    // base case
    if (string.length <= 1) {
        return new Set(string);
    }

    var allCharsExceptLast = string.slice(0, -1);
    var lastChar = string[string.length - 1];

    // recursive call: get all possible permutations for all chars except last
    var permutationsOfAllCharsExceptLast = getPermutations(allCharsExceptLast);

    // put the last char in all possible positions for each of the above permutations
    var permutations = new Set();
    permutationsOfAllCharsExceptLast.forEach(function(permutationOfAllCharsExceptLast) {
        for (var position = 0; position <= allCharsExceptLast.length; position++) {
            var permutation = permutationOfAllCharsExceptLast.slice(0, position) + lastChar + permutationOfAllCharsExceptLast.slice(position);
            permutations.add(permutation);
        }
    });

    return permutations;
}


// Find All Permutations

var permute = function(nums) {
    let results = []
    let stack = [{curr: [], nums: nums}]
    while(stack.length >= 1){
        let current = stack.pop()
        let len = current.nums.length
        if(len === 0){
           results.push(current.curr)
        }
        for(let i=0;i<len;i++){
            let newNums = current.nums.slice(0,i).concat(current.nums.slice(i+1))
            stack.push({curr: current.curr.concat(current.nums[i]), nums: newNums})
        }
    }
    return results
};

console.log(permute([1,2,3]))


// Find Unique Permutations

var permuteUnique = function(numbers) {
    let results = []
    let nums = numbers.sort((a,b)=>a-b)
    let stack = [{curr: [], nums: nums}]
    while(stack.length >= 1){
        let current = stack.pop()
        if(current.nums.length === 0){
           results.push(current.curr)
        }
        for(let i=0;i<current.nums.length;i++){
            let end = i
            while(end < current.nums.length && current.nums[i] === current.nums[end]) {
                 end++;
            }
            
            let newNums = current.nums.slice(0,i).concat(current.nums.slice(i+1))
            stack.push({curr: current.curr.concat(current.nums[i]), nums: newNums})
            i = end - 1;
        }
        console.log(stack)
    }
    return results
};

console.log(permuteUnique([1,1,3]))


// Sorted Scores in O n time

function myFunction(array, top) {
  let scoreCounts = [];
    for(let i=0;i<=top;i++){
      scoreCounts.push(0)
    }
    
    array.forEach(e=>{
      scoreCounts[e]++
    })
    
    let sortedScores = [];
    
    for(let i = top;i>=0;i--){
      let count = scoreCounts[i]
        
        for(let t=0;t<count;t++){
          sortedScores.push(i)
        }
    }
    console.log(sortedScores)
    return sortedScores
}


// Consecutive numbers in array, find the double

function consecutiveDouble(array) {
  let singles = 1;
    for(let i=2;i<=array.length;i++){
      singles += i;
    }
    let sum = array.reduce((a,b)=>a+b)
    return sum - singles
}

// Ant Bridge

var antBridge = function(ants, terrain) {
  console.log(terrain)
  console.log(ants)
  ants = ants.split('')
  let stack1=[];
//   console.log(stack1)
  for(let i=0;i<terrain.length;i++){
    if(terrain[i] === '-' & terrain[i-1] === '.'){
      stack1.unshift(ants.pop())
      stack1.unshift(ants.pop())
      console.log(stack1, '1', terrain[i])
      ants = [...stack1, ...ants]
      stack1=[]
      console.log(ants, 'ants', terrain[i])
    }  
    else if(terrain[i] === '-' && terrain[i+1] === '.'){
      stack1.unshift(ants.pop())
      console.log(stack1, terrain[i]) 
    }
    if(terrain[i] === '.' && terrain[i+1] === '.'){
      stack1.unshift(ants.pop())
      console.log(stack1, terrain[i])    
    }
  }
  return ants.join('')
}

// ascII problem

function ascii_deletion_distance(str1, str2) {
    let mapp = new Map();
    let sum = null;
    // for(let i=0;i<str1.length; i++){Test example


       if(mapp.has(str1[i])){
         let newC = mapp.get(str1[i]) + 1;
           mapp.set(str1[i],newC) 
        } else {
          mapp.set(str1[i],1)
        }
    }
    for(let j =0;j<str2.length;j++){
       if(mapp.has(str2[j])){
           let newC = mapp.get(str2[j]) + 1;
           mapp.set(str2[j],newC) 
        } else {
          mapp.set(str2[j],1)
        }        
    }  

    for(var [id,count] of mapp){    
      if(count === 1){
           sum += id.charCodeAt(0)
        }
    }    
    return sum
}

console.log(ascii_deletion_distance('cat','at'))


// one line reverse

weirdReverse=a=>a.sort(c=>1)


// Test example

function sum(a,b){
  return a+b
}

function runtestSum(){

  function testA(arg1, arg2, expected){
    let result = sum(arg1,arg2)
    if(result !== expected){
      console.log(`FAIL - Expected ${expected} but got ${result}`)
    } else {
      console.log(`PASS - ${expected} = ${result}` )
    }
  }
  
  testA(1,2,3);
  testA(1,3,4);
  testA(1,9,10);
  testA(1,3,5); 
 
}
  
console.log(sum(2,3))
console.log(runtestSum())

// Camel Case generator

function toCamelCase(str){
  let result = str.length ? str[0] : '';
  for(let i=1;i<str.length;i++){
    if(str[i] === '-' || str[i]==='_'){
      result = result.concat(str[i+1].toUpperCase())
      i++
    }
    else {
      result = result.concat(str[i])
    }    
  }
  return result
}

// Find Prime Factors of each number in array and return the sum of occurances of each factor

function isPrime (num){
  num = Math.abs(num)
  for(let j=2;j<=Math.max(num/2);j++){
    if(num % j ===0 ){
      return false
    }
  }
  return true
}

function findPrimes(num){
  let primes = [];
  for(let j=2;j<=Math.abs(num);j++){
    if(num % j === 0 && isPrime(j)){
      primes.push(j)
    }
  }
  return primes
}

function sumOfDivided(lst) {
  let mapp = new Map();
  let result = [];
  for(let i=0;i<lst.length;i++){
    let primes = findPrimes(lst[i])
    primes.forEach(e=>{
      if(mapp.has(e)){
        let temp = mapp.get(e)
        mapp.set(e,temp+lst[i])
      }
      else{
        mapp.set(e,lst[i])
      }
    })
  }
  for([key,value] of mapp){
    result.push([key,value])
  }
  return result.sort((a,b)=>a[0]-b[0])
}


// Function Lists progress

function List() {}

function EmptyList() {}
EmptyList.prototype = new List();
EmptyList.prototype.constructor = EmptyList;

EmptyList.prototype.toString = function() {return '()'};
EmptyList.prototype.isEmpty = function() { return true };
EmptyList.prototype.length = function() { /* implement this */ };
EmptyList.prototype.push = function(x) {
  let current = new ListNode()
  current.value=x
  current.next=this  
  return current
};
EmptyList.prototype.remove = function(x) {};
EmptyList.prototype.append = function(xs) {
    var clone = Object.assign({}, xs);
    let current = new ListNode()
    current.value=clone.value
    current.next=clone.next
    return current
};

function ListNode(value, next) { /* implement this */ }
ListNode.prototype = new List();
ListNode.prototype.constructor = ListNode;
ListNode.prototype.isEmpty = function() { return false };

ListNode.prototype.toString = function() {
  let string='('
  let node=this
  while(node.next){
    string+=`${node.value} `
    node=node.next;
  }
  string+=`)`
  console.log(string)
  return string
};

ListNode.prototype.head = function() { /* implement this */ };
ListNode.prototype.tail = function() { /* implement this */  };
ListNode.prototype.length = function() {};
ListNode.prototype.push = function(x) {
  let current = new ListNode()
  current.value=x
  current.next=this
  return current
};
ListNode.prototype.remove = function(x) {
    let node = this
    while(node.next){
      if (node.next.value === x) {
          node.value = node.value;
          node.next  = node.next.next;
       }  
       node = node.next
     }  
  return this
};

ListNode.prototype.append = function(xs) {
    var clone = Object.assign({}, this);
     let node = clone
     let prev=null;
     while(node.next){
       prev=node
       node=node.next
     }
     prev
     prev.next = node.append(xs)
     return clone
   };

// Code
mt = new EmptyList();
l1 = mt.push('c').push('b').push('a');
l5 = mt.push('c').push('b').push('a');
    console.log(l1)
l2 = l1.append(l5);
    console.log(JSON.stringify(l1))
    console.log(JSON.stringify(l2))
    l3 = l1.remove('b');
    console.log(JSON.stringify(l3))


// Binary Search Tree Checker

function BinaryTreeNode(value) {
    this.value = value;
    this.left  = null;
    this.right = null;
}

BinaryTreeNode.prototype.insertLeft = function(value) {
    this.left = new BinaryTreeNode(value);
    return this.left;
};

BinaryTreeNode.prototype.insertRight = function(value) {
    this.right = new BinaryTreeNode(value);
    return this.right;
};

function checkBinarySearchTree(root) {
  let stack = [{node:root, lower:-Infinity, upper:Infinity }] 
    while(stack.length){

    let current = stack.pop()
    let node = current.node
        let upper = current.upper
        let lower = current.lower

        if(node.left){
            if(node.left.value > lower && node.left.value < node.value){
                lower
               stack.push({node: node.left, lower:lower, upper:node.value})
            } else return false
        }
        if(node.right){
            if(node.right.value < upper && node.right.value > node.value){
                console.log('test')
             stack.push({node:node.right, lower:node.value, upper:upper})     
            } else return false
        }
    }
    return true
}

let nroot = new BinaryTreeNode(15)
let n1 = nroot.insertLeft(10)
let n2 = nroot.insertRight(20)
let n3 = n1.insertLeft(8)
let n4 = n1.insertRight(12)
nroot


console.log(myFunction(nroot))

// Substring length

var lengthOfLongestSubstring = function(s) {
    var max = 0;
    var str = '';
    var i = 0;
    var cache = [];
    
    while (i < s.length) {
        if (cache[s[i]]) {
            // Found a repeating character.
            if (str.length > max) {
                max = str.length;
            }

            // Not optimal: empty substring, move i back to last position, and start collecting over.
            /*str = '';
            // Move back to last non-repeating character.
            i = cache[s[i]];
            cache = [];*/
            
            // Optimal: strip everything up to the first repeating character in our substring, and continue on.
            var start = str.indexOf(s[i]);
            str = str.substring(start + 1);
        }

        if (i < s.length) {
            str += s[i];
            cache[s[i]] = i + 1;
            i++;
        }
    }
    
    if (str.length > max) {
        max = str.length;
    }
    
    return max;
};

// delete node linked list nth from end

var removeNthFromEnd = function(head, n) {
    var dummy = new ListNode(0);
    dummy.next = head;
    var temp = dummy;
    var i = 0;
    while(temp !== null && i < n) {
        temp = temp.next;
        i++;
    }
    if(temp === null) return dummy.next;
    var slow = dummy;
    while(temp.next !== null) {
        temp = temp.next;
        slow = slow.next;
    }
    slow.next = slow.next.next;
    return dummy.next;
};


// Flatten Array

var input = [1, 2, [3], [4], [5, 6, [7, 8, 9]]];

function flattenArray(input){
  let result = []
  for(let i=0;i<input.length;i++){
    if(Array.isArray(input[i])){
       result = result.concat(flattenArray(input[i]));
    } else {
       result = result.concat(input[i])
    }
  }
  return result
}

console.log(flattenArray(input));

// FLatten Array no recursion

let input = [1, 2, [3], [4], [5, 6, [7, 8, 9]]];

function flattenArray(input){
  let result = []
  let stack = input.reverse()
    while(stack.length>0){
    let current = stack.pop()
    if(Array.isArray(current)){
        current.reverse().forEach(e=>stack.push(e))
    } else {
        result = result.concat(current)
    }
      
  }
  return result
}

console.log(flattenArray(input));


// Fetch API call

  function createNode(element) {
      return document.createElement(element);
  }

  function append(parent, el) {
    return parent.appendChild(el);
  }

  const ul = document.getElementById('authors');
  const url = 'https://randomuser.me/api/?results=10';
  fetch(url)
  .then((resp) => resp.json())
  .then(function(data) {
    let authors = data.results;
    return authors.map(function(author) {
      let li = createNode('li'),
          img = createNode('img'),
          span = createNode('span');
      img.src = author.picture.medium;
      span.innerHTML = `${author.name.first} ${author.name.last}`;
      append(li, img);
      append(li, span);
      append(ul, li);
    })
  })
  .catch(function(error) {
    console.log(error);
  });  


// Coin sum permutations

console.clear()

function coinPermutatons(total, coins){
  let permutations = []
  let stack = [{remaining:total, used:[]}]
  while(stack.length > 0){
    let current = stack.pop()

    if(current.remaining===0){
      permutations.push(current)
    }
    for(let i=0;i<coins.length;i++){
      let temp = current.used
      if(current.remaining >= coins[i]){
        stack.push({remaining:current.remaining-coins[i],   used:temp.concat(coins[i])})
      }
    }
    console.log(stack)
  }
  return permutations
}

console.log(coinPermutatons(4,[1,2,3]))


// change / coin sum combinations

console.clear()

function coinPermutatons(total, coins){
  let permutations = []
  let coinsSort = coins.sort((a,b)=>a-b)
  let stack = [{remaining:total, used:[], index:0}]
  while(stack.length > 0){
    let current = stack.pop()

    if(current.remaining===0){
      permutations.push(current)
    }
    for(let i=current.index;i<coinsSort.length;i++){
      let temp = current.used
      if(current.remaining >= coinsSort[i]){
        stack.push({remaining:current.remaining-coinsSort[i], used:temp.concat(coinsSort[i]), index:i})
      }
    }
    console.log(stack)
  }
  return permutations.map(e=> e.used)
}

console.log(coinPermutatons(5,[1,3,5]))


// Combination Sum, cannot use more than what is shown, no dups

var combinationSum2 = function(candidates, target) {
    let results = []
    let numSort = candidates.sort((a,b)=>a-b)
    let stack = [{remaining: target, numbers:[], index:0}];
    console.log(numSort)
    
    while(stack.length > 0){
        let current = stack.pop()
        if(current.remaining === 0){
            
           results.push(current.numbers)
         }
        
        for(let i=current.index;i<numSort.length;i++){
            if(i > current.index && numSort[i] === numSort[i-1]){
               continue;
            }
            
            if(current.remaining >= numSort[i]){
               stack.push({remaining: current.remaining-numSort[i], numbers:current.numbers.concat(numSort[i]), index:i+1})
            }
        }

    }
          
    return results
};



// Experiemnts JSBIN #1

console.clear()

let obj = {
    sound: 'wppf',
    talk: function(){
        console.log(this.sound)
    }
}

obj.talk()

let bind = obj.talk.bind(obj)

let cally= obj.talk.call(obj)


bind()

function func() {
    console.log('this: '+this);
    console.log('arguments: '+Array.prototype.slice.call(arguments));
}
var bound = func.bind('abc', 1, 2);
let vbound = bound
let call = func.call('abc',1,2)
// var notBound = func(1,2)

// vbound()
// bound()

// console.log(vbound())
// console.log(call)
// console.log(notBound)

// bound()

function TestObj(){
    this.name = 'Dragon';
  this.gender = function(){
    return 'males'
  }
}

let drag = new TestObj
TestObj.prototype.gender = function(){return 'male'};

console.log(drag)

console.log(drag.gender())


var monica = {
  name: 'Monica Geller',
  total: 400,
  deductMonthlyFee: function(){
      return (fee) => {
       this.total = this.total - fee;
       return this.name + ' remaining balance is '+ this.total; 
      }
  }
}

var rachel = {name: 'Rachel Green', total: 1500};
var rachelFeeDeductor = monica.deductMonthlyFee.bind(rachel);

rachelFeeDeductor()(200); //"Rachel Green remaining balance is 1300"
rachelFeeDeductor(); //"Rachel Green remaining balance is 1100"

console.log(rachel.total)

var ross = {name:'Ross Geller', total:250};
var rossFeeDeductor = monica.deductMonthlyFee.bind(ross);
let tester = rossFeeDeductor()(25); //"Ross Geller remaining balance is 225"
console.log(tester); //"Ross Geller remaining balance is 200"

rachelFeeDeductor(); //"Rachel Green remaining balance is 900"

console.log(ross.total)

// Merge sorted arrays

var myArray     = [3, 4, 6, 10, 11, 15, 22, 25, 26, 30];
var alicesArray = [1, 5, 8, 12, 14, 19, 21];

function mergeArrays(a,b){
  let results=[]
  let aInd=0
  let bInd=0
  while(results.length < a.length+b.length){

    if(a[aInd]<=(b[bInd]|| Infinity)){
      results.push(a[aInd])
      aInd++
    } else {
      results.push(b[bInd])
      bInd++
    }
  }
  return results
}

console.log(mergeArrays(myArray, alicesArray));

// Egg Drop highest floor

function eggDrop(a,b,highest){
  let args = [a,b]
  let lower = 1;
  let upper = 100;
  let guess = null;
  
  args.forEach(e=>{
    if(e.break === true){
      upper = Math.max(lower, e.floor)
    } else {
      lower = Math.min(upper, e.floor)
    }
  })

  while(upper > lower + 1){
    guess = Math.ceil((upper-lower) / 2) + lower;    
    if(guess===highest){
      return guess
    }
    else if(guess > highest){
      upper = guess
    } else {
      lower = guess
    }
  }
  
}

console.log(eggDrop({break:false,floor:43}, {break:true,floor:69}, 56));


// Find median of sorted arrays



let arr1 = [0,1,3,4,5,6]
let arr2 = [0, 2,4,7,8,9,10]


function findMedian(a,b){
    let totalLength = a.length + b.length
    let indexToFind = totalLength % 2 ? Math.floor(totalLength/2) : Math.ceil(totalLength/2)
    let isEven = totalLength % 2 === 0 ? true : false
    let results = [];
    
    while(results[indexToFind] === undefined){
        let bInd = b[0] === undefined ? Infinity : b[0]
        let aInd = a[0] === undefined ? Infinity : a[0]
        
        let toPush = aInd <= bInd ? a.shift() : b.shift()
        console.log(toPush)
        results.push(toPush)
        console.log(results)
    }
    return isEven ? (results[results.length-1]+results[results.length-2])/2 : results[results.length-1]   
}

console.log(findMedian(arr1,arr2))


// two linked list addition

var addTwoNumbers = function(l1, l2) {
  let num1 = [];
  let num2 = [];
  let totalArr = [];
  let totalList;
  let node = l1;
  
  while(node){
    num1.push(node.val)
    node = node.next
  }

  node=l2
  while(node){
    num2.push(node.val)
    node=node.next
  }
    
  let remainder = 0;
  while(num1.length > 0 || num2.length > 0){
    let temp1 = num1.shift()
    let temp2 = num2.shift()
    let toAdd1 = temp1 === undefined ? 0 : temp1;
    let toAdd2 = temp2 === undefined ? 0 : temp2;
    let sum = toAdd1 + toAdd2 + remainder;
    if (sum > 9){
      sum -= 10
      remainder = 1
    } else {
      remainder = 0
    }
    totalArr.unshift(sum)
  }
  if(remainder === 1){
      totalArr.unshift(remainder)
  }
    
  totalList = new ListNode(Number(totalArr[totalArr.length-1]));
  node=totalList;
  
  for(let i=totalArr.length-2; i >= 0 ;i--){
    node.next = new ListNode(totalArr[i])
    node = node.next
  }
  return totalList
};

// Linked List Sum less loops

var addTwoNumbers = function(l1, l2) {
  let dummy = new ListNode(0);
  let num1 = l1;
  let num2 = l2;
  let node = dummy;
    
  let remainder = 0;
  while(num1 !== null || num2 !== null){
    let toAdd1 = num1 === null ? 0 : num1.val;
    let toAdd2 = num2 === null ? 0 : num2.val;
    let sum = toAdd1 + toAdd2 + remainder;
    if (sum > 9){
      sum -= 10
      remainder = 1
    } else {
      remainder = 0
    }
    num1 = num1 === null ? null : num1.next
    num2 = num2 === null ? null : num2.next
    
    node.next = new ListNode(sum) 
    node = node.next
   
  }
  if(remainder === 1){
      node.next = new ListNode(remainder)
  }
    
  return dummy.next
}

// Linked list swap node

var swapPairs = function(head) {
    let dummy = new ListNode(0)
    dummy.next = head
    let prev = dummy
    let n1 = head
  
    
    while(n1 !==null && n1.next !==null){
        let nextStart = n1.next.next
        
        prev.next = n1.next;
        prev.next.next = n1
        n1.next = nextStart;
        
        prev = n1
        n1 = n1.next    
    }
    return dummy.next
};


// Linked List delete node

function ListNode(value) {
    this.value= value;
    this.next= null;
}

let deleteNodeValue = function(head, val){
 
  let node = head
  

  while(node.next){
    if(node.next.value === val){
      node.next = node.next.next
      break;
    } else {
    node = node.next
    }
  } 
}

let a = new ListNode(4)
let b = new ListNode(6)
let c = new ListNode(8)
let d = new ListNode(10)


a.next = b
b.next = c
c.next = d
deleteNodeValue(a,8)


console.log(JSON.stringify(a))


// Linked List add and delete example

function LinkedList (){
    this.head = null;
}

LinkedList.prototype.insertNodeAtTail = function(val) {
    var newNode = {
      val: val,
      next: null
    };

    if (!this.head) {
      this.head = newNode;
    } else {
      let node = this.head;
        while (node.next) {
          node = node.next;
        }
      node.next = newNode;
    }
  
}

LinkedList.prototype.deleteNode = function(val) {

    if (!this.head) {
      console.log('Linked list is empty.');
      return;
    }
    // if you have to delete the head
    if (this.head.val === val) {
      this.head = this.head.next;
    } else {
      var node1 = this.head;
      while (node1.next) {
        if (node1.next.val === val) {
          node1.next = node1.next.next;
          break;
        } else {
          node1=node1.next
        }
      }
    }
  
}
// Create an instance of a LinkedList class
var L1 = new LinkedList();

// Create a linked list with six elements
L1.insertNodeAtTail(5);
L1.insertNodeAtTail(6);
L1.insertNodeAtTail(7);
L1.insertNodeAtTail(8);
L1.insertNodeAtTail(9);
L1.insertNodeAtTail(10);


// Delete a head and a tail node
L1.deleteNode(5);
L1.deleteNode(10);


// Delete  an intermediate node
L1.deleteNode(7);
console.log(JSON.stringify(L1))


// API Http request example

!function(){

  function get(url){
    return new Promise(function(succeed,fail){
      var xhr = new XMLHttpRequest();
      xhr.open('get',url,true);
      xhr.addEventListener('load',function(){
        if(xhr.status < 400){
          succeed(xhr.responseText)
        } else fail(new Error('reQuest failed ' + xhr.statusText))
      })
      xhr.addEventListener('fail', function(){
        fail(new Error('Network error'))
      })
      xhr.send(null)
    })
  }

  let url = 'http://api.giphy.com/v1/gifs/search?q=ryan&api_key=a5c163ee9c29473580e365c6cc226a99&limit=6';

  get(url).then(function(text) {
      console.log(JSON.parse(text));
    }, function(error) {
      console.log("Failed to fetch data.txt: " + error);
  })


  // var xhr = new XMLHttpRequest();
  // xhr.open('get',`http://api.giphy.com/v1/gifs/search?q=ryan&api_key=a5c163ee9c29473580e365c6cc226a99&limit=6`, false);
  // xhr.addEventListener('load',function(){
  //    console.log(JSON.parse(xhr.response), xhr.status)
  // })
  // xhr.send(null);

}();


// 3Sum

var threeSum = function(nums) {
    var result = [];
    
    if(nums.length < 3){
        return result;
    }
    
    nums.sort(function(a,b){return a>b ? 1 : -1;});
    
    var len = nums.length;
    
    for(var i = 0; i < len-2; i++){
        
        if(i === 0 || nums[i] > nums[i-1]){ // very important, same as line 40, remove duplicate as 111 will only run once 1-> rather tan 1 1 1
            target = 0 - nums[i];
            
            j = i + 1;
            k = len - 1;
            
            while(j < k){
                if(nums[j] + nums[k] === target){
                    result.push([nums[i],nums[j],nums[k]]);
                    j++;
                    k--;
                    while(j < k && nums[j] === nums[j-1]){j++;}
                    while(j < k && nums[k] === nums[k+1]){k--;}
                } else if(nums[j] + nums[k] < target){
                    j++;
                } else {
                    k--;
                }
            }
        }

    }
    
    return result;
};


// 3sum closest

var threeSumClosest  = function(nums,target) {
    var result = [nums[0],nums[1],nums[2]];
    let closestSum = Infinity;
    
    if(nums.length < 3){
        return result;
    }
    
    nums.sort(function(a,b){return a-b});
    
    console.log(closestSum)
    
    for(let i=0;i<nums.length;i++){
      
      let j = i+1;
      let k = nums.length-1;
      
      while(j<k){
        
        console.log(nums[i],nums[j],nums[k])
        
        let sum = nums[i] + nums[j] + nums[k]
        let diff = target - sum

        if(diff === 0){
          return sum
        }
        
        if(sum < target){
          diff = target-sum
          j++;
          while(j < k && nums[j] === nums[j-1]){j++;}
        } else {
          diff = sum - target
          k--
          while(j < k && nums[k] === nums[k+1]){k--;}   
        }
        
        if(diff < closestSum){
          console.log('test')
          closestSum = diff;
          result = [nums[i],nums[j],nums[k]]
        }
      }
    }
    
    return result;
};

threeSumClosest([1,1,1,-1,2,-4,-1,-1,4],8)


// Search Range

var searchRange = function(nums, target) {
    let results = [];
    let lowBound = -1;
    let highBound = nums.length;
    let firstIndex = null;
    let secondIndex = null;

    while(lowBound +1 < highBound && firstIndex === null){
        let middle = Math.ceil((highBound - lowBound) / 2) + lowBound;
        let middleValue = nums[middle]
        if(middleValue === target){
           firstIndex = middle
           secondIndex = middle
        }
        else if(middleValue > target){
            highBound = middle   
        } else if(middleValue < target){
            lowBound = middle
        }
    }
    if(firstIndex === null){
      return [-1,-1]
    }
    while(nums[firstIndex] === target){
      firstIndex = firstIndex -1
    }
    while(nums[secondIndex] === target){
      secondIndex = secondIndex+1
    }
    return [firstIndex+1, secondIndex-1]
};

searchRange([5, 7, 7, 8, 8, 10],9)


// Find Common index in array

let x = [1,2,3];
let y = [3,4,5];

let findCommon = (x,y) => x.filter(e=>y.indexOf(e) < 0 ? e : null)
findCommon(x,y)


// telephone number word combination

var letterCombinations = function(digitString) {
    let digits = digitString.split('');
    let obj = {
        2:['a','b','c'],
        3:['d','e','f'],
        4:['g','h','i'],
        5:['j','k','l'],
        6:['m','n','o'],
        7:['p','q','r','s'],
        8:['t','u','v'],
        9:['w','x','y','z']
    }
    let results = [];
    let stack = [{output:'', digitsLeft:digits}];
    
    if(digitString.length === 0){
        return []   
    }
    
    while(stack.length > 0){
        let current = stack.pop();
        let digit = current.digitsLeft[0]
        let reference = obj[digit] || '';
        if(current.digitsLeft.length === 0){
           results.push(current.output);
        }
        for(let i=0; i<reference.length; i++){
            stack.push({output:current.output + reference[i], digitsLeft:current.digitsLeft.slice(1)})
        }
    }
    return results
};



