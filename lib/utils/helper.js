'use strict';
const fs = require('fs');

let indent = 2;
let pkg = {};

exports.pkg = pkg;

/**
 * Set indentaion for package.json
 * @param  {Number} size
 */
exports.indentaion = Object.prototype.indentation = function (size) {
	indent = size;
};

/**
 * Void function to write file
 */
module.exports.createJSON = () => {
	//@TODO if there is already a pkg.json on the directory
	//			ask if the user want to overrite it.
	fs.writeFile ('package.json', JSON.stringify (
		pkg, null, indent
	), err => {
		if (err) throw err;
	}
)};

/**
 * Assing each value to each property of the package.json
 * @param  {String} property
 * @param  {String} val
 */
exports.add = Object.prototype.add = (property, val) => {
	pkg[property] = val;
}
