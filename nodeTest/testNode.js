var rs = require("readline-sync");

var name = rs.question("Hello, what is your name?");

console.log("My name is " + name);

var password = rs.question("What is your password", {hideEchoBack: true});
console.log(password);

var isVegetarian = rs.keyInYN("Are you a vegetarian?");

if(isVegetarian){
  console.log("You like plants!");
} else {
  console.log("You hate plants!");
}

var options = ["warrior", "mage", "warlock"];

var choiceIndex = rs.keyInSelect(options, "which character class do you choose?");
console.log("You chose the " + options[choiceIndex + "."]);

var input = rs.question("Enter any string\n");
console.log(input.toUpperCase());

var registeredUser = {
  userName: "Tyler",
  password: "test"
}
