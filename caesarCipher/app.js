let rs = require("readline-sync");

let input = rs.question('What phrase would you like to encrypt? ').toLowerCase();
let shift = parseInt(rs.question('How many letters would you like to shift? '));
let encrypted;

function cCipher() {
  for(let i = 0; i < input.length; i++) {
      let temp = input.charAt(i);
      if(temp !== " ") {
         encrypted += String.fromCharCode(shift + String.prototype.charCodeAt(temp));
      } else {
        encrypted += temp;
      }
  }
  return encrypted;
}



console.log(cCipher());
