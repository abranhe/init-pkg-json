const pkg = require('./index.js');

pkg.indentation(2);

// Essentials
pkg.init('sdsfome-cool-name', '7.3.0-BETA');

// Info
pkg.description('My short description of my awesome package');
pkg.keywords([
	'short', 'relevant', 'keywords', 'for', 'searching'
]);
pkg.license('MIT');

// Links
pkg.homepage('https://an-amazing-packages.org');
pkg.bugs('https://github.com/an-amazing-user/amazing-package/issues');

pkg.repository('github:user/repo');
// pkg.repository('https://github.com/an-amazing-user/amazing-package/', 'git');

pkg.author('Your Name <you@example.com> (http://your-website.com)');
// pkg.author('Your Name', 'you@example.com', 'http://your-website.com');

pkg.contributors([
	'Your Friend <friend@example.com> (http://friends-website.com)',
	'Other Friend <other@example.com> (http://other-website.com)'
]);

// @TODO
// pkg.contributors([
// 	['a', 'a@j.com', 'https:/a'],
// 	['b', 'b@j.com', 'https:/b'],
// 	['c', 'c@j.com', 'https:/c']
// ]);

pkg.files([
	"filename.js",
	 "directory/",
	 "glob/*.{js,json}"
]);

pkg.main('mainfile.js');
