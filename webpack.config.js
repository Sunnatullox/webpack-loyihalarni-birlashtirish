"use stric";
let patch = require('path');
module.exports = {
    mode:"development",
    entry:"./src/js/script.js",
    output:{
        filename:"bundle.js",
        patch:__dirname + "dist/js"
    },
    watch:true,

    devtool:"source-map",

    module:{}
}