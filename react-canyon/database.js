const Canyon = function(canyon) {
  this._id = uuid();
  this.canyonName = canyon.canyonName;
  this.rating = canyon.rating;
  this.canyonTime = canyon.canyonTime;
  this.canyonDistance = canyon.canyonDistance;
  this.totalRaps = canyon.totalRaps;
  this.description = canyon.description;
}

const Database = function() {
  this.canyons = [];
}

Database.prototype.find = function() {
  return this.canyons;
}

Database.prototype.save = function(canyon) {
  const newCanyon = new Canyon(canyon);
  this.canyons.push(newCanyon);
  return newCanyon;
}

module.exports = new Database();
