'use strict';
// const fs = require('fs');
const helper = require('./lib/utils/helper.js');
const essentials = require('./lib/essentials.js');
const info = require('./lib/info.js');
const links = require('./lib/links.js');
const maintainers = require('./lib/maintainers.js');
const files = require('./lib/files.js');

exports.indentaion = helper.indentaion;

exports.init = essentials.init;

exports.description = info.description;
exports.keywords = info.keywords;
exports.license = info.license;

exports.homepage = links.homepage;
exports.bugs = links.bugs;
exports.repository = links.repository;

exports.author = maintainers.author;
exports.contributors = maintainers.contributors;

exports.files = files.files;
exports.main = files.main;
