'use strict';
const helper = require('./utils/helper.js');

/**
 * Create required fields for a valid package.json
 * @param  {String} name
 * @param  {String | Number} version
 */
module.exports.init = (name, version) => {
	helper.pkg.add('name', name);

	if(typeof version === 'number') {
			version = version.toString();
	}

	helper.pkg.add('version', version);
	helper.createJSON();
}
