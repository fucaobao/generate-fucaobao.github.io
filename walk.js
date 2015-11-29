'use strict';
var fs = require('fs');
var results = {
    'css': [],
    'js': [],
    'html': [],
    'image': [],
    'other': []
};
var depths = 0;
var maxDepths = 15;
/*
递归处理文件,文件夹
path 路径
*/
function walk(path) {
    depths++;
    var files = fs.readdirSync(path);
    files.forEach(function(filename) {
        var item = path + '/' + filename;
        var stats = fs.statSync(item);
        if (stats.isDirectory()) {
            if (depths > maxDepths) {
                throw new Error('depths out of range, max depths is ' + maxDepths);
            }
            walk(item);
        } else {
            // console.log(filename);
            if (isCSS(filename)) {
                results.css.push(item);
            } else if (isJS(filename)) {
                results.js.push(item);
            } else if (isHTML(filename)) {
                results.html.push(item);
            } else if (isIMAGE(filename)) {
                results.image.push(item);
            } else {
                results.other.push(item);
            }
        }
    });
    return results;
}

function isIMAGE(filename) {
    var image = ['png', 'jpg', 'jpeg', 'gif', 'ico'];
    var suffix = getSuffix(filename);
    if (image.indexOf(suffix) === -1) {
        return false;
    }
    return true;
}

function isCSS(filename) {
    var css = ['css', 'scss', 'sass', 'less'];
    var suffix = getSuffix(filename);
    if (css.indexOf(suffix) === -1) {
        return false;
    }
    return true;
}

function isJS(filename) {
    if ('js' === getSuffix(filename)) {
        return true;
    }
    return false;
}

function isHTML(filename) {
    var html = ['html', 'shtml', 'htm'];
    var suffix = getSuffix(filename);
    if (html.indexOf(suffix) === -1) {
        return false;
    }
    return true;
}

function getSuffix(filename) {
    var index = filename.lastIndexOf('.');
    if (index === -1) {
        return '';
    }
    return filename.substring(index + 1);
}
module.exports = walk;