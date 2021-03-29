var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(chocolateBars, element){
  return [element, ...chocolateBars];
}
function destructivelyAddElementToBeginningOfArray(chocolateBars, element){
  chocolateBars.unshift(element);
  return chocolateBars;
}
function addElementToEndOfArray(chocolateBars, element){
  return [...chocolateBars, element];
}

function destructivelyAddElementToEndOfArray(chocolatebars, element){
  chocolatebars.push(element);
  return chocolatebars;
}
function accessElementInArray(chocolatebars, index){
return  chocolatebars[index];
}
function destructivelyRemoveElementFromEndOfArray(chocolatebars){
  return chocolatebars.shift();
}
