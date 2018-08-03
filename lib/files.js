'use strict';
const helper = require('./utils/helper.js');

/**
 * Add files for package.json
 * @param  {Array} files
 */
module.exports.files = (files) => {
	helper.pkg.add('files', files);
	helper.createJSON();
}

/**
 * Add main file in package.json
 * @param  {String} main
 */
module.exports.main = (main) => {
	helper.pkg.add('main', main);
	helper.createJSON();
}

/**
 * Add bin files in package.json
 * @param  {String | Object} bin
 */
module.exports.bin = (bin) => {

	// @TODO multiple bins

	helper.pkg.add('bin', bin);
	helper.createJSON();
}

/**
 * Add man in package.json
 * @param  {String | Array} man
 */
module.exports.man = (man) => {
	helper.pkg.add('man', man);
	helper.createJSON();
}

/**
 * Add directories in package.json
 * @param  {Object} dir
 */
module.exports.dir = (dir) => {
	helper.pkg.add('directories', dir);
	helper.createJSON();
}
