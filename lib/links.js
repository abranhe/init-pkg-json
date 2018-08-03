'use strict';
const helper = require('./utils/helper.js');

/**
 * Add homepage link in package.json
 * @param  {String} url
 */
module.exports.homepage = (url) => {
	helper.pkg.add('homepage', url);
	helper.createJSON();
}

/**
 * Add Bugs link in package.json
 * @param  {String} url
 */
module.exports.bugs = (url) => {
	helper.pkg.add('bugs', url);
	helper.createJSON();
}

/**
 * Add repository link in package.json
 * @param  {String} url
 * @param  {String} type
 */
module.exports.repository = (url, type) => {
	(typeof type === 'undefined' || !type)
		? helper.pkg.add('repository', url)
		: helper.pkg.add('repository', {
			'type': type,
			'url': url
		})
	helper.createJSON();
}
