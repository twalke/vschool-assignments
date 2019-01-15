
function doubleFunc(num) {
  return num * 2;
}
function doubleNumbers(arr){
  return arr.map(doubleFunc);
}
console.log(doubleNumbers([2, 5, 100]));

function makeString(num) {
  return num.toString();
}
function stringItUp(arr){
  return arr.map(makeString);
}

console.log(stringItUp([2, 5, 100])); // ["2", "5", "100"]


function capIt(str) {
  return str.toUpperCase();
}
function capitalizeNames(arr){
  return arr.map(capIt);
}

console.log(capitalizeNames(["john", "JACOB", "jinGleHeimer", "schmidt"])); // ["John", "Jacob", "Jingleheimer", "Schmidt"]

////////
var namesOnly = [
    {
        name: "Angelina Jolie",
        age: 80
    },
    {
        name: "Eric Jones",
        age: 2
    },
    {
        name: "Paris Hilton",
        age: 5
    },
    {
        name: "Kayne West",
        age: 16
    },
    {
        name: "Bob Ziroll",
        age: 100
    }
];

function getFullName(item) {
  var fullName = [namesOnly.name];
  var nameStr = [];
  for (var i = 0; i < namesOnly.length; i++) {
    // nameStr = namesOnly[i];
    nameStr.push(namesOnly.name)
  }
  return nameStr;
}

function fNamesOnly(arr){
  return arr.map(getFullName);
}

console.log(fNamesOnly(namesOnly));



// ["Angelina Jolie", "Eric Jones", "Paris Hilton", "Kayne West", "Bob Ziroll"]
