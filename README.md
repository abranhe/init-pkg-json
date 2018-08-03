<p align="center" id="top">
	<a href="https://www.npmjs.com/package/init-pkg-json"><img src="https://cdn.abraham.gq/projects/init-pkg-json/logo.png" width="300"></a>
	<br>
	<br>
	<br>
	<a href="https://www.npmjs.com/package/init-pkg-json"><b>init-pkg-json</b></a>
	: Complex generator of Package.json
</p>

<p align="center">
	<a href="https://travis-ci.org/abranhe/init-pkg-json"><img src="https://img.shields.io/travis/abranhe/init-pkg-json.svg?logo=travis" /></a>
	<a href="https://github.com/abranhe/init-pkg-json/blob/master/LICENSE"><img src="https://img.shields.io/github/license/abranhe/init-pkg-json.svg" /></a>
	<a href="https://github.com/abranhe"><img src="https://abranhe.com/badge.svg"></a>
	<a href="https://cash.me/$abranhe"><img src="https://cdn.abraham.gq/badges/cash-me.svg"></a>
	<a href="https://www.patreon.com/abranhe"><img src="https://cdn.abraham.gq/badges/patreon.svg" /></a>
</p>

# See

- [Overview](#Overview)
- [Install](#install)
- [Usage](#usage)
- [API](#api)
- [Related](#related)
- [Team](#team)
- [License](#license)

# Overview

**Package.json** is the the [*npm*](https://npmjs.com) or [*yarn*](https://yarnpkg.com) root of the project. This file holds various metadata relevant to the project. This file is used to give information that allows it to identify the project as well as handle the project's dependencies

[`init-pkg-json`](https://github.com/abranhe/init-pkg-json) allows you create and easily customize package.json files. We are based on the [yarn](https://yarnpkg.com/lang/en/docs/package-json/) and [npm](https://docs.npmjs.com/files/package.json) documentation for the package.json configuration.

# Install

```
$ npm install init-pkg-json
```

# Usage

## Essentials

The two most important fields in your `package.json` are `name` and `version`,
without them your package won't be able to install. The `name` and `version`
fields are used together to create a unique id.

###  `name` and `version`

```js
const pkg = require('init-pkg-json');

pkg.init('awesome-package', '1.0.0');
```

### Result in JSON

```json
{
  "name": "awesome-package",
  "version": "1.0.0"
}
```

## Info

### `description`

The description is just a string that helps people understand the purpose of the package. It can be used when searching for packages in a package manager as well.

```js
const pkg = require('init-pkg-json');

pkg.description('My short description of my awesome package');
```

### Result in JSON

```json
{
  "description": "My short description of my awesome package"
}
```

### `keywords`

Keywords are an array of strings that are useful when searching for packages in a package manager.

```js
const pkg = require('init-pkg-json');

pkg.keywords([
	'short',
	'relevant',
	'keywords',
	'for',
	'searching'
]);
```

### Result in JSON

```json
{
  "keywords": ["short", "relevant", "keywords", "for", "searching"]
}
```

### `license`

All packages should specify a license so that users know how they are permitted to use it and any restrictions that you are placing on it.

```js
const pkg = require('init-pkg-json');

pkg.license('MIT');
```

### Result in JSON

```json
{
  "license": "MIT"
}
```


## Links

Various links to documentation, places to file issues and where your package code actually lives.

### `homepage`

The homepage is the URL to the landing page or documentation for your package.

```js
const pkg = require('init-pkg-json');

pkg.homepage('https://your-package.org');
```

### Result in JSON

```json
{
  "homepage": "https://your-package.org"
}
```

### `bugs`

The URL to your project's issue tracker. This can also be something like an email address as well. It provides users a way to find out where to send issues with your package.

```js
const pkg = require('init-pkg-json');

pkg.bugs('https://github.com/user/repo/issues');
```

### Result in JSON

```json
{
  "bugs": "https://github.com/user/repo/issues"
}
```

### `repository`

The repository is the location where the actual code for your package lives.

```js
const pkg = require('init-pkg-json');

// Make sure the url is the first parameter
pkg.repository('https://github.com/an-amazing-user/amazing-package/', 'git');
```

### Result in JSON

```json
{
  "repository": {
		"type": "git",
		"url": "https://github.com/user/repo.git"
	}
}
```

```js
const pkg = require('init-pkg-json');

pkg.repository('github:user/repo');
```

### Result in JSON

```json
{
  "repository": "github:user/repo"
}
```

## Maintainers

The maintainers of your project.

### `author`

Package author information. An author is one person.

```js
const pkg = require('init-pkg-json');

pkg.author('Your Name <you@example.com> (http://your-website.com)');
```

### Result in JSON

```json
{
	"author": "Your Name <you@example.com> (http://your-website.com)"
}
```

```js
const pkg = require('init-pkg-json');

pkg.author('Your Name', 'you@example.com', 'http://your-website.com');
```

### Result in JSON

```json
{
  "author": {
		"name": "Your Name",
		"email": "you@example.com",
		"url": "http://your-website.com"
	}
}
```

### `contributors`

```json
{
  "contributors": [
    { "name": "Your Friend", "email": "friend@example.com", "url": "http://friends-website.com" }
    { "name": "Other Friend", "email": "other@example.com", "url": "http://other-website.com" }
  ],
  "contributors": [
    "Your Friend <friend@example.com> (http://friends-website.com)",
    "Other Friend <other@example.com> (http://other-website.com)"
  ]
}
```

Those that have contributed to your package. Contributors are an array of people.

## Files

You can specify files that will be included in your project, along with the main entry point for your project.

### `files`

```json
{
  "files": [
    "filename.js",
    "directory/",
    "glob/*.{js,json}"
  ]
}
```

These are files that are included in your project. You can specify single files, whole directories or use wildcards to include files that meet a certain criteria.

### `main`

```json
{
  "main": "filename.js"
}
```

This is the primary entry point for the functionality for your project.

### `bin`

```json
{
  "bin": "bin.js",
  "bin": {
    "command-name": "bin/command-name.js",
    "other-command": "bin/other-command"
  }
}
```

Executable files included with your project that will be installed.

### `man`

```json
{
  "man": "./man/doc.1",
  "man": ["./man/doc.1", "./man/doc.2"]
}
```

If you have man pages associated with your project, add them here.

### `directories`

```json
{
  "directories": {
    "lib": "path/to/lib/",
    "bin": "path/to/bin/",
    "man": "path/to/man/",
    "doc": "path/to/doc/",
    "example": "path/to/example/"
  }
}
```

When installing your package, you can specify exact locations to put binary files, man pages, documentation, examples, etc.

## Tasks

Your package can include runnable scripts or other configuration.

### `scripts`

```json
{
  "scripts": {
    "build-project": "node build-project.js"
  }
}
```

Read more at: [npm docs](https://docs.npmjs.com/misc/scripts).

### `config`

```json
{
  "config": {
    "port": "8080"
  }
}
```

Configuration options or parameters used in your scripts.

## Dependencies

Your package will very likely depend on other packages. You can specify those dependencies in your `package.json` file.

### `dependencies`

```json
{
  "dependencies": {
    "package-1": "^3.1.4"
  }
}
```

These are dependencies that are required in both development and production for your package.

> You can specify an exact version, a minimum version (e.g., `>=`) or a range of versions (e.g. `>= ... <`).

### `devDependencies`

```json
{
  "devDependencies": {
    "package-2": "^0.4.2"
  }
}
```

These are packages that are only required when developing your package but will not be installed in production.

### `peerDependencies`

```json
{
  "peerDependencies": {
    "package-3": "^2.7.18"
  }
}
```

Peer dependencies allow you to state compatibility of your package with versions of other packages.

### `optionalDependencies`

```json
{
  "optionalDependencies": {
    "package-5": "^1.6.1"
  }
}
```

Optional dependencies can be used with your package, but are not required. If the optional package is not found, installation still continues.

### `bundledDependencies`

```json
{
  "bundledDependencies": [
    "package-4"
  ]
}
```

Bundled dependencies are an array of package names that will be bundled together when publishing your package.

## System

You can provide system-level information associated with your package, such as operating system compatibility, etc.

### `engines`

```json
{
  "engines": {
    "node": ">=4.4.7 <7.0.0",
    "zlib": "^1.2.8",
    "yarn": "^0.14.0"
  }
}
```

The engines specify versions of clients that must be used with your package. This checks against `process.versions` as well as the current version of yarn.

### `os`

```json
{
  "os": ["darwin", "linux"],
  "os": ["!win32"]
}
```

This specifies operating system compatibility for your package. It checks against `process.platform`.

### `cpu`

```json
{
  "cpu": ["x64", "ia32"],
  "cpu": ["!arm", "!mips"]
}
```

Use this to specify your package will only run on certain CPU architectures. This checks against `process.arch`.

## Publishing

### `private`

```json
{
  "private": true
}
```

If you do not want your package published in a package manager, set this to `true`.

### `publishConfig`

```json
{
  "publishConfig": {
    "..."
  }
}
```

These configuration values will be used when publishing your package. You can tag your package, for example.


# API

**indentation(size)**

> Set the indentation size in package.json file

**init(name, version)**

> Init package.json with name and version

**description(description)**

> Add description to package.json

**keywords([keywords])**

> Add keywords to package.json

**license(license)**

> Add license to package.json

**homepage(link)**

> Add homepage to package.json

**bugs(link)**

> Add bugs link to package.json

**repository(link)**

> Add repository to package.json

**repository(link, type)**

> Add repository and type to package.json

**autor(author)**

> Add author to package.json

**autor(name, email, website)**

> Add author name, email and website to package.json

**contributors([contributors])**

> Add contributors to package.json

**files([files])**

> Add files to package.json

**main(main)**

> Add main to package.json

**man([manuals])**

> Add manuals to package.json

**dir({directories})**

> Add directories to package.json

**scripts({scripts})**

> Add scripts to package.json

**config({config})**

> Add config to package.json

**dependencies({dependencies})**

> Add dependencies to package.json

**devDependencies({devDependencies})**

> Add devDependencies to package.json

**peerDependencies({peerDependencies})**

> Add peerDependencies to package.json

**optionalDependencies({optionalDependencies})**

> Add optionalDependencies to package.json

**bundledDependencies({bundledDependencies})**

> Add bundledDependencies to package.json

**flat(stringBoolean)**

> Add flat to package.json

**resolutions({resolutions})**

> Add resolutions to package.json

**engines({engines})**

> Add engines to package.json

**os([os])**

> Add operating systems to package.json

**cpu([cpu])**

> Add cpu to package.json

**private(stringBoolean)**

> Add privacy to package.json

**publishConfig({config})**

> Add publish config to package.json

# Related

-  [init-pkg-json-cli](https://github.com/abranhe/init-pkg-json-cli): CLI for this module.

# Team

|[![Carlos Abraham Logo](https://avatars3.githubusercontent.com/u/21347264?s=50&v=4)](https://19cah.com)|
| :-: |
| [Carlos Abraham](https://github.com/abranhe) |

# License

[MIT](https://github.com/abranhe/init-pkg-json/blob/master/LICENSE) License © [Carlos Abraham](https://github.com/abranhe/)

<p align="center">
	<a href="#top"><img src="https://cdn.abraham.gq/projects/init-pkg-json/logo.png" width="30"></a>
</p>
