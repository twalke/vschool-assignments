function firstFunct() {
  var str = "hello world!";
  var str2 = " Yeah hello.";
  var newStr = str.concat(str2);
  console.log(newStr);
  var matchStr = newStr.match(/l/g);
  console.log(matchStr);
  var indexStr = newStr.indexOf("Y");
  console.log(indexStr);
  var lastIndexStr = newStr.lastIndexOf("l");
  console.log(lastIndexStr);
  var sliceStr = newStr.slice(0,4);
  console.log(sliceStr);
  var upperStr = sliceStr.toUpperCase();
  console.log(upperStr);
  var lowerStr = upperStr.toLowerCase();
  console.log(lowerStr);
  var replaceStr = lowerStr.replace("hell", "Taco Bell");
  console.log(replaceStr);
  var splitStr = replaceStr.split(" ");
  console.log(splitStr);
  var subString = replaceStr.substr(str, 4);
  console.log(subString);
}
firstFunct();
