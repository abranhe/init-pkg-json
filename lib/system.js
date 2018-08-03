'use strict';
const helper = require('./utils/helper.js');

/**
 * Add engines in package.json
 * @param  {Object} engines
 */
module.exports.engines = (engines) => {
	helper.pkg.add('engines', engines);
	helper.createJSON();
}

/**
 * Add os in package.json
 * @param  {Array} os
 */
module.exports.os = (os) => {
	helper.pkg.add('os', os);
	helper.createJSON();
}

/**
 * Add cpu in package.json
 * @param  {Array} cpu
 */
module.exports.cpu = (cpu) => {
	helper.pkg.add('cpu', cpu);
	helper.createJSON();
}
