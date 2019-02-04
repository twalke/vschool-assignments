const uuid = require("uuid");

const Transformer = function(bot) {
  this._id = uuid();
  this.name = bot.name;
  this.affiliation = bot.affiliation;
  this.vehicle = bot.vehicle;
}

const Database = function() {
  this.transformers = [];
}

Database.prototype.find = function() {
  return this.transformers;
}

Database.prototype.save = function(bot) {
  const newBot = new Transformer(bot);
  this.transformers.push(newBot);
  return newBot;
}

Database.prototype.findIdAndRemove = function(id) {
  let foundBot = this.transformers.find(bot => {
    return bot._id === id;
  });
  if(foundBot === undefined) {
    return
  } else {
    let index = this.transformers.indexOf(foundBot);
    this.transformers.splice(index, 1);
  }
}

Database.prototype.findByIdAndUpdate = function(id, updates) {
  let foundBot = this.transformers.find(bot => {
    return bot._id === id;
  });
  if (foundBot === undefined) {
    return
  } else {
    let index = this.transformers.indexOf(foundBot);
    newFoundBot = {...foundBot, ...updates};
    this.transformers[index] = newFoundBot;
  }
  return newFoundBot;
}

//GET ONE
Database.prototype.findOne = function(id) {
  return this.transformers.find(bot => {
    return bot._id === id;
  });
  if (foundBot === undefined) {
    return
  } else {
    let index = this.transformers.indexOf(foundBot);
    newFoundBot = {...foundBot, ...updates};
    this.transformers[index] = newFoundBot;
  }
  return newFoundBot;
}

module.exports = new Database();
