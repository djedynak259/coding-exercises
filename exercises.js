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

