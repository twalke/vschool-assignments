const Canyon = function(canyon) {
  this._id = uuid();
  this.canyonName = canyon.canyonName;
  this.state = canyon.state;
  this.area = canyon.area;
  this.coordinates = canyon.coordinates;
  this.rating = canyon.rating;
  this.minTime = canyon.minTime;
  this.maxTime = canyon.maxTime;
  this.distance = canyon.distance;
  this.totalRaps = canyon.totalRaps;
  this.longestRap = canyon.longestRap;
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
