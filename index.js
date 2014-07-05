#!/usr/bin/env node

var ejs = require('ejs'),
    fs = require('fs'),
    pkg = JSON.parse(fs.readFileSync('package.json', 'utf8')),
    tpl = fs.readFileSync(__dirname + '/header.ejs', 'utf8');

console.log(ejs.render(tpl, {pkg: pkg}));
