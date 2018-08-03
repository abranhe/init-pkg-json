'use strict';
const helper = require('./utils/helper.js');

/**
 * Add description for package.json
 * @param  {String} summary
 */
module.exports.description = (summary) => {
	helper.pkg.add('description', summary);
	helper.createJSON();
}

/**
 * Add keywords for package.json
 * @param  {Array} keywords
 */
module.exports.keywords = (keywords) => {
	helper.pkg.add('keywords', keywords);
	helper.createJSON();
}

/**
 * Add license for package.json
 * @param  {String} license
 */
module.exports.license = (license) => {
	helper.pkg.add('license', license);
	helper.createJSON();
}
