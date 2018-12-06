// Create 10 objects from things you see.
// Each object should have at least 3 keys (properties).
// Choose varying data types for your properties (boolean, string, number, array, nested object, etc.)
// Each object should have at least one method.

var glasses = {
  color: "brown",
  price: 25,
  areSunGlasses: false,
  write: function() {
    console.log("I'm a " + this.color + " pair of glasses that cost $" + this.price);
  }
}

var monitor = {
  brand: "Asus",
  price: 100,
  pluggedIn: false,
  write: function() {
    console.log("I'm a " + this.brand + " brand monitor that costs $" + this.price);
  }
}

var jacket = {
  color: "blue",
  brand: "Black Diamond",
  isDown: true,
  write: function() {
    console.log("I'm a " +this.color + " " + this.brand + " jacket.");
  }
}

var headphones = {
  color: "white",
  brand: "Apple",
  price: 20,
  write: function() {
    console.log("I'm a " + this.color + " pair of " + this.brand + " headphones.");
  }
}

var computer = {
  color: "silver",
  brand: "Apple",
  model: "2016 MacBook Pro",
  write: function() {
    console.log("I'm a " + this.model + " " + this.brand + " computer.");
  }
}

var shoes = {
  brand: "Nike",
  color: "grey",
  price: 50,
  write: function() {
      console.log("I'm a pair of " + this.brand + " shoes.");
    }
}

var chair = {
  color: "blue",
  isSwivel: true,
  isBroken: false,
  write: function() {
    console.log("I'm a " + this.color + " chair");
  }
}

var building = {
  floors: 5,
  hasElevator: true,
  name: "Impact Hub",
  write: function() {
    console.log("I'm the " + this.name + "!");
  }
}

var backpack = {
  color: "grey",
  price: 30,
  isFull: true,
  write: function() {
    console.log("I'm a " + this.color + " backpack");
  }
}

var can = {
  type: "aluminum",
  kindOfSoda: "coke",
  isOpen: true,
  write: function() {
    console.log("I'm a(n) " + this.type + " can of " + this.kindOfSoda);
  }
}
