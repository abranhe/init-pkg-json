'use strict';
const helper = require('./utils/helper.js');

/**
 * Add dependencies in package.json
 * @param  {Object} dependencies
 */
module.exports.dependencies = (dependencies) => {
	helper.pkg.add('dependencies', dependencies);
	helper.createJSON();
}

/**
 * Add devDependencies in package.json
 * @param  {Object} devDendencies
 */
module.exports.devDependencies = (devDependencies) => {
	helper.pkg.add('devDependencies', devDependencies);
	helper.createJSON();
}

/**
 * Add peerDependencies in package.json
 * @param  {Object} peerDendencies
 */
module.exports.peerDependencies = (peerDependencies) => {
	helper.pkg.add('peerDependencies', peerDependencies);
	helper.createJSON();
}

/**
 * Add optionalDependencies in package.json
 * @param  {Object} optionalDendencies
 */
module.exports.optionalDependencies = (optionalDependencies) => {
	helper.pkg.add('optionalDependencies', optionalDependencies);
	helper.createJSON();
}

/**
 * Add bundledDependencies in package.json
 * @param  {Array} optionalDendencies
 */
module.exports.bundledDependencies = (bundledDependencies) => {
	helper.pkg.add('bundledDependencies', bundledDependencies);
	helper.createJSON();
}

/**
 * Add flat in package.json
 * @param  {Boolean} bool
 */
module.exports.flat = (bool) => {
	helper.pkg.add('flat', bool);
	helper.createJSON();
}

/**
 * Add resolutions in package.json
 * @param  {Object} resolutions
 */
module.exports.resolutions = (resolutions) => {
	helper.pkg.add('resolutions', resolutions);
	helper.createJSON();
}
