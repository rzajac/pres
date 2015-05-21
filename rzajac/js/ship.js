var errAbstractClass = new Error("Can't instantiate abstract class!");
var errAbstractMethod = new Error("Abstract method must be implemented by subclass!");

function Vessel(name) {
	if (this.constructor === Vessel) throw errAbstractClass;
	this.name = name || "Unnamed";
}

Vessel.prototype.getName = function() {
	return this.name;
}

Vessel.prototype.getRange = function() {
	throw errAbstractMethod;
}


function Ship(name, range) {
	Vessel.call(this, name);
	this.range = range;
}

Ship.prototype = Object.create(Vessel.prototype);
Ship.prototype.constructor = Ship;
Ship.prototype.getRange = function() {
	return this.range;
}
	
function Submarine(name, range, maxDepth) {
	Ship.call(this, name, range);
	this.maxDepth = maxDepth;
}

Submarine.prototype = Object.create(Ship.prototype);
Submarine.prototype.constructor = Submarine;

Submarine.prototype.getMaxDepth = function() {
	return this.maxDepth;
}

var wilk = new Submarine("ORP Wilk", 3500, 300);

console.log(className(wilk));
console.log(wilk.getRange());
console.log(wilk.getMaxDepth());
console.log(wilk.getName());