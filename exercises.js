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

