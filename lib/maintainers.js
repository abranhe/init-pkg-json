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

	// @TODO accept array of contributors
	// helper.pkg.add('contributors', {
	// 		'name': contributors[0][0],
	// 		//@TODO validate email
	// 		'email': contributors[0][1],
	// 		'url': contributors[0][2]
	// });

	helper.pkg.add('contributors', contributors);
	helper.createJSON();
}
