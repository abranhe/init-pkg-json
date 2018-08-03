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
 * @param  {String} bin
 */
module.exports.bin = (bin) => {

	// @TODO multiple bins

	helper.pkg.add('bin', bin);
	helper.createJSON();
}

//@TODO MAN

//@TODO Directories
