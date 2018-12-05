function removeA(str){
    var removeA = str.split('');
    for (var i = 0; i < removeA.length; i++) {
      if (removeA[i] == "a") {
        removeA.splice(i, 1);
      } else if (removeA[i] == "A") {
        removeA.splice(i, 1);
      }
    }
    removeA = removeA.join('');
    return removeA;
}
console.log(removeA("Aye matey!"));


module.exports = { removeA }
