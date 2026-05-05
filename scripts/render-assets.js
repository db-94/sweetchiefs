'use strict';
const fs = require('fs');
const upath = require('upath');
const sh = require('shelljs');

module.exports = function renderAssets() {
    const sourcePath = upath.resolve(upath.dirname(__filename), '../src/assets');
    const destPath = upath.resolve(upath.dirname(__filename), '../dist/.');
    sh.cp('-R', sourcePath, destPath);

    const publicPath = upath.resolve(upath.dirname(__filename), '../src/public');
    const distPath = upath.resolve(upath.dirname(__filename), '../dist');
    sh.ls(publicPath).forEach(file => {
        sh.cp(upath.join(publicPath, file), upath.join(distPath, file));
    });
};