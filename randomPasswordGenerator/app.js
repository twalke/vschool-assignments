function randomPasswordGenerator(number) {
    let password = [];
    for (let i = 0; i < number; i++) {
      let nextChar = Math.floor(Math.random() * 100);
      while (nextChar > 126) {
        nextChar -= 50;
      }
      while (nextChar < 32) {
        nextChar += 50;
      }
      let tempPassword = String.fromCharCode(nextChar);
      password.push(tempPassword);
    }
    return password;
}

console.log(randomPasswordGenerator(5));
