/**
 * Ship
 *
 * @param {string} name
 * @constructor
 */
function Ship(name)
{
  this.name = name || 'Unnamed';
}

Ship.prototype.getName = function() {
	return this.name;
};

function StarShip(name, maxSpeed)
{
	this.maxSpeed = maxSpeed;
	Ship.call(this, name);
}

StarShip.prototype = Object.create(Ship.prototype);
StarShip.prototype.constructor = StarShip;

StarShip.prototype.getMaxSpeed = function() {
	return this.maxSpeed;
}

var enterprise = new StarShip('Enterprise', 10);

console.log(enterprise.getName());
console.log(enterprise.getMaxSpeed());
