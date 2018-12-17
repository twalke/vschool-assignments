var seconds = 0;

function currentTime() {
  seconds ++;
  console.log(seconds);
}

setInterval(currentTime, 1000);


//break

var animals = ["dog", "cat", "cow"];

var renderAnimals = animals.map(function(animal) {
  return "<h1>" + animal + "<h1>";
})

console.log(renderAnimals)

//////////break
