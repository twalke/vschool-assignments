var box = document.querySelector(".box");
box.addEventListener("mouseover", function(e) {
  e.target.style.backgroundColor = "blue";
})

box.addEventListener("mousedown", function(e) {
  e.target.style.backgroundColor = "red";
})

box.addEventListener("mouseup", function(e) {
  e.target.style.backgroundColor = "yellow";
})

box.addEventListener("dblclick", function(e) {
  e.target.style.backgroundColor = "green";
})

box.addEventListener("wheel", function(e) {
  e.target.style.backgroundColor = "orange";
})

box.addEventListener("keydown", function(e) {
  var myNum;
  e.which = myNum;
  console.log(myNum);
  if (myNum == 66) {
    e.target.style.backgroundColor = "blue";
  }
})

// document.addEventListener("keydown", function(event) {
//   console.log(event.which);
// }
document.addEventListener("keydown", function(e) {
  console.log(e.which);
  var myNum= e.which;
  console.log(myNum);
  if (myNum == 66) {
    box.style.backgroundColor = "blue";
  } else if(myNum == 82) {
    box.style.backgroundColor = "red";
  } else if(myNum == 89) {
    box.style.backgroundColor = "yellow";
  } else if(myNum == 71) {
    box.style.backgroundColor = "green";
  } else if(myNum == 79) {
    box.style.backgroundColor = "orange";
  }
})
