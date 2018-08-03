'use strict';
const helper = require('./utils/helper.js');

/**
 * Add privacy status in package.json
 * @param  {String} bool
 */
module.exports.private = (bool) => {
	helper.pkg.add('private', bool);
	helper.createJSON();
}

/**
 * Add publishing configuration in package.json
 * @param  {Object} config
 */
module.exports.publishConfig = (config) => {
	helper.pkg.add('publishConfig', config);
	helper.createJSON();
}
