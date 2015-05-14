/**
 * Point
 *
 * @param {number} x
 * @param {number} y
 * @constructor
 */
function Point(x, y)
{
  this.x = x;
  this.y = y;

  this.set = function(x, y)
  {
    this.x = x;
    this.y = y;
  }
}

/**
 * Third dimension
 *
 * @var {number} z
 */
Point.prototype.z = 0;

/**
 * Move point
 * 
 * @var {number} x
 * @var {number} y
 * @var {number} [z=0]
 */
Point.prototype.move = function(x, y, z)
{
	this.x += x;
	this.y += y;

	this.z = z || 0;
};

/**
 * Value object
 *
 * @param {number} main
 * @param {number} aux
 * @constructor
 */
function Val(main, aux)
{
	this.main = main || 0;
	this.aux = aux || 0;
}

Val.prototype.toString = function() { return this.main; };
