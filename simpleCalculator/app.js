var form = document.querySelector("form");

form.addEventListener("submit", function(e) {
  e.preventDefault();
  var addData = {
    addOne: this.addOne.value,
    addTwo: this.addTwo.value
  }
  solvedAddEquation(addData);
})

form.addEventListener("submit", function(e) {
  e.preventDefault();
  var subData = {
    subOne: this.subOne.value,
    subTwo: this.subTwo.value
  }
  solvedSubEquation(subData);
})

form.addEventListener("submit", function(e) {
  e.preventDefault();
  var multData = {
    multiplyOne: this.multiplyOne.value,
    multiplyTwo: this.multiplyTwo.value
  }
  solvedMultiplyEquation(multData);
})

function solvedAddEquation(addData) {
  var addAnswer = document.getElementById("addAnswer");

  addAnswer.textContent = +addData.addOne + +addData.addTwo;
}

function solvedSubEquation(subData) {
  var subAnswer = document.getElementById("subAnswer");

  subAnswer.textContent = subData.subOne - subData.subTwo;
}

function solvedMultiplyEquation(multData) {
  var multAnswer = document.getElementById("multAnswer");

  multAnswer.textContent = multData.multiplyOne * multData.multiplyTwo;
}
