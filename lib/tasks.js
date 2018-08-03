'use strict';
const helper = require('./utils/helper.js');

/**
 * Add scripts in package.json
 * @param  {Object} scripts
 */
module.exports.scripts = (scripts) => {
	helper.pkg.add('scripts', scripts);
	helper.createJSON();
}

/**
 * Add configuration in package.json
 * @param  {Object} configurations
 */
module.exports.config = (configurations) => {
	helper.pkg.add('config', configurations);
	helper.createJSON();
}
