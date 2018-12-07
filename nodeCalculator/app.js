var rs = require("readline-sync");

var x = rs.question("What is your first number?\n");
var y = rs.question("What is your second number?\n");

var options = ["+", "-", "/", "*"];

var op = rs.keyInSelect(options, "Which operation?\n");

function addNumbers() {
  var add = +x + +y;
  return add;
}

function subNumbers() {
  var sub = +x - +y;
  return sub;
}

function divNumbers() {
  var div = +x / +y;
  return div;
}

function multNumbers() {
  var mult = +x * +y;
  return mult;
}

if (op == 0) {
  console.log(addNumbers());
} else if (op == 1) {
  console.log(subNumbers());
} else if (op == 2) {
  console.log(divNumbers());
} else if (op == 3) {
  console.log(multNumbers());
}
