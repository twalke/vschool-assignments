//Prelims
if(5>3) {
  console.log("is greater than");
}

if("cat".length == 3) {
  console.log("is the length");
} else {
  console.log("is not length");
}

if("cat" == "dog") {
  console.log("same");
} else {
  console.log("not the same");
}


// Bronze
var person = {
  name: "Bobby",
  age: 12
}

if(person.age >= 18) {
  console.log(person.name + " is allowed to go to the movie");
} else {
  console.log(person.name + " is not allowed to go to the movie");
}

if(person.name.startsWith("B")) {
  console.log(person.name + " allowed in movie");
} else {
  console.log(person.name + " not allowed in movie");
}

if(person.age >= 18 && person.name.startsWith("B")) {
  console.log(person.name + " allowed in movie");
} else {
  console.log(person.name + " not allowed in movie");
}

// Silver
if(1 == "1") {
  console.log("strict");
} else if(1 == "1") {
  console.log("abstract");
} else {
  console.log("not equal at all");
}

if(1 <= 2 && 2 == 4) {
  console.log("yes");
} else {
  console.log("no");
}

// Gold
if(typeof("dog") == "string") {
  console.log("string");
} else {
  console.log("not a string");
}

if (typeof(true) == "boolean") {
  console.log("boolean");
} else {
  console.log("failed");
}

var notDefined;
if (notDefined == undefined) {
  console.log("undefined");
} else {
  console.log("defined");
}

if ("Z"> 1) {
  console.log("letter is greater");
} else {
  console.log("number is greater");
}

var myNum = 12;
myNum%2 == 0 : console.log("myNum is even") ? console.log("myNum is odd");
