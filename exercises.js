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

// Calculator in progress, fix parenthesis

function Calculator(str) { 
  str = str.split('');
  stringFix(str);
  console.log(str);
    
  for (var i=0;i<str.length;i++) {
    if(str[i] === '(') {
      var index = str.indexOf('(')
      var removed = str.splice(str.indexOf('('),str.lastIndexOf(')')-str.indexOf('(')+1)
      removed.pop();
      removed.shift();
      mD(removed);
      aS(removed);

      if(str[i-1].match(/\d/)) {
        str.splice(index, 0, '*', removed[0])
      } else {
        str.splice(index, 0, removed[0])
      }
      
      console.log(removed,str,index)
    }
  }
  
  function stringFix(strr) {
    for(var i=0;i<strr.length-1;i++){
      if(strr[i].match(/\d/) && strr[i+1].match(/\d/)) {
        strr.splice(i, 2, strr[i] + strr[i+1])
        console.log(strr)
        stringFix(strr);
      } else {
        
      }
    }
  }
  
  function mD(strr) {
    for (var i=0;i<strr.length;i++) {
       if(strr[i] === '/' || strr[i] === '*'){
          if(strr[i] === '/') {
            strr.splice(i-1,3,+strr[i-1]/+strr[i+1])
            console.log(strr)
            mD(strr)
          }
           if(strr[i] === '*') {
            strr.splice(i-1,3,+strr[i-1]*+strr[i+1])
            console.log(strr)
            mD(strr)
          }
       }
    }
  }
  
  function aS(strr) {
    for (var i=0;i<strr.length;i++) {
      console.log(strr[i])
       if(strr[i] === '+' || strr[i] === '-'){
          if(strr[i] === '+') {
            strr.splice(i-1,3,+strr[i-1]+ +strr[i+1])
            console.log(strr)
            aS(strr)
          }
           if(strr[i] === '-') {
            strr.splice(i-1,3,+strr[i-1]- +strr[i+1])
            console.log(strr)
            aS(strr)
          }
       }
    }
  }
 
  mD(str)
  aS(str)
  
  return str[0]
}

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


