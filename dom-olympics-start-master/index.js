var myHeader = document.createElement("h1");
myHeader.setAttribute("class", "header")
myHeader.setAttribute("id", "headerId");

var myName = document.createElement("span");
myName.setAttribute("class", "name");
myName.setAttribute("id", "nameId");

var mySentence = document.createElement("span");
mySentence.setAttribute("id", "sentenceId");

var myMessages = document.querySelector(".messages");
var myMain = document.querySelector(".main");
var dropdownSelect = document.getElementById("theme-drop-down");

document.body.prepend(mySentence);
document.body.prepend(myName);
document.body.prepend(myHeader);
document.getElementById('headerId').innerHTML = "JavaScript Made This!!";
document.getElementById('nameId').innerHTML = "Tyler";
document.getElementById("sentenceId").innerHTML = " wrote the JavaScript <br><br>";

// var messageText[] = document.querySelectorAll(".messages");
var leftText = document.querySelectorAll(".left")[0];
leftText.innerText = "Can you find a cab?";
var rightText = document.querySelectorAll(".right")[0];
rightText.innerText = "Yes, of course.";
var leftText2 = document.querySelectorAll(".left")[1];
leftText2.innerText = "Thank you so much.";
var rightText2 = document.querySelectorAll(".right")[1];
rightText2.innerText = "Always happy to call a cab, friend.";

var allRightText = document.querySelectorAll(".right");

// leftText.parentNode.removeChild(leftText);
document.getElementById("clear-button").addEventListener("click", function(e) {
  myMessages.removeChild(leftText);
  myMessages.removeChild(rightText);
  myMessages.removeChild(leftText2);
  myMessages.removeChild(rightText2);
})

dropdownSelect.onchange = function() {
  var x = dropdownSelect.selectedIndex;
  document.getElementsByTagName("option")[x].setAttribute("style", "backgroundColor:red")[x];
  // leftText.setAttribute("style", "backgroundColor:red")[x].value;


  // for (var i = 0; i < dropdownSelect.length; i++) {
  //   if (i == dropdownSelect.selectedIndex) {
  //     dropdownSelect.options[i]
  //           .style.backgroundColor = 'red';
  //   } else {
  //           dropdownSelect.options[i]
  //           .style.backgroundColor = '';
  //       }
  // }
}

// document.getElementById("theme-drop-down").addEventListener("click", function(e) {
//   allRightText.setAttribute("style", "background-color:red");
// })
