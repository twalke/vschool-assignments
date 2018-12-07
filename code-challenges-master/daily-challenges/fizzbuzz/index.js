function fizzBuzz(){
  var fizz = "fizz";
  var buzz = "buzz";
  var fizzBuzz = "fizzBuzz";
  var array = [];
    for (var i = 0; i < 100; i++) {
      if (i%3 == 0 && i%3 == 5) {
        array += fizzBuzz;
      }else if (i%3 == 0) {
        array += fizz;
      } else if (i%5 == 0) {
        array += buzz;
      } else {
        array += i;
      }
    }
    return array;
    console.log(array);
}

module.exports = { fizzBuzz }
