var form = document.querySelector("form");

var goombaBox = document.getElementById("goombaInput");
var bombBox = document.getElementById("bombInput");
var cheepBox = document.getElementById("cheepInput");

goombaBox.addEventListener("blur", function(e) {
  var goombaInput = document.getElementById("goombaInput").value;
  var bombInput = document.getElementById("bombInput").value;
  var cheepInput = document.getElementById("cheepInput").value;

  var total = +goombaInput*5 + +bombInput*7 + +cheepInput*11;
  document.getElementById("dynamicResults").innerHTML = total + " coins";
})

bombBox.addEventListener("blur", function(e) {
  var goombaInput = document.getElementById("goombaInput").value;
  var bombInput = document.getElementById("bombInput").value;
  var cheepInput = document.getElementById("cheepInput").value;

  var total = +goombaInput*5 + +bombInput*7 + +cheepInput*11;
  document.getElementById("dynamicResults").innerHTML = total + " coins";
})

cheepBox.addEventListener("blur", function(e) {
  var goombaInput = document.getElementById("goombaInput").value;
  var bombInput = document.getElementById("bombInput").value;
  var cheepInput = document.getElementById("cheepInput").value;

  var total = +goombaInput*5 + +bombInput*7 + +cheepInput*11;
  document.getElementById("dynamicResults").innerHTML = total + " coins";
})
