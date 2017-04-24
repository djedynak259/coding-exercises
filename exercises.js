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



