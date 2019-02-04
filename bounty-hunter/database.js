const uuid = require("uuid");

const Bounty = function(contract) {
  this._id = uuid();
  this.firstName = contract.firstName;
  this.lastName = contract.lastName;
  this.living = contract.living;
  this.bountyAmount = contract.bountyAmount;
  this.type = contract.type;
}

const Database = function() {
  this.bounties = [];
}

Database.prototype.find = function() {
  return this.bounties;
}

Database.prototype.save = function(contract) {
  const newContract = new Bounty(contract);
  this.bounties.push(newContract);
  return newContract;
}

Database.prototype.findByIdAndRemove = function(id) {
  let foundContract = this.bounties.find(contract => {
    return contract._id === id;
  });
  if(foundContract === undefined) {
    return
  } else {
    let index = this.bounties.indexOf(foundContract);
    this.bounties.splice(index, 1);
  }
}

module.exports = new Database();
