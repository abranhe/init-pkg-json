'use strict';
const helper = require('./utils/helper.js');

/**
 * Add author to package.json
 * @param  {String} author
 * @param  {String} email
 * @param  {String} url
 */
module.exports.author = (name, email, url) => {
	((typeof (url && email) === 'undefined' || !(url && email)))
		? helper.pkg.add('author', name)
		: helper.pkg.add('author', {
			'name': name,
			//@TODO validate email
			'email': email,
			'url': url
		});
	helper.createJSON();
}

/**
 * Add contributors to package.json
 * @param  {Array} contributors
 */
module.exports.contributors = (contributors) => {
	helper.pkg.add('contributors', contributors);
	helper.createJSON();
}
