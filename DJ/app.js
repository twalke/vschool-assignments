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

document.addEventListener("wheel", function(e) {
  box.style.backgroundColor = "orange";
})

box.addEventListener("keydown", function(e) {
  var myNum;
  e.which = myNum;
  console.log(myNum);
  if (myNum == 66) {
    e.target.style.backgroundColor = "blue";
  }
})

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

document.addEventListener("keydown", function(e) {
  var myNum= e.which;
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
  } else if (myNum == 88) {
    box.style.backgroundColor = getRandomColor();
  }
})

var removeDuplicates = function(nums) {
    var temp = nums[nums.length-1];
    for (var i = nums.length-2; i >= 0; i--) {
        if (nums[i] == temp) {
            nums.splice(i, 1);
        } else {
            temp = nums[i];
        }
    }
    return nums;
};
var nums = [1,1,1,2,2,3,3,5,5,6];
removeDuplicates(nums);
