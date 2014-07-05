# userscript-header-from-package.json

## Installation

``` shell
npm install -g userscript-header-from-package.json
```

## Usage

Given a package.json file with this contents

``` javascript
{
  "name": "userscript-header-from-package.json",
  "version": "0.0.1",
  "license": "ISC",
  "description": "generate a userscript header from data found in package.json",
  "userscript": {
    "include": "http://*.lagomorph.*/*",
    "namespace": "http://www.lagomorph.de/"
  }
}

```

running userscript-header-from-package-json will produce the following output on stdout

```
// ==UserScript==
// @name        userscript-header-from-package.json
// @namespace   http://www.lagomorph.de/
// @description generate a userscript header from data found in package.json
// @license     ISC
// @include     http://*.lagomorph.*/*
// @version     0.0.1
// ==/UserScript==
```

